from django.shortcuts import render
from rest_framework import status
from .models import * 
from rest_framework.decorators import api_view
from rest_framework.response import Response
from music_player.serializers import SongSerializer
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User


@api_view(['GET'])
def index(request):
    if request.method == 'GET':
        songs = Song.objects.all()
        serializer = SongSerializer(songs,many=True)
        return Response(serializer.data)


@api_view(["GET"])
def detail(request, pk):
    if request.method == 'GET':
        try:
            songs = Song.objects.get(pk=pk) 
            serializer = SongSerializer(songs)
        except Song.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.data)


 
