public class Calculator {
  public int add(int a, int b) {
    return a + b;
  }

  public double add(double a, double b) {
    return a + b;
  }

  public int add(int a, int b, int c) {
    return a + b + c;
  }

  public static void main(String[] args) {
    Calculator cal = new Calculator();

    System.out.println(cal.add(5, 10));
    System.out.println(cal.add(5.5, 3.2));
    System.out.println(cal.add(1, 2, 3));
  }
}
