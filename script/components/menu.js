const menus = [
    { title: 'Featured', category: 'featured' },
    { title: 'Shoes', category: 'shoes' },
    { title: 'Clothing', category: 'clothing' },
    { title: 'Kids', category: 'kid' },
  ];
  
/**
 * Represents the menu component of a webpage.
 * Displays various categories and links for navigation.
 * @extends HTMLElement
 */
export class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add('w-full');
    this.innerHTML = `
        <menu-category class="flex flex-col md:flex-row md:justify-center gap-6 md:gap-24 p-10"></menu-category>
    `;
  }
}



class MenuCategory extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    menus.forEach((item) => {
      const menuItem = document.createElement('div');
      menuItem.innerHTML = `
        <div class="flex flex-col gap-5">
            <h4>${item.title}</h4>
            <menu-item class="hidden text-gray-500 md:flex flex-col gap-3" data-category="${item.category}"></menu-item>
        </div>
        `;
      this.appendChild(menuItem);
    });
  }
}

const featured = [
  { label: 'Air Force 1', link: '#' },
  { label: 'Jordan 1', link: '#' },
  { label: 'Metcon', link: '#' },
  { label: 'Air Max 270', link: '#' },
  { label: 'Air Max 97', link: '#' },
  { label: 'Air Max 90', link: '#' },
  { label: 'Blazer', link: '#' },
  { label: 'Pegasus', link: '#' },
];

const shoes = [
  { label: 'All Shoe', link: '#' },
  { label: 'Jordan Shoes', link: '#' },
  { label: 'Running Shoes', link: '#' },
  { label: 'Basketball Shoes', link: '#' },
  { label: 'Tennis Shoes', link: '#' },
  { label: 'Training Shoes', link: '#' },
  { label: 'Custom Shoes', link: '#' },
  { label: 'Sale Shoes', link: '#' },
  { label: 'Soccer Cleats', link: '#' },
];

const clothing = [
  { label: 'All Clothing', link: '#' },
  { label: 'Tops & T-Shirts', link: '#' },
  { label: 'Shorts', link: '#' },
  { label: 'Hoodies & Pullovers', link: '#' },
  { label: 'Joggers & Sweatpants', link: '#' },
  { label: 'Sports Bras', link: '#' },
  { label: 'Pants & Tights', link: '#' },
  { label: 'Socks', link: '#' },
  { label: 'Yoga', link: '#' },
  { label: 'NikeLab', link: '#' },
  { label: 'Plus Size', link: '#' },
  { label: 'Big & Tall', link: '#' },
  { label: 'Sale Clothing', link: '#' },
];

const kid = [
  { label: 'Infant & Toddler Shoes', link: '#' },
  { label: 'Kids Shoes', link: '#' },
  { label: 'Kids Basketball Shoes', link: '#' },
  { label: 'Kid Running Shoes', link: '#' },
  { label: 'Kids Jordan Shoes', link: '#' },
  { label: 'Kids Clothing', link: '#' },
  { label: 'Kids Backpacks', link: '#' },
  { label: 'Kids Socks', link: '#' },
  { label: 'Kids Sale', link: '#' },
];

customElements.define('menu-component', Menu);

class MenuItem extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const category = this.dataset.category;
    switch (category) {
      case 'featured':
        this.handleMenuItem(featured);
        break;
      case 'shoes':
        this.handleMenuItem(shoes);
        break;
      case 'clothing':
        this.handleMenuItem(clothing);
        break;
      case 'kid':
        this.handleMenuItem(kid);
        break;
    }
  }
  handleMenuItem(data) {
    data.forEach((item) => {
      const menuItem = document.createElement('div');
      menuItem.innerHTML = `<a href="${item.link}">${item.label}</a>`;
      this.appendChild(menuItem);
    });
  }
}

customElements.define('menu-item', MenuItem);
customElements.define('menu-category', MenuCategory);
customElements.define('menu-component', Menu);
