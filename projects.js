const main = document.createElement("main");
main.classList.add("content");
main.style.maxWidth = "600px";
main.style.margin = "0 auto";

const description = document.createElement("p");
description.classList.add("description");
description.innerHTML = `<h1>Projects</h1>`;

const shakespearize = document.createElement("section");
shakespearize.innerHTML = `
<h2>Shakespearize</h2>
<p>This project was designed as a final project for a class called "Natural Language Processing". 
The main purpose of this project was to investigate how to translate text and how to generate random 
text using the Shakespearean corpus. The random text generator will generate a fake Shakespearean 
play using a prompted name from the user. In a similar fashion, the Shakespearean translator will 
translate the given English text into Shakespearean English. The runtime for the random text generator 
is about seven minutes, and about a minute for the translator.</p>
<a href="https://github.com/MissMoreau/shakespearize">Shakespearize Github Repository</a>
`;

const auditoryAce = document.createElement("section");
auditoryAce.innerHTML = `
<h2>Auditory Ace</h2>
<p>Auditory Ace is an app designed for people of all ages who use a Cochlear Implant and was originally 
designed by the Deviant Developer’s Dream Capstone Team at Portland State University during the Fall 
2023 / Winter 2024 capstone. The app serves as a specialized platform, offering users a unique opportunity 
to hone their auditory skills by practicing sound recognition through their implants. With a user-centric 
approach, Auditory Ace provides diverse sound exercises, encompassing simple tones and everyday sounds. 
The app's inception within the academic environment showcases the team's commitment to leveraging technology 
for positive impact, as it empowers Cochlear Implant users to engage in targeted practice sessions, fostering 
a richer and more nuanced auditory experience.</p>
<a href="https://github.com/MissMoreau/RoboSnake">RoboSnake Github Repository</a>
`;

const textBasedGame = document.createElement("section");
textBasedGame.innerHTML = `
<h2>Text Adventure</h2>
<p>This project was not originally designed by me, but I provided updates to the code and added multi-language 
functionality. The goal of this code is to provide a short text-based adventure game. My goal with this 
project was to modify the code to make it easier to read, change how the text was shown, and add in multi-language 
capabilities. The game now supports English, Indonesian, Japanese, Klingon, and Quenya with the ability to add more languages.</p>
<a href="https://github.com/MissMoreau/TextAdventure">Text Adventure Github Repository</a>
`;

const roboSnake = document.createElement("section");
roboSnake.innerHTML = `
<h2>RoboSnake</h2>
<p>This project was also not originally designed by me, but I provided updates to the code and added unique 
agent functionality. This code aims to give a robosnake game where the user will add new agents 
for players that the AI will then run. My goal with this project was to modify the code to make it easier to 
read, refactor the players so that you can add more players without breaking the game, and adding documentation 
for users to read and understand how they can add in their players. The game currently supports four different 
types of players, with the ability to add more players by a user.</p>
<a href="https://github.com/MissMoreau/RoboSnake">RoboSnake Github Repository</a>
`;

main.appendChild(description);
main.appendChild(shakespearize);
main.appendChild(auditoryAce);
main.appendChild(textBasedGame);
main.appendChild(roboSnake);
document.body.appendChild(main);
