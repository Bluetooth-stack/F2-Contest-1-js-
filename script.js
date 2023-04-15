/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((element)=>{
    if(element.profession==='developer'){
      console.log(element);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element)=>{
    if(element.profession==='developer'){
      console.log(element);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let obj =  {
    id:4,name:"susan",
    age:"20",
    profession:"intern"
  };
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach((element, index)=>{
    if(element.profession==='admin'){
      arr.splice(index, 1);
    }
  })
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let secondArray = [
    { id: 8, name: "tony", age: "28", profession: "HR" },
    { id: 12, name: "bruce", age: "30", profession: "project manager" },
    { id: 16, name: "taylor", age: "20", profession: "inern" }
  ]
  arr = arr.concat(secondArray);
  console.log(arr);
}

