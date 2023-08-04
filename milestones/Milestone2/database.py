# In this file you must implement your main query methods 
# so they can be used by your database models to interact with your bot.

import os
from pymysql import DatabaseError
import pymysql.cursors

# note that your remote host where your database is hosted
# must support user permissions to run stored triggers, procedures and functions.
db_host = os.environ["DB_HOST"]
db_username = os.environ["DB_USER"]
db_password = os.environ["DB_PASSWORD"]
db_name = os.environ["DB_NAME"]


class Database:

    
    def _connect(self):
        """
        This method creates a connection with your database
        IMPORTANT: all the environment variables must be set correctly
                   before attempting to run this method. Otherwise, it
                   will throw an error message stating that the attempt
                   to connect to your database failed.
        """
        try:
            conn = pymysql.connect(host=db_host,
                                   port=3306,
                                   user=db_username,
                                   password=db_password,
                                   db=db_name,
                                   charset="utf8mb4", 
                                   cursorclass=pymysql.cursors.DictCursor)
            return conn
        except DatabaseError as err:
            print(err.args[1])
            return None

    def _query_response(self, query, values=None, fetchresults=False, many=False): 
        connection = self._connect()
        cursor = connection.cursor()
        if values: 
            if many: 
               cursor.executemany(query, values) 
            else: 
               cursor.execute(query, values)
        else: 
            cursor.execute(query)
        connection.commit()
        connection.close()
        if fetchresults: 
            return cursor.fetchall()
        return None


    @staticmethod 
    def select(query, values=None): 
      db = Database() 
      return  db._query_response(query, values, fetchresults=True) 
    

class Query: 
    ALL_EMPLOYEES = """SELECT * FROM Employee e 
                      JOIN Resident r ON r.ssn = e.ssn
                      JOIN Company c ON c.company_id = e.company"""
    GET_EMPLOYEE = """SELECT * FROM Employee e 
                      JOIN Resident r ON r.ssn = e.ssn
                      JOIN Company c ON c.company_id = e.company
                      WHERE r.ssn = %s"""
    
    







  

    
    

   

      
    
    
   

         
       
           
   
        