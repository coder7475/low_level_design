type NotificationType = "EMAIL" | "SMS" | "Push" | "Slack" | "WhatsApp";

class EmailNotification {
  send(message: string) {
    console.log(`[EMAIL] ${message}`);
  }
}

class SMSNotification {
  send(message: string) {
    console.log(`[SMS] ${message}`);
  }
}

class PushNotification {
  send(message: string) {
    console.log(`[PUSH] ${message}`);
  }
}

class SlackNotification {
  send(message: string) {
    console.log(`[SLACK] ${message}`);
  }
}

class WhatsAppNotification {
  send(message: string) {
    console.log(`[WHATSAPP] ${message}`);
  }
}

class NotificationService {
  sendNotification(type: string, message: string): void {
    if (type === "EMAIL") {
      new EmailNotification().send(message);
    } else if (type === "SMS") {
      new SMSNotification().send(message);
    } else if (type === "Push") {
      new PushNotification().send(message);
    } else if (type === "Slack") {
      new SlackNotification().send(message);
    } else if (type === "WhatsApp") {
      new WhatsAppNotification().send(message);
    } else {
      throw new Error(`Unsupported notification type: ${type}`);
    }
  }
}

// ---- simulation ----
const service = new NotificationService();

const jobs: Array<{ type: NotificationType; message: string }> = [
  { type: "EMAIL", message: "Welcome!" },
  { type: "SMS", message: "Your OTP is 482913" },
  { type: "Push", message: "Build succeeded" },
  { type: "Slack", message: "Deploy started" },
  { type: "WhatsApp", message: "Order shipped" },
];

jobs.forEach((j) => service.sendNotification(j.type, j.message));
