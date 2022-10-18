const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Солнцезащитные очки",
    productHeader: "CELINE",
    price: "7990 руб.",
    colors: [
      {
        code: "gray",
        img: "./img/celine2-5.png",
      },
      {
        code: "black",
        img: "./img/cel-5.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Солнцезащитные очки",
    productHeader: "CARTIER",
    price: "8500 руб.",
    colors: [
      {
        code: "silver",
        img: "./img/car-1.png",
      },
      {
        code: "gold",
        img: "./img/Cartier-1.png",
      },
    ],
  },
  {
    id: 3,
    title: "Солнцезащитные очки",
    productHeader: "DITA",
    price: "9000 руб.",
    colors: [
      {
        code: "black",
        img: "./img/dita1-2.png",
      },
      {
        code: "brown",
        img: "./img/dt-3.png",
      },
    ],
  },
  {
    id: 4,
    title: "Солнцезащитные очки",
    productHeader: "PRADA",
    price: "9500 руб.",
    colors: [
      {
        code: "white",
        img: "./img/pr-4.jpg",
      },
      {
        code: "black",
        img: "./img/prada-7.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Солнцезащитные очки",
    productHeader: "CHROME HEARTS",
    price: "11500 руб.",
    colors: [
      {
        code: "gold",
        img: "./img/ch2-1.png",
      },
      {
        code: "black",
        img: "./img/ch-2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductHeader = document.querySelector(".productHeader");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductHeader.textContent = choosenProduct.productHeader;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.background = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productBtn = document.querySelector('.productButton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

productBtn.addEventListener('click', () => {
  payment.style.display = 'flex'
})

close.addEventListener('click', () => {
  payment.style.display = 'none'
})
