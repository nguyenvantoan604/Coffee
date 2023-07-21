var btncart = document.querySelectorAll(".item-menu button")
btncart.forEach(function(button) {
    button.addEventListener("click", function(e) {
        var btnItem = e.target
        var product = btnItem.parentElement
        var imgcart = product.querySelector("img").src
        var namecart = product.querySelector("h4").innerHTML
        var princecart = product.querySelector("span").innerHTML
        addcart(imgcart, namecart, princecart)
    })
})

// Thêm sản phẩm

function addcart(imgcart, namecart, princecart) {
    var adddiv = document.createElement("div");
    var checkname = document.querySelectorAll(".contain h3");
    var isProductExists = false;

    for (var i = 0; i < checkname.length; i++) {
        if (checkname[i].innerHTML == namecart) {
            isProductExists = true;
            break;
        }
    }

    var isProductAdded = false; // Kiểm tra sản phẩm đã được thêm vào giỏ hàng hay chưa

    if (isProductExists) {
        showNotification('error');
    } else {
        var divcontent = `
            <div class="contain">
                <i class="fa-solid fa-xmark delete-coffe"></i>
                <img src="${imgcart}" alt="">
                <h3>${namecart}</h3>
                <div class="content">
                    <span class="prince">${princecart}</span>
                    <input style="width: 30px; height:20px; margin-top:5px;" type="number" value="1" min="1">
                </div>
            </div>
        `;

        adddiv.innerHTML = divcontent;
        var divTable = document.querySelector(".buy-coffe");
        divTable.append(adddiv);

        isProductAdded = true; // Đánh dấu sản phẩm đã được thêm vào giỏ hàng

        deleteitem();
        SumPrince();
        countItem();
        if (isProductAdded) {
            // Hiển thị thông báo "Thêm thành công"
            showNotification('success');

        }
    }


}

// Hiển thị thông báo
function showNotification(status) {
    var tempInner = `<i class="fa-solid fa-circle-check"></i>
      <p>Thêm sản phẩm thành công</p>`;

    switch (status) {
        case 'success':
            tempInner = `<i class="fa-solid fa-circle-check"></i>
            <p>Thêm sản phẩm thành công</p>`;
            break;
        case 'error':
            tempInner = `<i class="fa-solid fa-triangle-exclamation"></i>
              <p>Sản phẩm đã có trong giỏ hàng</p>`;
            break;
    }

    var NotiSuccess = document.querySelector(".notification");
    var adddivnoti = document.createElement("div");
    adddivnoti.classList.add(status);
    var statusNoti = document.getElementsByClassName(status);

    var AddSuccess = `${tempInner}
              <div class="coutdow"></div>
          `;
    adddivnoti.innerHTML = AddSuccess;

    if (NotiSuccess.firstChild) {
        NotiSuccess.replaceChild(adddivnoti, NotiSuccess.firstChild);
    } else {
        NotiSuccess.append(adddivnoti);
    }

    setTimeout(function() {
        statusNoti[0].style.animation = "sile-hide 2s ease forwards";
    }, 4000);

    setTimeout(function() {
        statusNoti[0].remove();
    }, 6000);


}

// Đếm số sản phẩm
function countItem() {
    var Listitem = document.querySelectorAll(".buy-coffe .contain");
    var counts = document.querySelector(".icons #buy-coffe sup");
    counts.textContent = Listitem.length;

}
//  Tổng giá hóa đơn
function SumPrince() {
    var listitemPrince = document.querySelectorAll(".buy-coffe  .contain")
    var totalCart = 0
    for (var i = 0; i < listitemPrince.length; i++) {
        var productprinces = parseInt(listitemPrince[i].querySelector("span").innerHTML);
        var valueInput = parseFloat(listitemPrince[i].querySelector(".content input").value);
        var totallSum = productprinces * valueInput
        totalCart = totalCart + totallSum
    }
    var renderPrince = document.querySelector(".cart-me .cart-princes span .numbers")
    renderPrince.innerHTML = totalCart
    ChangeInput()
}



// Kiểm tra thay đổi số lượng sản phẩm
function ChangeInput() {
    var listitemPrince = document.querySelectorAll(".buy-coffe  .contain")
    for (var i = 0; i < listitemPrince.length; i++) {
        var valueInputChange = listitemPrince[i].querySelector(".content input");
        valueInputChange.addEventListener("change", function() {
            SumPrince()
        })
    }
}

// Xóa sản phẩm
function deleteitem() {
    var listitem = document.querySelectorAll(".buy-coffe .contain .delete-coffe")
    for (var i = 0; i < listitem.length; i++) {
        listitem[i].addEventListener("click", function(e) {
            var cfdelete = e.target
            var productdelete = cfdelete.parentElement
            productdelete.remove()
            SumPrince()
            countItem()
        })

    }

}