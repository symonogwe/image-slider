/* eslint-disable no-plusplus */
import previousIconSrc from "./Assets/previous.svg";
import nextIconSrc from "./Assets/next.svg";

import lionessSrc from "./Assets/lioness.jpg";
import bearSrc from "./Assets/bear.jpg";
import deerSrc from "./Assets/deer.jpg";
import elephantSrc from "./Assets/elephant.jpg";
import zebraSrc from "./Assets/zebra.jpg";
// Hero src
const lioness = lionessSrc;
const bear = bearSrc;
const deer = deerSrc;
const elephant = elephantSrc;
const zebra = zebraSrc;

const heroSrcArray = [lioness, bear, deer, elephant, zebra];

// Hero class array
const heroClassArray = [
  "lioness-src",
  "bear-src",
  "deer-src",
  "elephant-src",
  "zebra-src",
];

// position buttons
const positionBtn1 = document.querySelector(".position-btn-1");
const positionBtn2 = document.querySelector(".position-btn-2");
const positionBtn3 = document.querySelector(".position-btn-3");
const positionBtn4 = document.querySelector(".position-btn-4");
const positionBtn5 = document.querySelector(".position-btn-5");

const positionBtnArr = [
  positionBtn1,
  positionBtn2,
  positionBtn3,
  positionBtn4,
  positionBtn5,
];

function clearPositionBtn() {
  positionBtnArr.forEach((btn) => btn.classList.remove("active-position-btn"));
}

function scrollToClicked(e) {
  const heroElement = document.getElementById("hero-section");

  const { target } = e;
  const targetIndex = positionBtnArr.indexOf(target);

  heroClassArray.forEach((c) => {
    if (heroElement.classList.contains(c)) heroElement.classList.remove(c);
  });

  heroElement.classList.add(heroClassArray[targetIndex]);
  clearPositionBtn();
  positionBtnArr[targetIndex].classList.add("active-position-btn");
}

positionBtnArr.forEach((btn) => btn.addEventListener("click", scrollToClicked));

// Next Image functionality
function nextImage() {
  const heroElement = document.getElementById("hero-section");
  const computedStyle = window.getComputedStyle(heroElement);
  const backgroundImage = computedStyle.getPropertyValue("background");

  const urlRegex = /url\(['"]?([^'"]+)['"]?\)/;
  const match = backgroundImage.match(urlRegex);
  const currentImgSrc = decodeURIComponent(match[1]);

  if (currentImgSrc === heroSrcArray[4]) {
    heroElement.classList.remove(heroClassArray[4]);
    heroElement.classList.add(heroClassArray[0]);

    clearPositionBtn();
    positionBtnArr[0].classList.add("active-position-btn");
  } else {
    for (let i = 0; i < 4; i++) {
      if (currentImgSrc === heroSrcArray[i]) {
        heroElement.classList.remove(heroClassArray[i]);
        heroElement.classList.add(heroClassArray[i + 1]);

        clearPositionBtn();
        positionBtnArr[i + 1].classList.add("active-position-btn");
      }
    }
  }
}

const nextIcon = document.querySelector(".next-icon");
nextIcon.src = nextIconSrc;

nextIcon.addEventListener("click", nextImage);

// previous Image functionality
function previousImage() {
  const heroElement = document.getElementById("hero-section");
  const computedStyle = window.getComputedStyle(heroElement);
  const backgroundImage = computedStyle.getPropertyValue("background");

  const urlRegex = /url\(['"]?([^'"]+)['"]?\)/;
  const match = backgroundImage.match(urlRegex);
  const currentImgSrc = decodeURIComponent(match[1]);

  if (currentImgSrc === heroSrcArray[0]) {
    heroElement.classList.remove(heroClassArray[0]);
    heroElement.classList.add(heroClassArray[4]);

    clearPositionBtn();
    positionBtnArr[4].classList.add("active-position-btn");
  } else {
    for (let i = 1; i <= 4; i++) {
      if (currentImgSrc === heroSrcArray[i]) {
        heroElement.classList.remove(heroClassArray[i]);
        heroElement.classList.add(heroClassArray[i - 1]);

        clearPositionBtn();
        positionBtnArr[i - 1].classList.add("active-position-btn");
      }
    }
  }
}

const previousIcon = document.querySelector(".previous-icon");
previousIcon.src = previousIconSrc;

previousIcon.addEventListener("click", previousImage);

// functionality to automatically change image
const autoSlide = setInterval(nextImage, 7000);
