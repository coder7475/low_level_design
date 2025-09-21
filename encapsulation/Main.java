public class Main {

  public static void main(String[] args) {
    System.out.println("Encapsulation!");
    BankAccount account = new BankAccount();

    account.deposit(500.0);
    System.out.println("After deposit, balance: $" + account.getBalance());

    account.withdraw(200);
    System.out.println("After withdraw, balance: $" + account.getBalance());

    try {
      account.withdraw(-599.0);

    } catch (IllegalArgumentException e) {
      System.out.println("Error: " + e.getMessage());
    }

    System.out.println("Final Balance: $" + account.getBalance());
  }
}
