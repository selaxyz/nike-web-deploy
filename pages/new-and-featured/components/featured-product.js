const featuredProducts = [
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
  
  const featuredProductList = document.getElementById("featuredProductList");
  
  featuredProducts.forEach((featuredProduct) => {
    const featuredProductItem = document.createElement("div");
    featuredProductItem.classList.add("featuredProduct-item");
    featuredProductItem.classList.add("flex-none","lg:w-[32%]","w-[48%]");
    featuredProductItem.innerHTML = `
    <a href="../../pages/product-detail/index.html">
    <img class="w-full h-fit bg-cover"' src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8eab79ee-a754-4526-ad7d-cd2756d48590/air-max-plus-drift-mens-shoes-FKwJ7w.png"
        alt="">
    <div class="py-2 space-y-2">
        <div>
            <p class="text-lg text-red-800"> Just In</p>
            <p class="font-medium text-lg"> Nike Zoom Vomero 5</p>
            <div class="text-gray-500">
                <p>Women's Shoes</p>
                <p>2 Colors</p>
            </div>
        </div>
        <p class="text-lg font-medium">$160</p>

    </div>
</a>
  `;
  
    featuredProductList.appendChild(featuredProductItem);
  });
  