const instructors = [
  { name: "Quincy", specialty: "Quantum Mechanics" },
  { name: "Croy", specialty: "Mechanics" },
  { name: "Josh", specialty: "Quantums" },
];

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
  instructor_names.push(instructors[i].name);
}
console.log(instructor_names);

// do the same thing more elegantly with .map()
const instructorNames = instructors.map((instructor) => instructor.name); // fat arrow provides the required return value for .map()
console.log(instructorNames);

const instructorInfo = `${instructors.map((instructors) => {
  instructors.specialty;
})}`;
console.log(instructorInfo);

let kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
console.log(kvArray);

let reformattedArray = kvArray.map((obj) => {
  let rObj = {};
  rObj[obj.key] = obj.value;
  console.log(rObj);
  return rObj;
});
