{
  enum OrderStatus {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED",
  }

  const status = OrderStatus.Shipped;
  console.log(`The order status is: ${status}`);

  class Coin {
    // Static readonly instances (enum-like behavior)
    static readonly Penny = new Coin(1);
    static readonly Nickel = new Coin(5);
    static readonly Dime = new Coin(10);
    static readonly Quarter = new Coin(25);

    private readonly _value: number;

    private constructor(value: number) {
      this._value = value;
    }

    getValue(): number {
      return this._value;
    }

    static getAllCoins(): Coin[] {
      return [Coin.Penny, Coin.Nickel, Coin.Dime, Coin.Quarter];
    }
  }

  const total: number = Coin.Dime.getValue() + Coin.Quarter.getValue();
  console.log(`Total value of Dime and Quarter: ${total} cents`);
  console.log("All Coins: ", Coin.getAllCoins());
}
