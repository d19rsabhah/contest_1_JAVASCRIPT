/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// Function to print developers using map
function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// Function to print developers using forEach
function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// Function to add a new employee
function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

// Function to remove employees with "admin" profession
function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

// Function to concatenate two arrays
function concatenateArray() {
  const newArr = [
    { id: 5, name: "emma", age: "22", profession: "developer" },
    { id: 6, name: "liam", age: "24", profession: "designer" },
    { id: 7, name: "noah", age: "21", profession: "tester" },
  ];
  const concatenatedArray = arr.concat(newArr);
  console.log(concatenatedArray);
}
