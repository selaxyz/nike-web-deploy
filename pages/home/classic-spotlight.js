/**
 * Represents a list of spotlighted sports categories.
 * Renders each spotlight item with its name, image, and a link.
 */
const spotlights = [
  {
    name: 'Basketball',
    image: './src/images/spotlight/spotlight-1.jpg',
  },
  {
    name: 'Running',
    image: './src/images/spotlight/spotlight-2.jpg',
  },
  {
    name: 'Training',
    image: './src/images/spotlight/spotlight-3.jpg',
  },
  {
    name: 'Soccer',
    image: './src/images/spotlight/spotlight-4.jpg',
  },
  {
    name: 'Golf',
    image: './src/images/spotlight/spotlight-5.jpg',
  },
  {
    name: 'Football',
    image: './src/images/spotlight/spotlight-6.jpg',
  },
];

const spotlightList = document.getElementById('spotlightList');

spotlights.forEach((spotlight) => {
  const spotlightItem = document.createElement('div');
  spotlightItem.classList.add('spotlight-item');
  spotlightItem.classList.add('flex-none', 'lg:w-1/3', 'md:w-3/4');
  spotlightItem.innerHTML = `<a href="../../pages/new-and-featured/index.html">
            <img class="w-full h-full bg-cover" src="${spotlight.image}" alt="trending-image">
            <p class="py-4 text-xl">${spotlight.name}</p>
        </a>
    `;

  spotlightList.appendChild(spotlightItem);
});
