const main = document.createElement("main");
main.classList.add("content");
main.style.maxWidth = "600px";
main.style.margin = "0 auto";

const image = document.createElement("img");
image.src = "../images/darya.png";
image.alt = "headshot of Darya without filters";
image.width = "200";
image.height = "200";
image.style.width = "250px";
image.style.height = "250px";
image.style.margin = "0 auto";
image.style.display = "block";
image.style.borderRadius = "50%";

const bio = document.createElement("section");
bio.innerHTML = `
<h2><b>It is nice to meet you!</b></h2>
<p>My name is Darya Haines.
I have a Bachelors of Computer Science, and am currently looking for full-time opportunities 
within the Computer Science field. I have experience with working in teams as well as using both 
functional and object-oriented languages. I am friendly and work well with others as well as being 
a fast learner and I am eager to explore new opportunities. Previously I have interned at Cambia 
Health Solutions as a Software Developer and at Portland General Electric as a Software Developer. 
Between those internships I worked in the IT department at PSU as a Field Services Technician, and 
later as a Team Lead. After graduation, I plan on pursuing my masters in Computer Science while 
maintaining a full time position.</p>
`;

const style = document.createElement("style");
style.textContent = ".description span { font-weight: bold; font-size: 1.5em}";

document.head.appendChild(style);

main.appendChild(image);
main.appendChild(bio);
document.body.appendChild(main);
