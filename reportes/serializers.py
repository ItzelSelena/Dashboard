# serializers.py
#un serializador es una conversion, metes un objeto de django y lo convierte a json :000 
from rest_framework import serializers
from .models import Evaluacion

class EvaluacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluacion
        fields = ['num_evaluacion', 'agente', 'evaluacion', 'mes', 'anio']
