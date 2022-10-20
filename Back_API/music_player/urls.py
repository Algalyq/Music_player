
from django.contrib import admin
from django.urls import path,include
from music_player.views import index ,detail


urlpatterns = [
    path('', index),
    path('<int:pk>', detail),
]
