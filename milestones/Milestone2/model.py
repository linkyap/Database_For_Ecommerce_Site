from database import *

class Employee: 

    def __init__(self): 
       company = None 
       salary = 0.00 
       ssn = None 
       email = None 
       fullname = None

    @staticmethod 
    def get(ssn): 
        employee_info = Database.select(Query.GET_EMPLOYEE, ssn)[0]
        employee = Employee()
        employee.company = employee_info['company'] 
        employee.salary = employee_info['salary']
        employee.ssn = ssn
        employee.email = employee_info['email']
        employee.fullname = employee_info['fullname'] 
        return employee

    @staticmethod 
    def all(): 
        employees = []
        employee_data = Database.select(Query.ALL_EMPLOYEES)
        for employee_info in employee_data: 
            ssn = employee_info['ssn']
            employee = Employee.get(ssn)
            employees.append(employee)
        return employees


    def find_email_domain(self, domain): 
        employees_with_email_domain = []
        employees = Employee.all()
        for employee in employees: 
            if domain in employee.email: 
                employees_with_email_domain.append(employee.fullname)
        return employees_with_email_domain
        