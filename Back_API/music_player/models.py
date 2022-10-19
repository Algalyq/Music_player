from django.db import models
from django.contrib.auth.models import User

class Song(models.Model):

    Language_choices = (
        ('Kazakh', 'Kazakh'),
        ('Russian','Russian'),
    )
    
    name = models.CharField(max_length=200)
    album = models.CharField(max_length=200)
    language = models.CharField(choices=Language_choices,max_length=20, default='Kazakh')
    song_img = models.FileField()
    year = models.IntegerField()
    singer = models.CharField(max_length=200)
    song_file = models.FileField()

class PlayList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    playlist_name = models.CharField(max_length=200)
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    


class Favourite(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    is_fav = models.BooleanField(default=False)


class Recent(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    song = models.ForeignKey(Song, on_delete=models.CASCADE)