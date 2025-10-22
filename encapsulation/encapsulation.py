"""
Encapsulation is the concept of hiding the implementation details
of an object from the outside world and only exposing the necessary
information through public methods.
"""


class BankAccount:
    def __init__(self, account_number, balance):
        self.__account_number = account_number
        self.__balance = balance

    def deposit(self, amount):
        self.__balance += amount

    def withdraw(self, amount):
        if self.__balance >= amount:
            self.__balance -= amount
        else:
            print("Insufficient funds.")

    def get_balance(self):
        return self.__balance


myAcc = BankAccount(593939, 7000)
myBalance = myAcc.get_balance()
print(myBalance)
