from django.db import models


# Create your models here.
class Airport(models.Model):
    code = models.CharField(max_length=3, unique=True)
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.name} ({self.code})"


class Flight(models.Model):
    flight_number = models.CharField(max_length=10, unique=True)
    departure_airport = models.ForeignKey(Airport, related_name='departures', on_delete=models.CASCADE)
    arrival_airport = models.ForeignKey(Airport, related_name='arrivals', on_delete=models.CASCADE)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    price = models.DecimalField(max_digits=7, decimal_places=2)

    def __str__(self):
        return f"{self.flight_number} from {self.departure_airport} to {self.arrival_airport}"


class Booking(models.Model):
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE)
    passenger_name = models.CharField(max_length=255)
    passenger_email = models.EmailField()
    booking_date = models.DateTimeField(auto_now_add=True)
    price_paid = models.DecimalField(max_digits=7, decimal_places=2)

    def __str__(self):
        return f"Booking for {self.passenger_name} on {self.flight}"
