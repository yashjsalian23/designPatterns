//Employee database
// create different types of employee with a name and type (Developer, tester, UI, etc)

function Developer(name){
    this.name = name;
    this.type = 'Developer';
}

function Tester(name){
    this.name = name;
    this.type = 'Tester'
}

function EmployeeFactory(){
    this.create = (name,type) => {
        switch(type){
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    }
}

function disp(){
    console.log(`Hi I am ${this.name} and my role is ${this.type}`);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Yash",1));
employees.push(employeeFactory.create("Anil",2));
employees.push(employeeFactory.create("Shankar",1));

employees.forEach(emp => disp.call(emp)); //call will help in accessing name and type using this keyword