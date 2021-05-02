# Generated by Django 3.1.4 on 2021-04-30 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('files', '0007_merge_20210425_1934'),
    ]

    operations = [
        migrations.AddField(
            model_name='media',
            name='recorded_location_locality',
            field=models.CharField(blank=True, help_text='The state or province where the recording took place.', max_length=90, null=True, verbose_name='Locality Recorded'),
        ),
        migrations.AddField(
            model_name='media',
            name='recorded_location_place',
            field=models.CharField(blank=True, help_text='The city or town where the recording took place.', max_length=90, null=True, verbose_name='Place Recorded'),
        ),
        migrations.AddField(
            model_name='media',
            name='recorded_location_sublocality',
            field=models.CharField(blank=True, help_text='The county or parish where the recording took place.', max_length=90, null=True, verbose_name='Sublocality Recorded'),
        ),
    ]
