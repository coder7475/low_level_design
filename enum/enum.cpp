#include <iostream>
using namespace std;

enum class OrderStatus {
    PLACED,
    CONFIRMED,
    SHIPPED,
    DELIVERED,
    CANCELLED
};

enum class Coin {
    PENNY,
    NICKEL,
    DIME,
    QUARTER
};

// Helper function to get coin value
int getCoinValue(Coin coin) {
    switch(coin) {
        case Coin::PENNY:   return 1;
        case Coin::NICKEL:  return 5;
        case Coin::DIME:    return 10;
        case Coin::QUARTER: return 25;
        default:            return 0;
    }
}

int main() {
  OrderStatus status = OrderStatus::SHIPPED;
  
  if (status == OrderStatus::SHIPPED) {
    cout << "Your package is on the way!" << endl;
  }

  int total = getCoinValue(Coin::DIME) + getCoinValue(Coin::QUARTER); // 35

  cout << "Total Coin: " << total;

  return 0;
}