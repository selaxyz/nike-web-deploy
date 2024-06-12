/**
 * Represents a list of membership options.
 * Renders each membership item with its name, description, image, and call-to-action button.
 */

const memberships = [
  {
    name: 'The Best of Nike',
    desc: "It's Better as a Member",
    image: './src/images/membership/membership-1.jpg',
    cta: 'Sign Up',
  },
  {
    name: 'Member Product',
    desc: 'Your Exclusive Access',
    image: './src/images/membership/membership-2.jpg',
    cta: 'Shop',
  },
  {
    name: 'Member Rewards',
    desc: 'How We Say Thank You',
    image: './src/images/membership/membership-3.jpg',
    cta: 'Celebrate',
  },
  {
    name: 'Sports & Wellness Apps',
    desc: "Movement Where You're At",
    image: './src/images/membership/membership-4.jpg',
    cta: 'Move',
  },
  {
    name: 'Nike By You',
    desc: 'Your Customization Service',
    image: './src/images/membership/membership-5.jpg',
    cta: 'Customize',
  },
  {
    name: 'SNKRS',
    desc: 'Your Ultimate Sneaker Community',
    image: './src/images/membership/membership-6.jpg',
    cta: 'Explore',
  },
  {
    name: 'Member Interests',
    desc: 'Shop Your Way',
    image: './src/images/membership/membership-7.jpg',
    cta: 'Add Interests',
  },
];

const membershipList = document.getElementById('membershipList');

memberships.forEach((membership) => {
  const membershipItem = document.createElement('div');
  membershipItem.classList.add('membership-item');
  membershipItem.classList.add('flex-none', 'lg:w-1/3', 'w-3/4');
  membershipItem.innerHTML = `<div class="bg-[url('${membership.image}')] md:h-[600px] h-[450px] bg-no-repeat bg-cover object-cover relative">
    <div class="absolute bottom-10 px-10 w-full text-white items-end">
        <div class="flex flex-col pb-10">
            <h4 class="font-medium">${membership.name}</h4>
            <h2 class="text-2xl pr-20 font-medium">${membership.desc}</h2>
        </div>
        <a class="bg-white text-black font-medium px-4 py-2 rounded-full hover:bg-gray-300" href="#">${membership.cta}</a>
    </div>
</div>
    `;

  membershipList.appendChild(membershipItem);
});
