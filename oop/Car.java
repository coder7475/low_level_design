public class Car {
  private String brand;
  private String model;
  private int speed;

  public Car(String brand, String model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }

  public void accelerate(int increment) {
    speed += increment;
  }

  public void displayStatus() {
    System.out.println(brand + " is running at " + speed + " km/h");
  }
}

