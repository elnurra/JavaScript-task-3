const arr = [34, 542, 23, 12, 17];
console.log(arr);

console.log("--------------------------------------");
console.log("Find itteration's function :");

function findFunction(array) {
  let key = 21;
  for (let i = 0; i < array.length; i++) {
    if (key === array[i]) {
      return "The value " + key + " founded in the index " + i;
    }
  }
  return -1;
}
console.log(findFunction(arr));

console.log("--------------------------------------");
console.log("Filter itteration's function :");
function filterFunction(array) {
  let newArray = [];
  let key = 17;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > key) {
      newArray += " " + array[i];
    }
  }
  return "New array:" + " [" + newArray + " ]";
}
console.log(filterFunction(arr));

console.log("--------------------------------------");
console.log("Some itteration's function: ");

function someFunction(array) {
  let key = 12;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > key) {
      return true;
    }
  }
  return false;
}
console.log(someFunction(arr));

console.log("--------------------------------------");
console.log("Every itteration's function: ");

function everyFunction(array) {
  let key = 11;
  for (let i = 0; i < array.length; i++) {
    if (!(array[i] > key)) {
      return false;
    }
  }
  return true;
}
console.log(everyFunction(arr));
