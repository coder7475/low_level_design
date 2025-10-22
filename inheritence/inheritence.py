"""
Inheritance is a mechanism that allows a class to inherit properties
and methods from another class, called the superclass or parent class.
"""


# Define a parent class called "Vehicle"
class Vehicle:
    def __init__(self, color):
        self.color = color

    def honk(self):
        print("HONK!")


# Child class Car
class Car(Vehicle):
    def __init__(self, color, speed):
        super().__init__(color)
        self.speed = speed

    def accelerate(self):
        self.speed += 10


# Create Objects
my_car = Car("red", 60)

my_car.honk()
color = my_car.color
print(f"My {color} car")
