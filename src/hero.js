import previousIconSrc from "./Assets/previous.svg";
import nextIconSrc from "./Assets/next.svg";

import lionessSrc from "./Assets/lioness.jpg";
import bearSrc from "./Assets/bear.jpg";
import deerSrc from "./Assets/deer.jpg";
import elephantSrc from "./Assets/elephant.jpg";
import rhinoSrc from "./Assets/rhino.jpg";

// Hero element
const heroElement = document.getElementById("hero-section");
const computedStyle = window.getComputedStyle(heroElement);
const backgroundImage = computedStyle.getPropertyValue("background");

const urlRegex = /url\(['"]?([^'"]+)['"]?\)/;
const match = backgroundImage.match(urlRegex);
const decoded = decodeURIComponent(match[1]); // decoded now matches url

// Slider nav Icons
const previousIcon = document.querySelector(".previous-icon");
previousIcon.src = previousIconSrc;

const nextIcon = document.querySelector(".next-icon");
nextIcon.src = nextIconSrc;

// Hero src
const lioness = lionessSrc;
const bear = bearSrc;
const deer = deerSrc;
const elephant = elephantSrc;
const rhino = rhinoSrc;

const heroSrcArray = [lioness, bear, deer, elephant, rhino];
