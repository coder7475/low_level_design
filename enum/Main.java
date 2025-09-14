public class Main {

    public enum OrderStatus {
        PLACED,
        CONFIRMED,
        SHIPPED,
        DELIVERED,
        CANCELLED
    }

    public enum Coin {
        PENNY(1),
        NICKEL(5),
        DIME(10),
        QUARTER(25);

        private final int value;

        Coin(int value) {
            this.value = value;
        }

        public int getValue() {
            return value;
        }
    }

    public static void main(String[] args) {
        OrderStatus status = OrderStatus.SHIPPED;

        if (status == OrderStatus.SHIPPED) {
            System.out.println("Your package is on the way!");
        }

        int total = Coin.DIME.getValue() + Coin.QUARTER.getValue(); // 35
        System.out.println(total);
    }
}
