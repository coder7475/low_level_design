# GOD Class - Employee class with four reponsibility
class EmployeeGOD:
    def __init__(self, name: str, email: str, salary: float):
        self._name = name
        self._email = email
        self._salary = salary

    def calculate_salary(self):
        # Complex salary calculation logic
        # Includes tax calculations
        pass

    def save_to_database(self):
        # Connect to database
        # Prepare SQL
        # Execute query
        pass

    def generate_payslip(self):
        # Format payslip
        # Add company logo
        # Convert to PDF
        pass

    def send_payslip_email(self):
        # Connect to email server
        # Create email with attachment
        # Send email
        pass


# Applying SRP
# Core Class
class Employee:
    def __init__(self, name: str, email: str, base_salary: float):
        self._name = name
        self._email = email
        self._base_salary = base_salary

    def get_name(self) -> str:
        return self._name

    def get_email(self) -> str:
        return self._email

    def get_base_salary(self) -> float:
        return self._base_salary


# Responsibility 1: Salary Calculation
class PayrollCalculator:
    def calculate_net_pay(self, employee: Employee) -> float:
        base = employee.get_base_salary()

        tax = base * 0.2
        benefits = 1000

        return base - tax + benefits


# Responsibility 2: Persistence to Database
class EmployeeRepository:
    def save(self, employee: Employee):
        print(f"Saving employee {employee.get_name()} to database...")


# Responsibility 3: Payslip Generation
class PayslipGenerator:
    def generate_payslip(self, employee: Employee, net_pay: float) -> str:
        return (
            f"Payslip for: {employee.get_name()}\n"
            f"Email: {employee.get_email()}\n"
            f"Net Pay: ₹{net_pay}\n"
            "----------------------------\n"
        )


# Responsiblity 4: Emailing the payslip
class EmailService:
    def send_payslip(self, employee: Employee, payslip: str):
        print(f"Sending payslip to: {employee.get_email()}")
        print(payslip)
