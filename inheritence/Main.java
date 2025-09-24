// ? Learn Inheritence
// Car heirarchy
// Superclass Car
class Car {
    protected String make;
    protected String model;

    public void startEngine() {
        System.out.println("Starting Engine...");
    }

    public void stopEngine() {
        System.out.println("Stoping Engine...");
    }
}

// Subclasses ElectricCar, GasCar
class ElectricCar extends Car {
    public void chargeBattery() {
        System.out.println("Charging...");
    }
}

class GasCar extends Car {
    public void fillTank() {
        System.out.println("filling gas...");
    }
}

/**
 * Main class - Entry point for the application
 * 
 * @author fahad
 * @version 1.0
 * @since 2025-09-24
 */
public class Main {

    /**
     * Main method - Entry point of the program
     * 
     * @param args Command line arguments
     */
    public static void main(String[] args) {
        System.out.println("Inheritence!");

        ElectricCar car1 = new ElectricCar();
        car1.startEngine();
        car1.chargeBattery();
        car1.stopEngine();

        GasCar car2 = new GasCar();
        car2.fillTank();
        car2.startEngine();

    }
}
