from django.urls import path
from .views import  index,apropos,presentation,formulaire,allerplusloin,evaluerlaformation,artefac,game,highscores,quiz,end,iframe


urlpatterns=[
   path('',index,name='home'),
   path('accueil',index,name='home'),
   path('apropos',apropos,name='apropos'),
   path('presentation',presentation,name='presentation'),
   path('formulaire',formulaire,name='formulaire'),
   path('allerplusloin',allerplusloin,name='allerplusloin'),
   path('evaluerlaformation',evaluerlaformation,name='evaluerlaformation'),
   path('artefac',artefac,name='artefac'),
   path('game',game,name='game'),
   path('highscores',highscores,name='highscores'),
   path('quiz',quiz,name='quiz'),
   path('end',end,name='end'),
   path('iframe',iframe,name='iframe'),

]