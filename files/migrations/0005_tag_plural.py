# Generated by Django 3.1.4 on 2021-04-11 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('files', '0004_auto_20210409_1153'),
    ]

    operations = [
        migrations.AddField(
            model_name='tag',
            name='plural',
            field=models.CharField(blank=True, db_index=True, max_length=100, null=True, unique=True),
        ),
    ]
