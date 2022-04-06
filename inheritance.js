//Ans1
let parent = {
  institute: "ABC",
  course: "Web Full Stack",
  fee: "30000rs",
};
let child = {
  fname: "Akshay",
  lname: "Gurme",
  branch: "CSE",
  age: 24,
};
child.__proto__ = parent;
console.log(child["institute"]);
console.log(child["course"]);
console.log(child["fee"]);



//Ans2
let parent2 = {
  institute: "ABC",
  course: "Web Full Stack",
  fee: "30000rs",
};
let child2 = {
  fname: "Akshay",
  lname: "Gurme",
  branch: "CSE",
  age: 24,
};

child2.__proto__ = parent2;
for (let key in child2) {
  if (child2.hasOwnProperty(key)) {
    console.log(key, "Own Propertie");
  } else {
    console.log(key, "Inherited Propertie");
  }
}
//Ans3
let array = [48, 89, 77, 99, 18];
let sum = array.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
console.log(sum);
