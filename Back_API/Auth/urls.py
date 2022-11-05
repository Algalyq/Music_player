from django.urls import path
from .views import current_user, UserList
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('token-auth/', obtain_auth_token), # give token of user
    path('current_user/', current_user), # Know current user
    path('users/', UserList.as_view()) # Register new user
]
