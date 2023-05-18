from django.db import models

class objetos_espaciais(models.Model):
    nome = models.CharField(max_length=100)
    data_de_lancamento = models.DateField()
    veiculo_lancador = models.CharField(max_length=100)
    cospar_id = models.CharField(max_length=100)
    funcao_generica = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    # Adicione outros campos conforme necessário

    def __str__(self):
        return self.nome
