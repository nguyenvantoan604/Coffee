btnSearch = document.querySelector(".icons #search")
search = document.querySelector(".icons .search")

btnBuyCoffe = document.querySelector(".icons #buy-coffe")
BuyCoffe = document.querySelector(".header .cart-me")
btnAccount = document.querySelector(".icons #account")
Account = document.querySelector(".header .account")
    // nav bar
Bars = document.querySelector("#bars")
navMenu = document.querySelector(".menu")
Bars.onclick = () => {
    navMenu.classList.toggle('active4');

}

// login and buycart
btnSearch.onclick = () => {
    search.classList.toggle('active');

}
btnBuyCoffe.onclick = () => {
    BuyCoffe.classList.toggle('active2');
    Account.classList.remove('active3');

}
btnAccount.onclick = () => {
    Account.classList.toggle('active3');
    BuyCoffe.classList.remove('active2');
}

var listimg = document.querySelectorAll(".item-img img")




// about us
var slideIndex = 0;

function showSlide() {
    for (var i = 0; i < listimg.length; i++) {
        listimg[i].classList.remove("render");

    }
    listimg[slideIndex].classList.add("render");


}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = listimg.length - 1;
    }
    showSlide();
}

function nextSlide() {
    slideIndex++;
    if (slideIndex > listimg.length - 1) {
        slideIndex = 0;
    }
    showSlide();
}

// Hiển thị slide đầu tiên khi tải trang
showSlide();