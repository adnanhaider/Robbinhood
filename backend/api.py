from backend.models import Stock
from rest_framework import viewsets, permissions
from backend.serializers import StockSerializer

# viewset = it allows us to create a full crud api without having to specify explicit methods
# for the functionality, (kind of how ruby on rails works)

class StockViewSet(viewsets.ModelViewSet):
    queryset = Stock.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StockSerializer