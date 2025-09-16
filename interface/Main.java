public class Main {
  // Interface
  public interface PaymentGateway {
    void initiatePayment(double amount);
  }

  // Concrete implementations
  public static class StripePayment implements PaymentGateway {
    public void initiatePayment(double amount) {
      System.out.println("Processing payment via Stripe: $" + amount);
    }
  }

  public static class RazorpayPayment implements PaymentGateway {
    public void initiatePayment(double amount) {
      System.out.println("Processing payment via Razorpay: ₹" + amount);
    }
  }

  // Service
  public static class CheckoutService {
    private PaymentGateway paymentGateway;

    public CheckoutService(PaymentGateway paymentGateway) {
      this.paymentGateway = paymentGateway;
    }

    public void setPaymentGateway(PaymentGateway paymentGateway) {
      this.paymentGateway = paymentGateway;
    }

    public void checkout(double amount) {
      paymentGateway.initiatePayment(amount);
    }
  }

  // Entry point
  public static void main(String[] args) {
    PaymentGateway stripeGateway = new StripePayment();
    CheckoutService service = new CheckoutService(stripeGateway);
    service.checkout(120.50); // Output: Processing payment via Stripe: $120.5

    // Switch to Razorpay
    PaymentGateway razorpayGateway = new RazorpayPayment();
    service.setPaymentGateway(razorpayGateway);
    service.checkout(150.50); // Output: Processing payment via Razorpay: ₹150.5
  }
}
