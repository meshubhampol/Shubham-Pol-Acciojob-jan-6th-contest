/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(mapDevelopers);
}

function mapDevelopers(data) {
  if(data.profession==='developer') {
    console.log(data);
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(logData);
}

function logData(data) {
  if(data.profession==='developer') {
    console.log(data);
  }
}

function addData() {
  //Write your code here
  let employee= {
    id: 5,
    name: 'richa', 
    age: '21', 
    profession: 'intern'
  }

  arr.push(employee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  deleteAdmin(arr);
  console.log(arr);
}

function deleteAdmin(arr) {
  for(let i in arr) {
    if(arr[i].profession === 'admin') {
      delete arr[i];
    }
  }
}

function concatenateArray() {
  //Write your code here
  let arr2 = [
    { id: 6, name: "jonathan", age: "31", profession: "manager" },
    { id: 7, name: "jimmy", age: "30", profession: "manager" },
    { id: 8, name: "kristina", age: "29", profession: "senior developer" },
  ];

  let newArr = arr.concat(arr2);
  console.log(newArr);
}
