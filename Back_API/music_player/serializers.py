from rest_framework import serializers
from .models import *

class SongSerializers(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ['id', 'name','singer', 'song_file']