export class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        const html = ` 
        <script>
            const navLinks = document.querySelector('.nav-link')
            const subNavLinks = document.querySelector('.sub-nav-link')

            const smallSubNavLinkLayer = document.querySelector('.small-nav-link-layer')
            const smallSubNavLink = document.querySelector('.small-sub-nav-link')
            const smallNavLink = document.querySelector('.small-nav-link')

            function onSmallNavLinkClick(e) {
                smallSubNavLinkLayer.classList.toggle('opacity-100')
                smallNavLink.classList.toggle('w-screen')
                smallNavLink.classList.toggle('right-0')
                smallSubNavLink.classList.toggle('right-0')
                document.querySelector('body').classList.toggle('fixed')
                console.log(smallSubNavLinkLayer)
            }

            function onNavItemOver(e) {
                navLinks.classList.add('h-dvh')
            }
            function onNavItemLeave(e) {
                navLinks.classList.remove('h-dvh')
            }
            subNavLinks.addEventListener('mouseover', onNavItemOver)
            subNavLinks.addEventListener('mouseleave', onNavItemLeave)

        </script>
        `

        const scriptEl = document.createRange().createContextualFragment(html);

        this.classList.add("w-full")
        this.innerHTML = `
                <div class="flex flex-col items-center bg-white">
                <div class="hidden md:flex px-10 py-3 justify-between max-w-[1920px] w-full items-center">
                <div class="flex gap-5">
                    <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                        <path
                            d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                        </path>
                    </svg>
                    <svg height="24px" width="24px" fill="#111" viewBox="0 0 39 33">
                        <path
                            d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z">
                        </path>
                    </svg>
                </div>
                <div class="flex gap-3 text-xs font-medium">
                    <p>Find Store</p>
                    <p>|</p>
                    <p>Help</p>
                    <p>|</p>
                    <p>Join Us</p>
                    <p>|</p>
                    <a href="../../pages/login/index.html">Sign In</a>
                </div>
            </div>
                <div class="flex py-2 items-center max-w-[1920px] w-full px-6">
                    <div class="flex-1">
                        <a href="../../index.html">
                            <img src="../../src/images/swoosh-logo-black.jpeg" class="w-16" alt="">
                        </a>
                    </div>
                    <div class="hidden md:flex gap-5 justify-center items-center font-medium">
                        <a onmouseenter="onNavItemOver(this)" onmouseleave="onNavItemLeave(this)"
                            href="../../pages/new-and-featured/index.html">New & Featured</a>
                        <p>Men</p>
                        <p>Women</p>
                        <p>Kids</p>
                        <p>Accessories</p>
                        <p>Sale</p>
                    </div>
                    <div class="flex flex-1 justify-end gap-5 items-center ">
                        <a class="hidden md:flex gap-3 w-40 bg-gray-100 py-2 px-3 text-gray-500 rounded-full" href="#">
                            <img src="../../src/icon/search.svg">
                            <p> Search</p>
                        </a>
                        <img class="md:hidden" src="../../src/icon/search.svg">
                        <a class="hidden md:block" href="../../pages/login/index.html">
                            <img src="../../src/icon/heart.svg">
                        </a>

                        <a href='../../pages/cart/cart.html'>
                            <img src="../../src/icon/bag.svg">
                        </a>

                        <a class="md:hidden" href="../../pages/login/index.html">
                            <img src="../../src/icon/user.svg">
                        </a>

                        <a onclick="onSmallNavLinkClick(this)" class="md:hidden" href="#">
                            <img src="../../src/icon/menu.svg">
                        </a>
                    </div>
                </div>
                <section
                    class="nav-link bg-black/50 delay-300 z-50 top-[100px] hidden md:flex absolute justify-end md:justify-center transition-trasnform duration-300 text-center  h-0 overflow-hidden w-screen">
                    <div
                        class="sub-nav-link flex justify-evenly bg-white w-screen h-fit text-left pt-6 pb-12 px-12 font-medium">

                        <div class="space-y-4">
                            <h1>Limited Time</h1>
                            <ul class="space-y-2 text-sm">
                                <li class="text-gray-500 hover:text-black">Sale: Up to 50% Off</li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h1>New & Featured</h1>
                            <ul class="space-y-2 text-sm">
                                <li class="text-gray-500 hover:text-black">New Arrivals</li>
                                <li class="text-gray-500 hover:text-black">Best Sellers</li>
                                <li class="text-gray-500 hover:text-black">New & Upcoming Drops</li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h1>Trending</h1>
                            <ul class="space-y-2 text-sm">
                                <li class="text-gray-500 hover:text-black">ACG</li>
                                <li class="text-gray-500 hover:text-black">Lifestyle Running</li>
                                <li class="text-gray-500 hover:text-black">The Color Shop</li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h1>Shop Classics</h1>
                            <ul class="space-y-2 text-sm">
                                <li class="text-gray-500 hover:text-black">Dunk</li>
                                <li class="text-gray-500 hover:text-black">Air Jordan 1</li>
                                <li class="text-gray-500 hover:text-black">Air Force</li>
                                <li class="text-gray-500 hover:text-black">Air Max</li>
                                <li class="text-gray-500 hover:text-black">Blazer</li>
                                <li class="text-gray-500 hover:text-black">Vomero</li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h1>Explore</h1>
                            <ul class="space-y-2 text-sm">
                                <li class="text-gray-500 hover:text-black">SNKRS Launch Calendar</li>
                                <li class="text-gray-500 hover:text-black">Running Shoe Finder</li>
                                <li class="text-gray-500 hover:text-black">Bra Finder</li>
                                <li class="text-gray-500 hover:text-black">Shop Sport</li>
                                <li class="text-gray-500 hover:text-black">Product Care</li>
                                <li class="text-gray-500 hover:text-black">New in Jordan Shoes</li>
                                <li class="text-gray-500 hover:text-black">Member Rewards</li>
                                <li class="text-gray-500 hover:text-black">Buying Guides</li>
                            </ul>
                        </div>
                    </div>
                </section>
               
               
                <section class="small-nav-link fixed text-center z-50 h-screen overflow-hidden">
                    <div onclick="onSmallNavLinkClick(this)"
                        class="small-nav-link-layer absolute w-screen h-screen delay-200 transition-opacity opacity-0 backdrop-blur-sm bg-black/50"></div>
                    <div
                        class="small-sub-nav-link fixed flex flex-col gap-12 right-[-500px] transition-all ease-in-out bg-white w-80 h-screen p-8 font-medium overflow-y-auto">
                        <div class="flex justify-end pt-4 items-center">
                            <img onclick="onSmallNavLinkClick(this)" src="./src/icon/close.svg" alt="">
                        </div>
                        <div class="flex flex-col gap-5 text-xl">
                            <a class="flex justify-between" href="../../pages/new-and-featured/index.html">New & Featured <img
                                    src="./src/icon/chevron-right.svg" alt=""></a>
                            <a class="flex justify-between">Men <img src="./src/icon/chevron-right.svg" alt=""></a>
                            <a class="flex justify-between">Women <img src="./src/icon/chevron-right.svg" alt=""></a>
                            <a class="flex justify-between">Kids <img src="./src/icon/chevron-right.svg" alt=""></a>
                            <a class="flex justify-between">Accessories <img src="./src/icon/chevron-right.svg" alt=""></a>
                            <a class="flex justify-between">Sale <img src="./src/icon/chevron-right.svg" alt=""></a>
                            <div class="flex flex-col gap-5">
                                <p class="flex itemscenter gap-4">
                                    <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                                        <path
                                            d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                                        </path>
                                    </svg>
                                    Jordan
                                </p>
                                <p class="flex itemscenter gap-4">
                                    <svg height="24px" width="24px" fill="#111" viewBox="0 0 39 33">
                                        <path
                                            d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z">
                                        </path>
                                    </svg>
                                    Converse
                                </p>

                            </div>
                        </div>

                        <div class="space-y-4">
                            <p class="text-lg text-start text-gray-500">Become a Nike Member for the best products, inspiration
                                and stories in sport.
                                <span class="text-black">Learn more</span>
                            </p>
                            <div class="flex gap-2 items-center">
                                <a class="bg-black text-white px-4 py-2 rounded-full" href="#">Join Us</a>
                                <a class="border bg-white px-4 py-2 rounded-full" href="./pages/login/index.html">Sign In</a>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <div class="flex items-center gap-4">
                                <img src="./src/icon/bag.svg" alt="bag">
                                <p>Bag</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="./src/icon/box.svg" alt="bag">
                                <p>Orders</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="./src/icon/shop.svg" alt="bag">
                                <p>Find a Store</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="./src/icon/question-circle.svg" alt="bag">
                                <p>Find a Store</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `

        this.append(scriptEl);
    }
}

customElements.define("navbar-component", NavBar);