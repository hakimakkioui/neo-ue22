from django.conf import settings
from django.contrib import messages
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.template.loader import render_to_string
from django.urls import reverse
from  django.http import HttpResponseRedirect,HttpResponse
# Create your views here.



def index(request):
    return render(request,'index.html')

def artefac(request):
    return render(request, 'artefac.html')

def iframe(request):
    return render(request, 'iframe.html')

def game(request):
    return render(request, 'game.html')

def highscores(request):
    return render(request, 'highscores.html')

def quiz(request):
    return render(request, 'quiz.html')

def end(request):
    return render(request, 'end.html')

def apropos(request):
    return render(request, 'apropos.html')

def presentation(request):
    return render(request, 'presentation.html')

def allerplusloin(request):
    return render(request, 'allerplusloin.html')

def evaluerlaformation(request):
    return render(request, 'game.html')

def formulaire(request):

    if request.method=='POST':
        prenom = request.POST.get('firstname')
        nom= request.POST.get('name')
        telephone=request.POST.get('phone')
        email=request.POST.get('email')
        message=request.POST.get('message')

        telephone=str(telephone)
        send_mail(
            'Formulaire en ligne envoye par:'+ prenom+nom+'- tel:'+telephone,
             message,
             email ,# expediteur
             [settings.EMAIL_HOST_USER],# destinateur
             fail_silently=False,
        )
        return render(request, 'success.html')
    return render(request, 'formulaire.html')



