public class Main {
    public static void main(String[] args) {
        // Creating objects of the Car class
        Car corolla = new Car("Toyota", "Corolla");
        Car mustang = new Car("Ford", "Mustang");

        corolla.accelerate(20);
        mustang.accelerate(40);

        // Displaying status of each car
        corolla.displayStatus();
        System.out.println("-----------------");
        mustang.displayStatus();
    }
}
