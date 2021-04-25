from django.test import TestCase
from files.forms import MediaForm
from files.models import Media, Tag
from users.models import User

class TagSuggesterTests(TestCase):

    def setUp(self):
        super(TagSuggesterTests, self).setUp()
        Tag.objects.create(title='sighting', plural='sightings')
        Tag.objects.create(title='craft', plural='crafts', parent_tag=Tag.objects.get(title='sighting'))

    def tearDown(self):
        super(TagSuggesterTests, self).tearDown()
        Tag.objects.all().delete() 

    #tests for suggestions shown in help text:

    def test_no_subtags_if_tag_is_not_parent(self):      
        response = self.client.get(
            "/subtags/", data={"new_tags": "dummy, craft"}
        )

        self.assertEqual(response.status_code, 200) # no errors
        self.assertEqual(response.content.decode(response.charset), "") # returned no subtag

    def test_no_subtags_if_tag_is_new_user_tag(self):      
        response = self.client.get(
            "/subtags/", data={"new_tags": "dummy, car"}
        )

        self.assertEqual(response.status_code, 200) # no errors
        self.assertEqual(response.content.decode(response.charset), "") # returned no subtag

    def test_returns_subtags(self):      
        response = self.client.get(
            "/subtags/", data={"new_tags": "dummy, sighting"}
        )

        self.assertEqual(response.status_code, 200) # no errors
        self.assertEqual(response.content.decode(response.charset), "craft") # returned correct subtag

    def test_same_tag_for_singular_and_plural(self):      
        response = self.client.get(
            "/subtags/", data={"new_tags": "dummy, sightings"}
        )

        self.assertEqual(response.status_code, 200) # no errors
        self.assertEqual(response.content.decode(response.charset), "craft") # returned correct subtag

    #test for updates in db
    #todo: test that form saves tags in tags field and test that view saves tags in db
    #todo: test that form does not save plural tags in tags field and test that view does not save plural tags in db