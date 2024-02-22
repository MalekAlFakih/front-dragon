document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the API
  fetch("http://127.0.0.1:8000/product/")
    .then(response => response.json())
    .then(data => {
      const products = data // Assuming your API returns an array of products
      console.log(products);

      const productRow = document.getElementById("productRow");

      products.forEach(product => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-sm-6 col-md-4 col-lg-3";

        const boxDiv = document.createElement("div");
        boxDiv.className = "box";

        const productLink = document.createElement("a");
        productLink.href = product.link; // Assuming each product object has a link property

        const imgBoxDiv = document.createElement("div");
        imgBoxDiv.className = "img-box";

        const img = document.createElement("img");
        img.src = product.image; // Assuming each product object has an image property
        img.alt = product.name; // Assuming each product object has a name property

        imgBoxDiv.appendChild(img);
        productLink.appendChild(imgBoxDiv);

        const detailBoxDiv = document.createElement("div");
        detailBoxDiv.className = "detail-box";

        const productName = document.createElement("h6");
        productName.textContent = product.name; // Assuming each product object has a name property

        const productPrice = document.createElement("h6");
        productPrice.innerHTML = `Price <span>$${product.price}</span>`; // Assuming each product object has a price property

        detailBoxDiv.appendChild(productName);
        detailBoxDiv.appendChild(productPrice);
        productLink.appendChild(detailBoxDiv);

        const newSpan = document.createElement("div");
        newSpan.className = "new";
        newSpan.innerHTML = "<span>New</span>";

        productLink.appendChild(newSpan);
        boxDiv.appendChild(productLink);
        colDiv.appendChild(boxDiv);
        productRow.appendChild(colDiv);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });

  // Set href for View All Products button
  document.getElementById("viewAllProducts").href = "your_all_products_page_url";
});