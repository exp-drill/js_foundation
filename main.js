window.addEventListener("load", function() {
  var btn = document.querySelector("button#Button");

  btn.addEventListener("click", function() {
    console.log("Hello world");
  });

  // テキストの要素を取得し、変数で定義
  var btn2 = document.querySelector("button#Button2");
  var changeText = document.querySelector("p");

  // ボタン2をクリックしたらテキストが置換される
  btn2.addEventListener("click", function() {
    changeText.innerHTML = '変更されました';
  });

  // Button3を取得して、変数で定義
  var btn3 = document.querySelector("#Button3");

  // クラス追加を押したらredクラスが追加される
  btn3.addEventListener("click", function() {
    changeText.classList.add("red");
    console.log(changeText.classList);
  });

  // Button4を取得して、変数で定義
  var btn4 = document.querySelector("#Button4");
  // div要素を取得して、変数で定義
  var obj = document.querySelector("div");

  // クラス削除を押したらblueクラスが削除される
  btn4.addEventListener("click", function() {
    obj.classList.remove("blue");
  });

   // Button4を取得して、変数で定義
   var menu = document.querySelector("button#menu");
   // div要素を取得して、変数で定義
   var menu2 = document.querySelector("ul.nav");
 
   // クラス削除を押したらblueクラスが削除される
   function mouseover() {
    
   }

});
