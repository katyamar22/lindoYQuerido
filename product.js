// Pull JSON file
fetch('products.json')
.then(response => response.json())
.then(data => {
  // products.images
  // products.name
  // products.price
  // products.description
  console.log(data)

// Add DOM for product grid
let productGrid = document.querySelector('.product-grid');

// Goes over every object in JSON file
data.forEach(product => {
  // Creates div element with variable of productDv
  const productDiv = document.createElement('div');
  // Gives productDiv class of product-div in HTML
  productDiv.classList.add('product-div');

  //Create div for each individual product

  // Creates img element
  const productImg = document.createElement('img');
  // adds JSON file image info to productImg
  productImg.src = product.image;
  productImg.classList.add('product-image');

  // Adds product img to productDiv div.
  productDiv.appendChild(productImg);
  console.log(productDiv);

  //repeat process for every item in JSON file
  const productName = document.createElement('h4');
  productName.textContent = product.name;
  productName.classList.add('product-name');
  productDiv.appendChild(productName);

  const productPrice = document.createElement('h5');
  productPrice.textContent = product.price;
  productPrice.classList.add('product-price');
  productDiv.appendChild(productPrice);

  const description = document.createElement('p');
  description.textContent = product.description;
  description.classList.add('description');
  productDiv.appendChild(description);

  // Adds productDiv to product grid div
  productGrid.appendChild(productDiv);
})

});