from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token
from django.contrib.auth import get_user_model



User = get_user_model()

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=300, required=True)
    password = serializers.CharField(required=True, write_only=True)


class AuthUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username','first_name','last_name')
        
    def get_auth_token(self,obj):
        token = Token.objects.create(user=obj)
        return token.key
    



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','first_name','last_name','email','password']
        
        
        extra_kwargs = {'password': {
            'write_only':True,
            'required':True
        }}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
    
class EmptySerializer(serializers.Serializer):
    pass 
