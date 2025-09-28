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
  public static void main(String[] args) {
    EmailSender sender1 = new EmailSender();
    SmsSender sender2 = new SmsSender();

    sender1.sendNotification("Dear HR, .....");
    sender2.sendNotification("Happy Birhday!");
  }
}
