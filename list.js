const listURL = "https://kea-alt-del.dk/t7/api/products";
const listContainer = document.querySelector("#productListContainer");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `
      <article class="productCard">
        <h3>${product.Tøj}</h3>
        <p>Pris: ${product.pris}</p>
      </article>
    `;
  });
}

getProducts();
