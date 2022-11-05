from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken
from . import serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import BasicAuthentication
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from .utils import create_user_account
@api_view(['GET'])
@permission_classes([IsAuthenticated])
@authentication_classes([BasicAuthentication])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        
        serializer = UserSerializerWithToken(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = create_user_account(**serializer.validated_data)
        data = serializers.UserSerializerWithToken(user).data
        return Response(data=data, status=status.HTTP_201_CREATED)