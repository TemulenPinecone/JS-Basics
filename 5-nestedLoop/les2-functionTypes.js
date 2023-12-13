function doSomething() {
  console.log(`Doing something`);
}

let doAnotherThing = () => {
  console.log(`Doing Another thing`);
};

// () => - This is function гэж зааж өгч байгаа
// {} - function-ий хийх зүйл
// () = {} - anonymous arrow function

function doSomething() {
  console.log(`Doing something`);
}

let doAnotherThing = () => {
  doSomething();
  console.log(doAnotherThing);
};

doAnotherThing(`Hi`);

function parentFunction() {
  console.log(`Doing something`);
}

// let - variable л зарлана

let 


