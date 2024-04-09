"""Indicadores URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from .views import current_datetime, HomeView, AgentLisView
#entonces a quí se ponen los templates? las rutas,no? xD va se importan las vistas de views y se les asigna una ruta ahhh sisisi oki 
############### mandar al forntend
from rest_framework.routers import DefaultRouter
from .views import EvaluacionViewSet
#################### paso 3 para mandar al frontend
################manera 2 
from .views import ListaEvaluaciones

router = DefaultRouter()
router.register(r'evaluaciones', EvaluacionViewSet)

urlpatterns = [
    path('current_datetime/', current_datetime, name='current_datetime'),
    path('home/', HomeView.as_view(), name='home'),
    path('list_agent/', AgentLisView.as_view(), name='list_agent'), 
    #################### paso 3 para mandar al frontend manera 1 ESTA ES UN ROUTER
    path('apievaluacion/', include(router.urls)),
    ################# manera 2 Y ESTA ES UNA VISTA SIMPLE 
    path('evaluaciones/', ListaEvaluaciones.as_view(), name='evaluaciones'), 
]