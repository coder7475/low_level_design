from abc import ABC, abstractmethod


# Interface
class Sender(ABC):
    @abstractmethod
    def send(self, message: str) -> None:
        pass


class NotificationService:
    def __init__(self, sender: Sender):
        self.sender = sender  # Injected dependency

    def notify_user(self, message: str) -> None:
        self.sender.send(message)  # uses sender temporarily


class EmailSender(Sender):
    def send(self, message: str) -> None:
        print(f"Sending email: {message}")


email_sender = EmailSender()
notifier = NotificationService(email_sender)

notifier.notify_user("Welcome")
