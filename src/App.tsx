import React from "react";
import logo from "./logo.svg";
import "./App.css";

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let roles: [number, string]; //tuple

// type Person = {
//   name: string;
//   age?: number;
// };

let person: Person = {
  name: "mangesh",
  age: 3
};

let lotOfPeople: Person[] = [person, person];

console.log(lotOfPeople);

let printName: (name: string) => void; // not return undefined thats why void

interface Person {
  name: string;
  age: number;
}

interface guy extends Person {
  class: number;
  gender: string;
}

let mangesh: guy = {
  name: "mangesh",
  age: 25,
  class: 2,
  gender: "male"
};

// console.log(mangesh);

// type Y = {
//   a: string;
//   b: number;
// };

// type X = Y & {
//   c: string;
//   d: number;
// };

// let y: X = {
//   a: "hello",
//   b: 3,
//   c: "hello",
//   d: 6
// };
// console.log(y);

function App() {
  return <div className="App">hello world</div>;
}

export default App;
