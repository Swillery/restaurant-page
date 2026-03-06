import loadHome from "./home.js"
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

function clearContent() {
  content.textContent = "";
}

homeBtn.addEventListener('click', () => {
     clearContent();
     loadHome();
    });
menuBtn.addEventListener('click', () => {
     clearContent();
     loadMenu();
    });
aboutBtn.addEventListener('click', () => {
     clearContent();
     loadAbout();
    });
    
loadHome();