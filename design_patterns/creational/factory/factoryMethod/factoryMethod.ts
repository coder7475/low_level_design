{
  interface Notification {
    send(message: string): void;
  }

  // Concrete ProductA
  class EmailNotification implements Notification {
    send(message: string): void {
      console.log(`Sending email: ${message}`);
    }
  }

  // Concrete ProductB
  class SMSNotification implements Notification {
    send(message: string): void {
      console.log(`Sending SMS: ${message}`);
    }
  }

  class PushNotification implements Notification {
    send(message: string): void {
      console.log(`Sending push notification: ${message}`);
    }
  }

  class SlackNotification implements Notification {
    send(message: string): void {
      console.log(`Sending SLACK: ${message}`);
    }
  }

  // Creator
  abstract class NotificationCreator {
    // Factory Method
    abstract createNotification(): Notification;

    // Common logic using the factory method
    send(message: string): void {
      const notification = this.createNotification();
      notification.send(message);
    }
  }

  // Concrete CreatorA
  class EmailNotificationCreator extends NotificationCreator {
    createNotification(): Notification {
      return new EmailNotification();
    }
  }

  // Concrete CreatorB
  class SMSNotificationCreator extends NotificationCreator {
    createNotification(): Notification {
      return new SMSNotification();
    }
  }

  class PushNotificationCreator extends NotificationCreator {
    createNotification(): Notification {
      return new PushNotification();
    }
  }

  class SlackNotificationCreator extends NotificationCreator {
    createNotification(): Notification {
      return new SlackNotification();
    }
  }

  // CLient code
  class FactoryMethodDemo {
    static main(): void {
      let creator: NotificationCreator;

      // Send Email
      creator = new EmailNotificationCreator();
      creator.send("Welcome to our platform!");

      // Send SMS
      creator = new SMSNotificationCreator();
      creator.send("Your OTP is 123456");

      // Send Push Notification
      creator = new PushNotificationCreator();
      creator.send("You have a new follower!");
    }
  }

  FactoryMethodDemo.main();
}
