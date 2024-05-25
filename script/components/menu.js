export class Menu extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.classList.add("w-full")
        this.innerHTML =`
        <div class="flex flex-col md:flex-row md:justify-center gap-6 md:gap-24 p-10">
        <div class="flex flex-col gap-5">
            <h4> Featured</h4>
            <ul class="hidden md:flex text-gray-500 flex-col gap-3">
                <li><a href="#">Air Force 1</a> </li>
                <li><a href="#">Jordan 1</a></li>
                <li><a href="#">Metcon</a> </li>
                <li><a href="#">Air Max 270</a></li>
                <li><a href="#">Air Max 97</a></li>
                <li> <a href="#">Air Max 90</a></li>
                <li> <a href="#">Blazer</a></li>
                <li> <a href="#">Pegasus</a></li>
            </ul>
        </div>
        <div class="flex flex-col gap-5">
            <h4> Shoes</h4>
            <ul class="hidden text-gray-500 md:flex flex-col gap-3">
                <li><a href="#">All Shoe</a> </li>
                <li><a href="#"> Jordan Shoes </a></li>
                <li><a href="#"> Running Shoes</a> </li>
                <li><a href="#"> Basketball Shoes</a></li>
                <li><a href="#"> Tennis Shoes </a></li>
                <li> <a href="#"> Training Shoes</a></li>
                <li> <a href="#"> Custom Shoes</a></li>
                <li> <a href="#"> Sale Shoes</a></li>
                <li> <a href="#"> Soccer Cleats</a></li>
            </ul>
        </div>
        <div class="flex flex-col gap-5">
            <h4> Clothing</h4>
            <ul class="hidden text-gray-500 md:flex flex-col gap-3">
                <li><a href="#">All Clothing</a> </li>
                <li><a href="#">Tops & T-Shirts</a></li>
                <li><a href="#">Shorts</a> </li>
                <li><a href="#">Hoodies & Pullovers</a></li>
                <li><a href="#">Joggers & Sweatpants</a></li>
                <li> <a href="#">Sports Bras</a></li>
                <li> <a href="#"> Pants & Tights</a></li>
                <li> <a href="#"> Socks</a></li>
                <li> <a href="#">Yoga</a></li>
                <li> <a href="#">NikeLab</a></li>
                <li> <a href="#">Plus Size</a></li>
                <li> <a href="#">Big & Tall</a></li>
                <li> <a href="#">Sale Clothing</a></li>
            </ul>
        </div>
        <div class="flex flex-col gap-5">
            <h4> Kids</h4>
            <ul class="hidden text-gray-500 md:flex flex-col gap-3">
                <li><a href="#">Infant & Toddler Shoes</a> </li>
                <li><a href="#">Kids Shoes</a></li>
                <li><a href="#">Kids Basketball Shoes</a> </li>
                <li><a href="#">Kid Running Shoes</a></li>
                <li><a href="#">Kids Jordan Shoes </a></li>
                <li><a href="#">liKids Clothing</a></li>
                <li> <a href="#"> Kids Backpacks</a></li>
                <li> <a href="#"> Kids Socks</a></li>
                <li> <a href="#">Kids Sale</a></li>
            </ul>
        </div>
    </div>
    `
    }
}

customElements.define("menu-component", Menu);