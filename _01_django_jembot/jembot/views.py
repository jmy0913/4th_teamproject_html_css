from django.shortcuts import render

from .models import Custom_user, Nickname

# Create your views here.

def index(request):
    user = Custom_user.objects.get(id=1)
    nickname = user.nickname

    return render(request, "index1.html", {"nickname": nickname})
