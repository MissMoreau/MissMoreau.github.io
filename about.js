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
within the Information Technology field. I have experience with working in teams as well as on my own in order 
to best assist end users with a wide variety of issues. I am friendly and work well with others as well as being 
a fast learner and I am eager to explore new opportunities. Previously I worked in the IT department 
at PSU as a Field Services Technician, and later as a Team Lead. Currently I work at Caring Places Management 
as an IT Helpdesk Technician doing what I love, helping people.</p>
`;

const style = document.createElement("style");
style.textContent = ".description span { font-weight: bold; font-size: 1.5em}";

document.head.appendChild(style);

main.appendChild(image);
main.appendChild(bio);
document.body.appendChild(main);
