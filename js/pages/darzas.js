const pDOM = document.querySelector("p")

const titleDOM = document.querySelector("title");
const h1DOM = document.querySelector("h1");

const originaleTitle = titleDOM.textContent;
const newTitle = "Zuikio darzas";
let increment = 0;

h1DOM.textContent = newTitle;

setInterval(() => {
  titleDOM.textContent = increment++ % 2 === 0
  ? `${newTitle} (${increment})`
  : `${originaleTitle} (${increment})`

if (increment >= 10){
clearInterval(pTime);
}
}, 1000); 

// kaip sustabdyti esama laikrodi
// if (increment >= 10){
// clearInterval(timer);
// }
// }, 1000); 

let pTime = 0;
setInterval(() => {
  pDOM.textContent = (pTime++ / 100) + "s";
 // pDOM.style.fontSize = (pTime / 10) + "rem";
}, 100);

const vegetables = ["pomidoras", "agurkas", "svogunas", "bulve"];

const ulDOM = document.querySelector(".vegs");
let vegsHTML = "";

for (const veg of vegetables) {

ulDOM.innerHTML += `<li>${veg}</li>`;
// arba ulDOM.innerHTML = ulDOM.innerHTML + `<li>${veg}</li>`;
}

const names = ["Jonas", "Maryte", "Petras", "Ona"];
const namesDOM = document.querySelector(".names");

for ( const name of names) {
  namesDOM.insertAdjacentHTML("beforeend", `<li>${name}</li>`);
}

const fonts = ["Arial", "Verdana", "Tahoma", "sans-serif"];
const fontsDOM = document.querySelector(".fonts");
for (const font of fonts) {
  const HTML = `<li style="font-family: cursive;">${font}</li>`;
  fontsDOM.insertAdjacentHTML("beforeend", HTML);
}