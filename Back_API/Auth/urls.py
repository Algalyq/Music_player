from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from Auth.views import  UserViewSet, AuthViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('all', UserViewSet, basename='all')
router.register('', AuthViewSet, basename='login')
urlpatterns = [
    path('', include(router.urls))
]

