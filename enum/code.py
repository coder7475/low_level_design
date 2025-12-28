from enum import Enum

# Simple Enum
class OrderStatus(Enum):
  PLACED = "PLACED"
  CONFIRMED = "CONFIRMED"
  SHIPPED = "SHIPPED"
  DELIVERED = "DELIVERED"
  CANCELLED = "CANCELLED"

# Usage
status = OrderStatus.SHIPPED

if status == OrderStatus.SHIPPED:
    print("Your package is on the way!")

class Coin(Enum):
    PENNY = 1
    NICKEL = 5
    DIME = 10
    QUARTER = 25
    
    # constructor
    def __init__(self, value):
        self.coin_value = value
    
    def get_value(self):
        return self.coin_value
    
total = Coin.DIME.get_value() + Coin.QUARTER.get_value()  # 35
print(f"Total Coins: {total}")