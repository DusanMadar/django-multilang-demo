from django.shortcuts import render


def index(request):
    return render(request, 'multilang/index.html')


def greeting(request):
    return render(request, 'multilang/greeting.html')
