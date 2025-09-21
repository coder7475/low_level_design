public class BankAccount {
  private double balance;

  public void deposit(double amount) {
    if (amount <= 0) {
      throw new IllegalArgumentException("Deposit must be positive!");
    }
    balance += amount;
  }

  public void withdraw(double amount) {
    if (amount <= 0) {
      throw new IllegalArgumentException("Withdraw amount must be positive!");
    }
    if (amount > balance) {
      throw new IllegalArgumentException("Insufficient Funds!");
    }

    balance -= amount;
  }

  public double getBalance() {
    return balance;
  }
}
