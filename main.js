window.addEventListener("load",function () {
let btn = document.querySelector("button#Button");

btn.addEventListener("click", function () {
});

let btn2 = document.querySelector("#Button2");
let changeText = document.querySelector("p");

btn2.addEventListener("click", function() {
  changeText.innerHTML = '変更されました';
});

let btn3 = document.querySelector("#Button3");

btn3.addEventListener("click", function() {
  changeText.classList.add("red");
});

let btn4 = document.querySelector("#Button4");

let obj = document.querySelector("div");

btn4.addEventListener("click", function() {
  obj.classList.remove("blue");
  });
});
