abstract class Vehicle {
  String brand;

  Vehicle(String brand) {
    this.brand = brand;
  }

  // Abstract Method
  abstract void start();

  void displayBrand() {
    System.out.println("Brand: " + brand);
  }
}

class Car extends Vehicle {
  Car(String brand) {
    super(brand);
  }

  @Override
  void start() {
    System.out.println("Car is Starting....");
  }
}

public class Abstraction {
  public static void main(String[] args) {
    Car car1 = new Car("BMW");

    car1.displayBrand();
    car1.start();
  }
}
