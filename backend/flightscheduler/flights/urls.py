from django.urls import path

from .views import *

urlpatterns = [
    path('flights/', FlightListAPIView.as_view(), name='list-create-flight'),
    path('airports/', AirportListAPIView.as_view(), name='list-create-airports'),
    path('bookings/', BookingListAPIView.as_view(), name='list-create-bookings'),
]