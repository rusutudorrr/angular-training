from rest_framework import serializers
from .models import Airport, Flight, Booking


class AirportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airport
        fields = '__all__'


class FlightSerializer(serializers.ModelSerializer):
    departure_airport_name = serializers.SerializerMethodField()
    departure_airport_code = serializers.SerializerMethodField()
    arrival_airport_name = serializers.SerializerMethodField()
    arrival_airport_code = serializers.SerializerMethodField()

    class Meta:
        model = Flight
        fields = ['flight_number', 'departure_airport_name', 'departure_airport_code',
                  'arrival_airport_name', 'arrival_airport_code',
                  'departure_time', 'arrival_time', 'price']

    def get_departure_airport_name(self, obj):
        return obj.departure_airport.name

    def get_arrival_airport_name(self, obj):
        return obj.arrival_airport.name

    def get_departure_airport_code(self, obj):
        return obj.departure_airport.code

    def get_arrival_airport_code(self, obj):
        return obj.arrival_airport.code


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
