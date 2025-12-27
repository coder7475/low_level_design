#include <iostream>
#include <string>
using namespace std;

class Car {
  private:
    // Attributes
    string brand;
    string model;
    int speed;

  
  public:
    // Constructor
    Car(const string& brand, const string& model)
      : brand(brand), model(model), speed(0) {

      }

    void showInfo() {
      cout << "Brand: " << brand << "\nModel: " << model << "\nSpeed: " << speed << endl;
    }

    void accelerate(int increment) {
      speed += increment;
    }

    void displayStatus() {
      cout << brand << " is running at " << speed << " km/h." << endl;
    }
};

// Usage 
int main() {
  Car myCar("Toyota", "Corolla");

  cout << "My Car Info:\n-----------\n";
  myCar.showInfo();
  
  cout << "Incrementing speed by 40 km/h" << endl;
  myCar.accelerate(40);
  myCar.displayStatus();

  return 0;
}