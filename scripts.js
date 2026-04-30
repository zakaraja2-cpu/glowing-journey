
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4, 
    spaceBetween: 20, 
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: { slidesPerView: 1 }, 
        768: { slidesPerView: 2 }, 
        1024: { slidesPerView: 4 }  
    }
});


let badge=document.getElementById("cart_count");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addTooCart(name, price) {
  let existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name: name, price: price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Produit ajouté au panier !");
}

function updateCartCount() {
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  let badge = document.getElementById("cart_count");

  if (badge) {
    badge.innerText = totalItems;
  }
}

updateCartCount();