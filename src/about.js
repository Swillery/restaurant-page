function loadAbout() {
  const content = document.querySelector("#content");

  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";
  h1.style.textAlign = "center";
  h1.style.marginBottom = "4rem"

  const phone1 = document.createElement("h2");
  phone1.textContent = "Call Us at ";
  phone1.style.textAlign = "center";

  const phone2 = document.createElement("p");
  phone2.textContent = "555-555-5555";
  phone2.style.textAlign = "center";
  phone2.style.marginBottom = "4rem"
  phone2.style.textDecoration = "underline";

  const email1 = document.createElement("h2");
  email1.textContent = "Email Us at ";
  email1.style.textAlign = "center";
  
  const email2 = document.createElement("p");
  email2.textContent = "fakeEmail@odin.c0m";
  email2.style.textAlign = "center";
  email2.style.textDecoration = "underline";

  content.append(h1, phone1, phone2, email1, email2);
}

export default loadAbout;