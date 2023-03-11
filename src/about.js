const main = document.createElement("main");
main.classList.add("content");
main.style.maxWidth = "600px";
main.style.margin = "0 auto";

const image = document.createElement("img");
image.src = "../images/darya.png";
image.alt = "headshot of Darya without filters";
image.width = "200";
image.height = "200";
image.style.width = "200px";
image.style.margin = "0 auto";
image.style.display = "block";
image.style.borderRadius = "50%";

const description = document.createElement("p");
description.classList.add("description");

const firstLine = document.createElement("span");
firstLine.style.fontWeight = "bold";
firstLine.style.fontSize = "1.5em";
firstLine.textContent = "It is nice to meet you!";

const breakLine = document.createElement("br");

description.appendChild(firstLine);
description.appendChild(breakLine);
description.appendChild(document.createTextNode("My name is Darya Haines. "));
description.appendChild(document.createTextNode("I am a senior at PSU and have an expected graduation date of June 2024."));
description.appendChild(document.createTextNode(" Currently I am pursuing a Bachelors of Science in Computer Science. "));
description.appendChild(document.createTextNode("I work in the IT department at PSU as a Field Services Technician when I am not on an internship. "));
description.appendChild(document.createTextNode("Previously I have interned at Cambia Health Solutions as a Software Developer and I have an upcoming internship at Portland General Electric as a Software Developer. "));
description.appendChild(document.createTextNode("Someday I hope to work in front-end design, as that is where I am most experienced."));

const style = document.createElement("style");
style.textContent =
  ".description span { font-weight: bold; font-size: 1.5em}";

document.head.appendChild(style);

main.appendChild(image);
main.appendChild(description);
document.body.appendChild(main);

