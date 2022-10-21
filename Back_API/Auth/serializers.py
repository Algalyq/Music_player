from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

from django.contrib.auth import get_user_model, password_validation
from django.contrib.auth.models import BaseUserManager

User = get_user_model()

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=300, required=True)
    password = serializers.CharField(required=True, write_only=True)

class AuthUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username','first_name','last_name')
   
    def get_auth_token(self, obj):
        token = Token.objects.create(user=obj)
        return token.key


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','first_name','last_name','password']
        
        
        extra_kwargs = {'password': {
            'write_only':True,
            'required':True
        }}

    


class UserRegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name')

    def validate_username(self, value):
        user = User.objects.filter(username=value)
        if user:
            raise serializers.ValidationError("Email is already taken")
        return BaseUserManager.normalize_email(value)
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
    def validate_password(self, value):
        password_validation.validate_password(value)
        return value
    
    
class EmptySerializer(serializers.Serializer):
    pass 


class PasswordChangeSerializer(serializers.Serializer):
    current_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate_current_password(self, value):
        if not self.context['request'].user.check_password(value):
            raise serializers.ValidationError('Current password does not match')
        return value

    def validate_new_password(self, value):
        password_validation.validate_password(value)
        return value

