import logo from "./logo.png";

function loadHome() {
  const content = document.querySelector("#content");

  const h1 = document.createElement("h1");
  h1.textContent = "Swill's Good Cookin'!";
  h1.style.textAlign = "center";

  const headerImg = document.createElement("img");
  headerImg.src = logo;
  headerImg.width = 500;
  headerImg.style.display = "block";
  headerImg.style.margin = "0 auto";

  const h3 = document.createElement("h3");
  h3.textContent = "Come down to Swill's Good Cookin' for the best eats you'll have in the south!";
  h3.style.textAlign = "center";

  content.append(h1, headerImg, h3);
}

export default loadHome;