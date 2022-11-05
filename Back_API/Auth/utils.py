
from Auth.serializers import UserSerializer


from django.contrib.auth import get_user_model

from rest_framework.authtoken.views import Token
from django.contrib.auth.models import User 
def my_jwt_response_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }
    
    
def create_user_account(username, password, first_name="",
                        last_name="", **extra_fields):
    user = get_user_model().objects.create_user(
        username=username, password=password, first_name=first_name,
        last_name=last_name, **extra_fields)
    Token.objects.create(user=user)
    return user