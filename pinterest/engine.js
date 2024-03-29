var arr = [
  { name: "petals of roses", image: "https://images.unsplash.com/photo-1587015566802-5dc157c901cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2RzfGVufDB8fDB8fHww" },
  { name: "animals of tons", image: "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2RzfGVufDB8fDB8fHww" },
  { name: "the crowd", image: "https://images.unsplash.com/photo-1634141613544-001d33883517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2RzfGVufDB8fDB8fHww" },
  { name: "fruits", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2RzfGVufDB8fDB8fHww" },
  { name: "web design", image: "https://images.unsplash.com/photo-1609582848349-215e8bf397d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D" },
  { name: "artists", image: "https://images.unsplash.com/photo-1619337744931-97f65a4f14d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2RzfGVufDB8fDB8fHww" },
  { name: "petals of roses", image: "https://images.unsplash.com/photo-1587015566802-5dc157c901cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2RzfGVufDB8fDB8fHww" },
  { name: "animals of tons", image: "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2RzfGVufDB8fDB8fHww" },
  { name: "the crowd", image: "https://images.unsplash.com/photo-1634141613544-001d33883517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2RzfGVufDB8fDB8fHww" },
  { name: "fruits", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2RzfGVufDB8fDB8fHww" },
  { name: "web design", image: "https://images.unsplash.com/photo-1609582848349-215e8bf397d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D" },
];

var clutter = "";

function showTheCards() {
  arr.forEach(function (obj) {
    clutter += `<div class="box">
    <img class="curser-pointer" src="${obj.image}" alt="image" />
    <div class="caption"></div>
  </div>`;
  });
  document.querySelector(".container").innerHTML = clutter;
}
function handleSearchFunctionality() {
  var input = document.querySelector("#searchinput");
  input.addEventListener("focus", function () {
    document.querySelector(".overlay").style.display = "block";
  });
  input.addEventListener("blur", function () {
    document.querySelector(".overlay").style.display = "none";
  });
  input.addEventListener("input", function () {
    const filteredArray = arr.filter((obj) => obj.name.toLowerCase().startsWith(input.value));
    var clutter = "";
    filteredArray.forEach(function (obj) {
      clutter += `<div class= "res flex px-8 py-3">
    <i class= "ri-search-line font-semibold mr-5"></i>
    <h3 class= "font-semibold">${obj.name}</h3>
    </div>`;
    });
    document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = clutter;
  });
}
handleSearchFunctionality();
showTheCards();
// console.log(clutter);
