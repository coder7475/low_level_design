from abc import ABC, abstractmethod

# Contract
class PaymentMethod(ABC):
    @abstractmethod
    def process_payment(self, amount):
        pass

# Concrete Strategies
class CreditCardPayment(PaymentMethod):
    def process_payment(self, amount):
        print(f"Processing credit card payment of ${amount}")
        # Complex logic for credit card processing

class PayPalPayment(PaymentMethod):
    def process_payment(self, amount):
        print(f"Processing PayPal payment of ${amount}")
        # Logic for PayPal processing

class UPIPayment(PaymentMethod):
    def process_payment(self, amount):
        print(f"Processing UPI payment of ₹{amount * 80}")  # Assuming conversion rate
        # Logic for UPI processing


# Final Class
class PaymentProcessor:
    def process(self, payment_method: PaymentMethod, amount: float):
        payment_method.process_payment(amount)

# Usage
credit_card_payment = CreditCardPayment()
paypal_payment = PayPalPayment()
upi_payment = UPIPayment()

payment_processor = PaymentProcessor()
payment_processor.process(credit_card_payment, 100)
payment_processor.process(paypal_payment, 50)
payment_processor.process(upi_payment, 200)