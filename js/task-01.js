// const categories = document.querySelectorAll('ul#categories .item');
// console.log(`Number of categories:`, categories.length);

// const categoriesTitle = [];
// categories.forEach((el) => {
//     categoriesTitle.push(`Category:
//     ${el.querySelectorAll('h2').textContent}
//     Element:
//     ${el.querySelectorAll('ul>li').length}`);
// });

// console.log(...categoriesTitle);

const NumberCategories = document
  .querySelector("#categories")
  .querySelectorAll("ul").length;

const categoriesList = document
  .querySelector("#categories")
  .querySelectorAll(".item");

console.log(`Number of categories: ${NumberCategories}`);

categoriesList.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(
    `Elements: ${element.querySelector("ul").querySelectorAll("li").length}`
  );
});