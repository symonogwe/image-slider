/* eslint-disable no-plusplus */
import previousIconSrc from "./Assets/previous.svg";
import nextIconSrc from "./Assets/next.svg";

import lionessSrc from "./Assets/lioness.jpg";
import bearSrc from "./Assets/bear.jpg";
import deerSrc from "./Assets/deer.jpg";
import elephantSrc from "./Assets/elephant.jpg";
import rhinoSrc from "./Assets/rhino.jpg";

// Hero src
const lioness = lionessSrc;
const bear = bearSrc;
const deer = deerSrc;
const elephant = elephantSrc;
const rhino = rhinoSrc;

const heroSrcArray = [lioness, bear, deer, elephant, rhino];

const heroClassArray = [
  "lioness-src",
  "bear-src",
  "deer-src",
  "elephant-src",
  "rhino-src",
];

// Next Image functionality
function nextImage() {
  console.log("hello");
  const heroElement = document.getElementById("hero-section");
  const computedStyle = window.getComputedStyle(heroElement);
  const backgroundImage = computedStyle.getPropertyValue("background");

  const urlRegex = /url\(['"]?([^'"]+)['"]?\)/;
  const match = backgroundImage.match(urlRegex);
  const currentImgSrc = decodeURIComponent(match[1]);
  console.log(currentImgSrc);

  if (currentImgSrc === heroSrcArray[4]) {
    heroElement.classList.remove(heroClassArray[4]);
    heroElement.classList.add(heroClassArray[0]);
  } else {
    for (let i = 0; i < 4; i++) {
      if (currentImgSrc === heroSrcArray[i]) {
        heroElement.classList.remove(heroClassArray[i]);
        heroElement.classList.add(heroClassArray[i + 1]);
      }
    }
  }
}

const nextIcon = document.querySelector(".next-icon");
nextIcon.src = nextIconSrc;

nextIcon.addEventListener("click", nextImage);

// previous Image functionality
const previousIcon = document.querySelector(".previous-icon");
previousIcon.src = previousIconSrc;
