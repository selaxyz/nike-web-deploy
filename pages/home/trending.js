const products = [
  {
    name: "Rep your Team In March And Beyon",
    image: "./src/images/trending/trending-1.jpg",
  },
  {
    name: "Fast Forward. Rewind",
    image: "./src/images/trending/trending-2.jpg",
  },
  {
    name: "Nike Motiva: For All Walks",
    image: "./src/images/trending/trending-3.jpg",
  },
];

const productList = document.getElementById("productList");

products.forEach((product) => {
  const productItem = document.createElement("div");
  productItem.classList.add("product-item");
  productItem.classList.add("flex-none", "lg:w-1/3","md:w-3/4");
  productItem.innerHTML = `<a href="../../pages/new-and-featured/index.html">
        <img class="w-full h-full bg-cover" src="${product.image}" alt="trending-image">
        <p class="py-4 text-xl">${product.name}</p>
    </a>
`;

  productList.appendChild(productItem);
});
