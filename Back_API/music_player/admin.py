from django.contrib import admin
from .models import *


@admin.register(Song)
class SongAdmin(admin.ModelAdmin):
    list_display = ('name', 'singer','album')
    search_fields = ['name', 'singer']
    ordering = ['name']
    
    
@admin.register(PlayList)
class PlayListAdmin(admin.ModelAdmin):
    list_display = ('user', 'playlist_name','song')
    search_fields = ['user', 'song']
    ordering = ['user']
    
@admin.register(Favourite)
class FavouriteAdmin(admin.ModelAdmin):
    list_display = ('user', 'song')
    search_fields = ['user', 'song']
    ordering = ['user']