from django.urls import path
from .views import SateliteListView, SateliteDetailView

urlpatterns = [
    path('satelites/', SateliteListView.as_view(), name='satelite-list'),
    path('satelites/<int:pk>/', SateliteDetailView.as_view(), name='satelite-detail'),
    # Adicione outras rotas conforme necessário
]
