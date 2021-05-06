const btn = document.querySelector(".btn-add");
const boxContainer = document.querySelector(".box-container");
const wordingToChange = document.getElementsByClassName("change-wording");
const paragraphBox = document.getElementById("paragraph-box");
const titleBox = document.getElementById("title-box");
const linkBox = document.getElementById("link-box");
const svgArrow = document.getElementsByClassName("svg-arrow")[0];
let isMarketplace = true;
let iconName = "crowd";

btn.onclick = () => {
  changeFromShopToCrownd();
  boxContainer.append(createNewBox(iconName, titleBox, paragraphBox, linkBox));
};

const createNewBox = (iconName, titleText, paragraphText, linkText) => {
  // creating html dom
  const div = document.createElement("div");
  const divTitle = document.createElement("div");
  const h1 = document.createElement("h1");
  const icone = document.createElement("img");
  const paragraph = document.createElement("p");
  const link = document.createElement("a");

  // set attr to html dom
  div.classList.add("box");
  divTitle.classList.add("title");
  icone.setAttribute("src", `icon-${iconName}.svg`);

  // append elements together
  div.append(divTitle);
  divTitle.append(icone, h1);
  div.append(paragraph, link);

  h1.innerHTML = titleText.innerHTML;
  paragraph.innerHTML = paragraphText.innerHTML;
  link.innerHTML = linkText.innerHTML;

  if (!isMarketplace) {
    link.classList.add("shop-link-style");
  } else {
    link.classList.remove("shop-link-style");
  }

  return div;
};

const changeFromShopToCrownd = () => {
  iconName = isMarketplace ? "crowd" : "shop";
  isMarketplace = !isMarketplace;

  for (let i in wordingToChange) {
    wordingToChange[i].innerText = isMarketplace
      ? " Marketplace"
      : " Crowdfunding";
  }
};
