
/**
 * Main class - Entry point for the application
 * 
 * @author fahad
 * @version 1.0
 * @since 2025-09-29
 */
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

// Unidirectional Association
// Car has a Driver, but Driver doesn't know Car
class Driver {
    private String name;

    public Driver(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

class Car {
    private Driver driver; // Car has-a Driver

    public Car(Driver driver) {
        this.driver = driver;
    }

    public void drive() {
        System.out.println(driver.getName() + " is driving the car.");
    }
}

// Bidirectional Association
class Author {
    private String name;
    private List<Book> books = new ArrayList<>();

    public Author(String name) {
        this.name = name;
    }

    public void addBook(Book book) {
        books.add(book);
        book.setAuthor(this); // Set the reverse association
    }

    public String getName() {
        return name;
    }

    public List<Book> getBooks() {
        return Collections.unmodifiableList(books);
    }
}

class Book {
    private String title;
    private Author author;

    public Book(String title) {
        this.title = title;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public Author getAuthor() {
        return author;
    }
}

public class Main {

    /**
     * Main method - Entry point of the program
     * 
     * @param args Command line arguments
     */
    public static void main(String[] args) {
        System.out.println("Class Relationships");

        // Unidirectional Example
        Driver driver = new Driver("Fahad");
        Car car = new Car(driver);
        car.drive();

        // Bidirectional Example
        Author author = new Author("George Orwell");
        Book book1 = new Book("1984");
        Book book2 = new Book("Animal Farm");

        author.addBook(book1);
        author.addBook(book2);

        System.out.println("\nAuthor: " + author.getName());
        System.out.println("Books written:");
        for (Book b : author.getBooks()) {
            System.out.println("- " + b.getTitle() + " (Author: " + b.getAuthor().getName() + ")");
        }
    }
}
