# Generated by Django 3.1.4 on 2021-04-30 14:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('files', '0008_auto_20210430_1130'),
    ]

    operations = [
        migrations.AddField(
            model_name='media',
            name='recorded_location_country',
            field=models.CharField(blank=True, help_text='The country where the recording took place.', max_length=90, null=True, verbose_name='Country Recorded'),
        ),
    ]
