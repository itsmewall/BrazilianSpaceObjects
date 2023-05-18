from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import objetos_espaciais

class SateliteListView(ListView):
    model = objetos_espaciais
    template_name = 'satelite_list.html'  # Opcional: especifique o template para exibir a lista

class SateliteDetailView(DetailView):
    model = objetos_espaciais
    template_name = 'satelite_detail.html'  # Opcional: especifique o template para exibir os detalhes

class SateliteAPIView(APIView):
    def get(self, request):
        satelites = objetos_espaciais.objects.all()
        # Realize qualquer manipulação ou lógica necessária nos dados
        # e retorne a resposta
        return Response("Houston, we don't have a problem!")  # Retorne os dados formatados como resposta
