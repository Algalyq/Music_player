from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from music_player.views import index ,detail


urlpatterns = [
    path('admin/', admin.site.urls),
    path('songs/',include('music_player.urls')),
    path('', include('Auth.urls'))
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)