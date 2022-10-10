const personRovshen = {
  firstname: "Yasin",
  lastname: "Veliyev",
  salary: 100,
};

const personElnur = {
  firstname: "Elnur",
  lastname: "Azizov",
  salary: 100,
};

const personAli = {
  firstname: "Ali",
  lastname: "Huseynov",
  salary: 100,
};
const personCeyhun = {
  firstname: "Ceyhun",
  lastname: "Ceyhunov",
  salary: 100,
};
const employees = [personRovshen, personElnur, personCeyhun, personAli];

// function forEachFunction(list, callback) {
//   for (let i = 0; i < list.length; i++) {
//     callback(list[i]);
//   }
// }

function sortAlphabite(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].firstname[0] > arr[j].firstname[0]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(sortAlphabite(employees));

// forEachFunction(employees, (employee) => {
//   console.log(employee);
// });
