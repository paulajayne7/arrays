// Q1
function num1(x, y) {
  return x + y;
}
console.log(num1(4, 5));

// Q2
function num2(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return;
  }
  return x + y;
}
console.log(num2(4, 5));

// Q3

var myArr3 = ["1", "2", "3", "4"];
myArr3.reverse();
console.log(myArr3);

// Q4;

var myArr4 = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
console.log(myArr4);

// Q5

var myArr5 = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];

myArr5[0] = "black";
console.log(myArr5);

// Q6
var myArr6 = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
myArr6.splice(4, 5);
console.log(myArr6);

// Q7

// Pop
var myArrPop = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
console.log(myArrPop.pop());

// Push
var myArrPush = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
myArrPush.push("black");
console.log(myArrPush);

// Shift
var myArrShift = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
console.log(myArrShift.shift());

// Unshift
var myArrUnshift = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
myArrUnshift.unshift("black");
console.log(myArrUnshift);

// Concatenating
var myArrConcat1 = ["green", "red", "blue", "purple", "pink"];
var myArrConcat2 = ["violet", "teal", "orange", "yellow", "white"];
myArrConcat3 = myArrConcat1.concat(myArrConcat2);
console.log(myArrConcat3);

// Splicing
var myArrSplice = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
myArrSplice.splice(2, 6);
console.log(myArrSplice);

// Slicing
var myArrSlice = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
var myArrSlice2 = myArrSlice.slice(7, 9);
console.log(myArrSlice2);

// Reverse
var myArrRev = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
myArrRev.reverse();
console.log(myArrRev);

// Join
var myArrJoin = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
console.log(myArrJoin.join("-"));

// forEach
var myArrForeach = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
myArrForeach.forEach(function (item) {
  console.log("The colour", item);
});

// Includes
var myArrIncludes = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
console.log(myArrIncludes.includes("purple"));

// indexOf
var myArrIndexof = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
console.log(myArrIndexof.indexOf("teal"));

// Every
var myArrEvery = [1, 2, 3, 4];
console.log(myArrEvery.every(reply));
function reply(item) {
  if (item < 5) return true;
}

// Some
var myArrSome = [1, 2, 3, 4];
console.log(myArrSome.some(reply));
function reply(item) {
  if (item === 2) return true;
}

// Filter
var myArrFilter = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];

const filtered = myArrFilter.filter(colourLessThan5);
console.log(filtered);
function colourLessThan5(item) {
  if (item.length < 5) {
    return true;
  }
}

// Find
var myArrFind = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
console.log(myArrFind.find(replyColour));
function replyColour(item) {
  if (item === "pink") return item;
}

// findIndex
var myArrFindindex = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
console.log(myArrFindindex.findIndex(replyIndex));
function replyIndex(item) {
  if (item === "red") return true;
}

// Sort
var myArrSort = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
myArrSort = myArrSort.sort();
console.log(myArrSort);

// Map
var myArrMap = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "violet",
  "teal",
  "orange",
  "yellow",
  "white",
];
function createMap(item) {
  return item + " is a colour";
}
var myArrMapNew = myArrMap.map(createMap);
console.log(myArrMapNew);
