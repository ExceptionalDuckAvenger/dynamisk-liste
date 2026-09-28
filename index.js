"use strict";
// url'en i dette tilfælde en lokal fil
const productUrl = "cars.json";

const carList = document.querySelector("#car_list");
getData();
function getData() {
  fetch(productUrl).then((result) => result.json().then((data) => showData(data)));
}

function getData_then() {
  fetch(productUrl).then((result) => result.json().then((data) => showData(data)));
}

function showData(data) {
  //   console.log(data);
  carList.innerHTML = "";
  let myInnerHtml = "";
  data.forEach((bil) => {
    console.log(bil.brand);

    myInnerHtml += ` <article class="card">
        <h2>${bil.brand}</h2>
        <div class="imageContainer">
          <img src="${bil.image}" alt="bil" />
          <p>SOLD OUT</p>
        </div>
        <h3>${bil.model}</h3>
        <p>${bil.colors.join(" / ")}</p>
      </article>`;
  });
  carList.innerHTML = myInnerHtml;
}
