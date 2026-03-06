function loadMenu() {
  const content = document.querySelector("#content");

  const h1 = document.createElement("h1");
  h1.textContent = "Check Out Our Menu!";
  h1.style.textAlign = "center";
  h1.style.marginBottom = "4rem"

  const porkSandwich = document.createElement("h2");
  porkSandwich.textContent = "BBQ PORK SANDWICH";
  porkSandwich.style.textAlign = "center";

  const porkItems = document.createElement("h4");
  porkItems.textContent = "Pulled Pork, Wheat Bread, Swill's Sweet BBQ Sauce";
  porkItems.style.textAlign = "center";

  const choiceItems1 = document.createElement("p");
  choiceItems1.textContent = "(Comes with your choice of two sides)";
  choiceItems1.style.textAlign = "center";
  choiceItems1.style.marginBottom = "2rem"

  const ribs = document.createElement("h2");
  ribs.textContent = "SMOKED RIBS";
  ribs.style.textAlign = "center";

  const ribsItems = document.createElement("h4");
  ribsItems.textContent = "Smoked using the '3-2-1' method, then glazed in Swill's Sweet BBQ Sauce";
  ribsItems.style.textAlign = "center";

  const choiceItems2 = document.createElement("p");
  choiceItems2.textContent = "(Comes with your choice of two sides)";
  choiceItems2.style.textAlign = "center";
  choiceItems2.style.marginBottom = "2rem"

  const chicken = document.createElement("h2");
  chicken.textContent = "FRIED CHICKEN";
  chicken.style.textAlign = "center";

  const chickenItems = document.createElement("h4");
  chickenItems.textContent = "Crispy, golden-brown fried chicken, marinated in buttermilk and Swill's Secret Spices";
  chickenItems.style.textAlign = "center";

  const choiceItems3 = document.createElement("p");
  choiceItems3.textContent = "(Comes with your choice of two sides)";
  choiceItems3.style.textAlign = "center";
  choiceItems3.style.marginBottom = "2rem"

  const sides = document.createElement("h2");
  sides.textContent = "Sides";
  sides.style.textAlign = "center";

  const sidesItems = document.createElement("h4");
  sidesItems.textContent = "Creamy coleslaw, Mac n' Cheese, BBQ Baked Beans, Corn On The Cob, or Potato Salad";
  sidesItems.style.textAlign = "center";

  content.append(h1, porkSandwich, porkItems, choiceItems1, ribs, ribsItems, choiceItems2, chicken, chickenItems, choiceItems3, sides, sidesItems);
}

export default loadMenu;