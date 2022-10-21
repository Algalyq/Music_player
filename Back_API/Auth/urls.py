from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from Auth.views import  UserViewSet, AuthViewSet
from rest_framework.routers import DefaultRouter
from rest_framework import routers
router = routers.DefaultRouter(trailing_slash=False)
router.register('api/auth', AuthViewSet, basename='auth')
router.register('api/user', UserViewSet, basename='user')
urlpatterns = [
    path('', include(router.urls))
]

