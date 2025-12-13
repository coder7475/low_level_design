{
  type NotificationType = "EMAIL" | "SMS" | "PUSH";

  interface Notification {
    send(message: string): void;
  }

  class EmailNotification implements Notification {
    send(message: string): void {
      console.log(`[EMAIL] ${message}`);
    }
  }

  class SMSNotification implements Notification {
    send(message: string): void {
      console.log(`[SMS] ${message}`);
    }
  }

  class PushNotification implements Notification {
    send(message: string): void {
      console.log(`[PUSH] ${message}`);
    }
  }

  class SimpleNotificationFactory {
    static createNotification(type: NotificationType): Notification {
      switch (type) {
        case "EMAIL":
          return new EmailNotification();
        case "SMS":
          return new SMSNotification();
        case "PUSH":
          return new PushNotification();
        default: {
          // Exhaustive check (helps when adding new types)
          const _exhaustive: never = type;
          throw new Error(`Unknown type: ${_exhaustive}`);
        }
      }
    }
  }

  class NotificationService {
    sendNotification(type: NotificationType, message: string): void {
      const notification = SimpleNotificationFactory.createNotification(type);
      notification.send(message);
    }
  }

  // Example usage
  const service = new NotificationService();
  service.sendNotification("EMAIL", "Welcome!");
  service.sendNotification("SMS", "Your OTP is 482913");
  service.sendNotification("PUSH", "Build succeeded");
}
