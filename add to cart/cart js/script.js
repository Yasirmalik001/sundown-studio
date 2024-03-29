var products = [
  { name: "snikers", headline: "nike shoes", price: "$150", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" },
  { name: "dove soap", headline: "dove cusmotics", price: "$30", image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { name: "airpods", headline: "apple airpods", price: "$250", image: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { name: "laura perform", headline: "performs", price: "$50", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { name: "luara Googles", headline: "eyewears", price: "$150", image: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { name: "snikers", headline: "nike shoes", price: "$150", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" },
  { name: "dove soap", headline: "dove cusmotics", price: "$30", image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { name: "airpods", headline: "apple airpods", price: "$250", image: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { name: "laura perform", headline: "performs", price: "$50", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { name: "luara Googles", headline: "eyewears", price: "$150", image: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
];

function addproduct() {
  var clutter = "";
  products.forEach(function (product, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
        <img class="image w-full h-full object-cover" src="${product.image}" alt="" />

        </div>
        <div class="data w-full px-2 py-5">
          <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name.toLocaleUpperCase()}</h1>
          <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
              <h3 class="font-semibold opacity-20">${product.headline.toLocaleUpperCase()}</h3>
              <h4 class="font-semibold mt-2">${product.price}</h4>
            </div>
            <button data-index= "${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i  data-index= "${index}" class="add   ri-add-fill"></i></button>
          </div>
        </div>
      </div>`;
  });
  document.querySelector(".products ").innerHTML = clutter;
}
addproduct();

var populars = [
  { name: "snikers", headline: "nike shoes", price: "$150", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" },
  { name: "dove soap", headline: "dove cusmotics", price: "$30", image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { name: "airpods", headline: "apple airpods", price: "$250", image: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { name: "laura perform", headline: "performs", price: "$50", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { name: "luara Googles", headline: "eyewears", price: "$150", image: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
];

function popularProducts() {
  var clutter = "";
  populars.forEach(function (popular) {
    clutter += `<div class="popular bg-white p-1 mb-5 rounded-2xl flex items-start gap-3 w-[19%] flex-shrink-0">
      <div class="w-20 h-50 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
        <img class="w-full h-full object-cover" src="${popular.image}" alt="" />
      </div>
      <div class="data py-2 w-full">
        <h1 class="leading-none font-semibold">${popular.headline.toUpperCase()}</h1>
        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popular.name.toUpperCase()}</h4>
        <h4 class="mt-3 font-semibold text-zinc-500">${popular.price.toUpperCase()}</h4>
      </div>
    </div>`;
  });
  //   console.log(clutter);
  document.querySelector(".populars").innerHTML = clutter;
}
popularProducts();

var cart = [];

function addCart() {
  document.querySelector(".products").addEventListener("click", function (details) {
    if (details.target.classList.contains("add")) {
      cart.push(products[details.target.dataset.index]);
    }
  });
}
addCart();

function showCart() {
  document.querySelector(".carticon").addEventListener("click", function () {
    document.querySelector(".cartexpnd").style.display = "block";

    var clutter = "";
    cart.forEach(function (prod, index) {
      clutter += `<div class="flex gap-2 p-2  bg-white  rounded-lg">
        <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
        <img class="w-full h-full object-cover" src="${prod.image}" />
        </div>
        <div>
        <h3 class="font=semibold">${prod.name}</h3>
        <h5 class="text-sm font-semibold opacity-1">${prod.price}</h5> 
        </div>
        </div>`;
    });
    document.querySelector(".cartexpnd").innerHTML = clutter;
    // console.log(clutter);
  });
}

showCart();
