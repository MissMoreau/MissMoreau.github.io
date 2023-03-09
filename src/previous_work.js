const main = document.createElement("main");
main.classList.add("content");
main.style.maxWidth = "600px";
main.style.margin = "0 auto";

const description = document.createElement("p");
description.classList.add("description");
description.innerHTML = `Previous Work<br><br>
<b>October 2021 – March 2022 , October 2022 - Current</b><br>
Field Services Technician, Portland State University Office Of Information Technology<br>
My main responsibility as a technician is to log and repair computers. I also provided on site assistance to those whose issue did not warrant having their computer checked in. One of my rarer responsibilities was to set up equipment such as microphones and projectors for Portland State University events. One example of my responsibilities is if a client wanted to turn an old desktop into a shared used desktop, they would send it in to the office and we would purge all information from the device so that it was like new and then we would return the device to the client.
<br><br>
<b>March 2022 – September 2022</b><br>
Intern X, Cambia Health Solutions<br>
As an intern, I was tasked with assisting other developers on their assignments as well as working on improving the percentage of code that was automatically tested when the systems were run. I helped design a website for employees within Cambia to be able to request information from the team I worked with and I helped train others on how to upkeep that website.
<br><br>
<b>April 2023 – September 2023 (Future)</b><br>
Intern, Portland General Electric<br>
I have yet to start this position, but I am scheduled to start in April. I will most likely be working on smaller projects and assisting other software developers with their work.
`;

const style = document.createElement("style");
style.textContent =
  ".description::first-line { font-weight: bold; font-size: 1.5em}";
document.head.appendChild(style);

main.appendChild(description);
document.body.appendChild(main);
