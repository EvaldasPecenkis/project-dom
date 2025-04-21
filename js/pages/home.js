import { header } from "../components/header.js";

header ();

console.log("home");

const h1DOM = document.getElementsByTagName("h1");
console.log(h1DOM);

const titleDOM = document.getElementById("title");
console.log(titleDOM);
console.log([titleDOM]);

const errorDOM = document.getElementById("error");
console.log(errorDOM);

const listDOM = document.getElementsByClassName("list");
console.log(listDOM);
////////////////////////////

const pomidorasDOM = document.querySelector(".list > .item");
console.log(pomidorasDOM);

const darzovesDOM = document.querySelectorAll(".list:nth-of-type(1) > .item");
console.log(darzovesDOM);
