/* for (var i = 0; i < 10; i++) {}
console.log(i); */
/* for (let i = 0; i < 10; i++) {}
console.log(i);

for (let i = 0; i < 10; i++) {
  const a = 10;

  console.log(i);
}
console.log(i);

let user = {
  name: "ls",
  age: 12,
  gender: "男"
};
const { name: username, age: userage, gender } = user;
console.log(username);
console.log(userage);
console.log(gender);

let { name, age } = { name: "zhnagshan", age: 18 }; */
var add = (x, y) => {
  return x + y;
};

console.log(add(1, 2));

var add = (x, y) => x + y;

console.log(add(1, 3));

var add = x => x + 20;
` `;
console.log(add(1));
