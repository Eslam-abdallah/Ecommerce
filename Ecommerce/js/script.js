// Start Lang
let lang = document.querySelector(".select-lang");
function changeLang() {
  lang.classList.toggle("lang-active");
}
// ----------------------------------------------------------------
// Start Cart
let cart_toggle = document.querySelector(".cart-toggle");
function carttoggle() {
  cart_toggle.classList.toggle("active");
}
// Declare getdata variable globally
let getdata;
fetch("js/products.json")
  .then((response) => response.json())
  .then((data) => {
    getdata = data; // حفظ البيانات في المتغير
    let products = document.getElementById("product");
    let trends = document.getElementById("trends");
    let allproducts = document.getElementById("allproducts");
    data.forEach((product) => {
      // products Area
      if (products) {
        products.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-12 prodect swiper-slide">
        <div class="card">
          <div class="img">
            <img
              src="${product.img}"
              class="card-img-top"
              alt="..."
            />
            <div class="lyr">
              <div class="lyr-icon">
                <span class="heart-icon" onclick="loveproduct(${product.id})"
                  ><a><i class="fa-regular fa-heart"></i></a
                ></span>
                <span class="eye-icon"
                  ><a href="#"><i class="fa-regular fa-eye"></i></a
                ></span>
              </div>
              <div class="add-cart" onclick="addproduct(${product.id})">
                <span>Add To Cart</span>
              </div>
            </div>
          </div>

          <div class="card-body">
            <h6 class="card-title">${product.name}</h6>
            <div class="price">
              <h6>$${product.price}</h6>
              <h6 class="discount">$100</h6>
            </div>
            <div class="rate">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star" style="color: #777"></span>
            </div>
          </div>
        </div>
      </div>
            `;
      }

      // Trends area
      if (trends) {
        trends.innerHTML += `
                                        <div class="col-lg-3 col-md-6 col-sm-12 prodect swiper-slide">
                                    <div class="card">
                                      <div class="img">
                                        <img
                                          src="${product.img}"
                                          class="card-img-top"
                                          alt="..."
                                        />
                                        <div class="lyr">
                                          <div class="lyr-icon">
                                            <span class="heart-icon" onclick="loveproduct(${product.id})"
                                              ><a ><i class="fa-regular fa-heart"></i></a
                                            ></span>
                                            <span class="eye-icon"
                                              ><a><i class="fa-regular fa-eye"></i></a
                                            ></span>
                                          </div>
                                          <div class="add-cart" onclick="addproduct(${product.id})">
                                            <span>Add To Cart</span>
                                          </div>
                                        </div>
                                      </div>
                    
                                      <div class="card-body">
                                        <h6 class="card-title">${product.name}</h6>
                                        <div class="price">
                                          <h6>$${product.price}</h6>
                                          <h6 class="discount">$100</h6>
                                        </div>
                                        <div class="rate">
                                          <span class="fa fa-star checked"></span>
                                          <span class="fa fa-star checked"></span>
                                          <span class="fa fa-star checked"></span>
                                          <span class="fa fa-star checked"></span>
                                          <span class="fa fa-star" style="color: #777"></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
      `;
      }

      // allproducts Area
      if (allproducts) {
        allproducts.innerHTML += `
                                        <div class="col-lg-3 col-md-6 col-sm-12 prodect swiper-slide">
                                    <div class="card">
                                      <div class="img">
                                        <img
                                          src="${product.img}"
                                          class="card-img-top"
                                          alt="..."
                                        />
                                        <div class="lyr">
                                          <div class="lyr-icon">
                                            <span class="heart-icon" onclick="loveproduct(${product.id})">
                                            <a><i class="fa-regular fa-heart"></i></a>
                                            </span>
                                            <span class="eye-icon"
                                              ><a ><i class="fa-regular fa-eye"></i></a
                                            ></span>
                                          </div>
                                          <div class="add-cart" onclick="addproduct(${product.id})">
                                            <span>Add To Cart</span>
                                          </div>
                                        </div>
                                      </div>
                    
                                      <div class="card-body">
                                        <h6 class="card-title">${product.name}</h6>
                                        <div class="price">
                                          <h6>$${product.price}</h6>
                                          <h6 class="discount">$100</h6>
                                        </div>
                                        <div class="rate">
                                          <span class="fa fa-star checked"></span>
                                          <span class="fa fa-star checked"></span>
                                          <span class="fa fa-star checked"></span>
                                          <span class="fa fa-star checked"></span>
                                          <span class="fa fa-star" style="color: #777"></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
       `;
      }
    });
  });
//   // ----------------------------------------------------------------
// // add product
let allproduct = [];
function addproduct(id) {
  allproduct.push(getdata[id]);
  localStorage.setItem("prodata", JSON.stringify(allproduct));
  viewdatas();
  livecount();
  // totalprice();
}
// // // ----------------------------------------------------------------
// // Check localstorage
if (localStorage.prodata != null) {
  allproduct = JSON.parse(localStorage.prodata);
} else {
  allproduct = [];
}
// // // ----------------------------------------------------------------
// // // show product in cart
var cart_product = document.getElementById("cartproduct");
function viewdatas() {
  if (cart_product) {
    let viewincart = JSON.parse(localStorage.getItem("prodata"));
    let items = "";
    for (let x = 0; x < viewincart.length; x++) {
      items += `
      <div class="toggle-product mt-3">
              <div class="toggle-img">
                <img src="${viewincart[x].img}" alt="">
              </div>
              <div class="toggle-title">
                <p>${viewincart[x].name}</p>
                <span>$${viewincart[x].price}</span>
              </div>
              <div class="toggle-delete">
              <span onclick="deleteitem(${x})"><i class="fa-solid fa-trash"></i></span>
  
              </div>
            </div>
    `;
    }
    cart_product.innerHTML = items;
  }
}
viewdatas();
// // show product in cartpage
var cart_productpage = document.getElementById("cartproducts");
function viewcartpage() {
  let viewincartpage = JSON.parse(localStorage.getItem("prodata"));
  let itempage = "";
  for (let x = 0; x < viewincartpage.length; x++) {
    itempage += `
    <div class="col-lg-12 itemcart mt-3">
                <div class="col-lg-2 col-md-12 col-sm-12 cart-product">
                  <img src="${viewincartpage[x].img}" width="50px" height="50px">
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 cart-product">
                  <p>${viewincartpage[x].name}</p>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 cart-product">
                  <input type="number" value="1">
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 cart-product">
                  <h6>$${viewincartpage[x].price}</h6>
                </div>
              </div>
  `;
  }
  cart_productpage.innerHTML = itempage;
}
// ----------------------------------------------------------------
// delete product
function deleteitem(id) {
  allproduct.splice(id, 1);
  localStorage.prodata = JSON.stringify(allproduct);
  // totalprice();
  viewdatas();
  livecount();
}
// ----------------------------------------------------------------
// count product
var countitems = document.querySelector(".countitem");
var navcount = document.querySelector(".livenum");
function livecount() {
  if (countitems && navcount) {
    let live = "";
    live += `${allproduct.length}`;
    navcount.innerHTML = live;
    countitems.innerHTML = live;
  }
}
livecount();

// ----------------------------------------------------------------
// total price product
let allprice = document.querySelector(".totalprice");
let Subtotal = document.querySelector(".Subtotal");
let allpricecart = document.querySelector(".totalpricecart");
function totalprice() {
  let totalPrice = 0;
  allproduct.forEach((totalprice) => {
    totalPrice += totalprice.price;
  });
  allprice.innerHTML = totalPrice + "$";
  Subtotal.innerHTML = totalPrice + "$";
  allpricecart.innerHTML = totalPrice + "$";
}

// ----------------------------------------------------------------
// إضافة منتج إلى المفضلة
function loveproduct(id) {
  lovearray.push(getdata[id]); // افترض أن getdata معرف وموجود
  localStorage.setItem("loveproduct", JSON.stringify(lovearray));
  showlove();
  lovecount();
}

// التحقق من التخزين المحلي
if (localStorage.loveproduct != null) {
  lovearray = JSON.parse(localStorage.loveproduct);
} else {
  lovearray = [];
}

// عرض المنتجات المفضلة
let wishlist = document.getElementById("wishlist");
function showlove() {
  if (wishlist) {
    let lovepage = JSON.parse(localStorage.getItem("loveproduct")) || [];
    let prodlove = "";

    if (lovepage.length === 0) {
      prodlove = "<p>No products in your wishlist!</p>";
    } else {
      for (let i = 0; i < lovepage.length; i++) {
        prodlove += `
          <div class="col-lg-3 col-md-6 col-sm-12 prodect swiper-slide" id="love">
            <div class="card">
              <div class="img">
                <img src="${lovepage[i].img}" class="card-img-top" alt="..." />
                <div class="lyr">
                  <div class="lyr-icon">
                    <span onclick="deletelove(${i})" style="
                      background: #db4444;
                      cursor: pointer;
                      color: #fff;
                    "><i class="fa-solid fa-trash"></i></span>
                  </div>
                  <div class="add-cart">
                    <span onclick="addproduct(${lovepage[i].id})">Add To Cart</span>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h6 class="card-title">${lovepage[i].name}</h6>
                <div class="price">
                  <h6>${lovepage[i].price}</h6>
                  <h6 class="discount">$100</h6>
                </div>
                <div class="rate">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star" style="color: #777"></span>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    }

    wishlist.innerHTML = prodlove;
    lovecount();
  }
}

// حساب عدد المنتجات المفضلة
function lovecount() {
  // استرداد بيانات المنتجات المفضلة من التخزين المحلي
  let getlove = JSON.parse(localStorage.getItem("loveproduct")) || [];

  // حدد العناصر المستهدفة للتحديث
  let loveElements = [
    document.querySelector(".lovenum"),
    document.querySelector(".lovenumb"),
  ];

  // تحديث العدد في جميع العناصر
  loveElements.forEach((element) => {
    if (element) {
      element.innerHTML = getlove.length; // تعيين العدد
    }
  });
}
lovecount();
// حذف منتج من المفضلة
function deletelove(id) {
  lovearray.splice(id, 1); // حذف العنصر
  localStorage.setItem("loveproduct", JSON.stringify(lovearray)); // تحديث التخزين المحلي
  showlove(); // إعادة عرض المنتجات
}

// استدعاء الوظائف الأساسية
showlove();
lovecount();
totalprice();
viewcartpage();

// ----------------------------------------------------------------
