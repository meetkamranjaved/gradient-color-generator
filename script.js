const gradientBox = document.querySelector(".gradient-box");
const directionSelect = document.getElementById("direction-select");
const color1Input = document.getElementById("color1");
const color2Input = document.getElementById("color2");
const cssTextarea = document.getElementById("css-code");
const refreshBtn = document.getElementById("refresh-btn");
const copyBtn = document.getElementById("copy-btn");

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;

const generateGradient = (useRandom = false) => {
  if (useRandom) {
    color1Input.value = getRandomHexColor();
    color2Input.value = getRandomHexColor();
  }

  const direction = directionSelect.value;
  const color1 = color1Input.value;
  const color2 = color2Input.value;

  const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
  gradientBox.style.background = gradient;
  cssTextarea.value = `background: ${gradient};`;
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(cssTextarea.value).then(() => {
    copyBtn.textContent = "Code Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy Code"), 1600);
  });
};

directionSelect.addEventListener("change", () => generateGradient());
color1Input.addEventListener("input", () => generateGradient());
color2Input.addEventListener("input", () => generateGradient());
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyToClipboard);

generateGradient();

// Project: Gradient Color Generator
// Author: Kamran Javed
// Portfolio: https://kamranjaved.com
// Company: OneDigitalLine
// Website: https://onedigitalline.com
// Email: meet@kamranjaved.com
// License: For personal or client use only. Redistribution prohibited.
// © Kamran Javed. All rights reserved.
