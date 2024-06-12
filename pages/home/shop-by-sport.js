/**
 * Represents a list of sports categories.
 * Renders each sport category item with its name, image, and a link to the corresponding sports page.
 */

const sports = [
  {
    name: 'Basketball',
    image: './src/images/sport/sport-1.jpg',
  },
  {
    name: 'Running',
    image: './src/images/sport/sport-2.jpg',
  },
  {
    name: 'Training',
    image: './src/images/sport/sport-3.jpg',
  },
  {
    name: 'Soccer',
    image: './src/images/sport/sport-4.jpg',
  },
  {
    name: 'Golf',
    image: './src/images/sport/sport-5.jpg',
  },
  {
    name: 'Football',
    image: './src/images/sport/sport-6.jpg',
  },
  {
    name: 'Baseball',
    image: './src/images/sport/sport-7.jpg',
  },
  {
    name: 'Yoga',
    image: './src/images/sport/sport-8.jpg',
  },
];

const sportList = document.getElementById('sportList');

sports.forEach((sport) => {
  const sportItem = document.createElement('div');
  sportItem.classList.add('sport-item');
  sportItem.classList.add('flex-none', 'lg:w-1/3', 'md:w-3/4');
  sportItem.innerHTML = `<a href="../../pages/new-and-featured/index.html">
          <img class="w-full h-full bg-cover" src="${sport.image}" alt="trending-image">
          <p class="py-4 text-xl">${sport.name}</p>
      </a>
  `;

  sportList.appendChild(sportItem);
});
