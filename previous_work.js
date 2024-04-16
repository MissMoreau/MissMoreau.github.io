const main = document.createElement("main");
main.classList.add("content");
main.style.maxWidth = "600px";
main.style.margin = "0 auto";

const description = document.createElement("p");
description.classList.add("description");
description.innerHTML = `<h2>Previous Work</h2>`;

const Oit = document.createElement("section");
Oit.innerHTML = `
<p><b>October 2021 – March 2022 , October 2022 - Current</b></p>
<p>Field Services Technician, Portland State University Office Of Information Technology</p>
<p>My main responsibility as a technician is to log and repair computers. I also provided on site assistance to those whose 
issue did not warrant having their computer checked in. One of my rarer responsibilities was to set up equipment such as microphones 
and projectors for Portland State University events. One example of my responsibilities is if a client wanted to turn an old desktop 
into a shared used desktop, they would send it in to the office and we would purge all information from the device so that it was like 
new and then we would return the device to the client.</p>
`;

const Cambia = document.createElement("section");
Cambia.innerHTML = `
<p><b>March 2022 – September 2022</b></p>
<p>Intern X, Cambia Health Solutions</p>
<p>As an intern, I was tasked with assisting other developers on their assignments as well as working on improving the percentage of 
code that was automatically tested when the systems were run. I helped design a website for employees within Cambia to be able to request 
information from the team I worked with and I helped train others on how to upkeep that website.
</p>
`;

const Pge = document.createElement("section");
Pge.innerHTML = `
<p><b>April 2023 – September 2023</b></p>
<p>Software Development Intern, Portland General Electric</p>
<p>As an intern, I was tasked with creating scripts in the SolarWinds website to detect issues with controllers under PGE's domain. This 
was to show whether or not a device was compliant with the current CIS standards and to alert if a device was non-compliant. I created scripts
for two different types of devices, IOS and </p>
`;

const breakLine1 = document.createElement("br");
const breakLine2 = document.createElement("br");
const breakLine3 = document.createElement("br");

const style = document.createElement("style");
style.textContent =
  ".description::first-line { font-weight: bold; font-size: 1.5em}";
document.head.appendChild(style);

main.appendChild(description);
main.appendChild(breakLine1);
main.appendChild(Oit);
main.appendChild(breakLine2);
main.appendChild(Cambia);
main.appendChild(breakLine3);
main.appendChild(Pge);
document.body.appendChild(main);
