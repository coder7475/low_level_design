interface NotificationSender {
  void sendNotification(String message);
}

class EmailSender implements NotificationSender {
  public void sendNotification(String message) {
    System.out.println("Sending EMAIL: " + message);
  }
}

class SmsSender implements NotificationSender {
  public void sendNotification(String message) {
    System.out.println("Sending SMS: " + message);
  }
}

public class Main {

  public static void notifyUser(NotificationSender sender, String message) {
    sender.sendNotification(message);
  }

  public static void main(String[] args) {
    EmailSender sender1 = new EmailSender();
    SmsSender sender2 = new SmsSender();

    notifyUser(sender1, "Hello");
    notifyUser(sender2, "Hello");

  }
}
