# Generated by Django 3.2 on 2021-04-09 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_geust_can_pause_room_guest_can_pause'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='host',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
