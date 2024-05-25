const populars = [
  {
    name: "Nike G.T. Cut 3",
    desc: "Basketball Shoes",
    price: "$160",
    image: "../../src/images/popular/popular-1.png",
  },
  {
    name: "Nike Zoom Vomero 5",
    desc: "Men's Shoes",
    price: "$160",
    image: "../../src/images/popular/popular-2.png",
  },
  {
    name: "Nike Zoom Vomero 5",
    desc: "Men's Shoes",
    price: "$160",
    image: "../../src/images/popular/popular-3.png",
  },
  {
    name: "Nike G.T. Cut 3",
    desc: "Basketball Shoes",
    price: "$160",
    image: "../../src/images/popular/popular-4.png",
  },
  {
    name: "Nike Zoom Vomero 5",
    desc: "Men's Shoes",
    price: "$160",
    image: "../../src/images/popular/popular-5.png",
  },
  {
    name: "Nike Zoom Vomero 5",
    desc: "Men's Shoes",
    price: "$160",
    image: "../../src/images/popular/popular-6.png",
  },
  {
    name: "Nike Zoom Vomero 5",
    desc: "Men's Shoes",
    price: "$160",
    image: "../../src/images/popular/popular-7.png"
  },
];









const popularList = document.getElementById("popularList");

populars.forEach((popular) => {
  const popularItem = document.createElement("div");
  popularItem.classList.add("popular-item");
  popularItem.classList.add("flex-none", "lg:w-1/3","md:w-3/4");
  popularItem.innerHTML = `<a href="../../pages/new-and-featured/index.html">
  <img class="w-full h-full bg-cover" src="${popular.image}" alt="">
  <div class="flex flex-col pt-2">
      <p class="text-l font-medium">${popular.name}</p>
      <p class="text-gray-500">${popular.desc}</p>
  </div>
  <p class="py-2 font-medium">${popular.price}</p>
</a>
  `;

  popularList.appendChild(popularItem);
});
