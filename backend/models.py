from django.db import models

# Create your models here.

class Stock(models.Model):
    company = models.CharField(max_length=100)
    market_value = models.CharField(max_length=100)
