# Generated by Django 4.2.6 on 2023-10-06 17:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('junction', '0009_rename_first_name_user_full_name_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='course',
            old_name='rating',
            new_name='course_rating',
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField()),
                ('review', models.CharField(max_length=100)),
                ('course_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='junction.course')),
                ('learner_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='messages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message_title', models.CharField(max_length=20)),
                ('message', models.CharField(max_length=100)),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('course_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='junction.course')),
                ('instructor_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='instructor_id', to=settings.AUTH_USER_MODEL)),
                ('learner_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='learner_id', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]