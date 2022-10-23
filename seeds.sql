INSERT INTO department (name)
VALUES ("Sales"), ("Human Resources"), ("Engineers"), ("Managment"), ("Quality Assurance");

INSERT INTO role (title, salary,department_id)
VALUE ("Junior developer", 40000.00,3), ("Senior developer", 60000.00,3), ("Database Engineer", 80000.00,3), ("QA engineer", 75000.00,5), ("Manager",100000.00,4);

INSERT INTO employee (first_name, last_name,role_id)
VALUE ("John", "Doe",2), ("Jake", "Snake",3), ("Missy", "Elliot",1), ("Harley", "Quinn",5), ("John", "Stewart",4);