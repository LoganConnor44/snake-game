arrOne = [1,2,3];
arrTwo = ["a", "b", "c"];
arrThree = [9,8,7];

const map = f => xs => xs.map(f);

let x = map(arrOne)(arrTwo);

console.log(
  x
);