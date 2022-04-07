const $ = (selector) => document.querySelector(selector);

const App = () => {
  $num = $("#num");
  $btn = $("#btn");
  $result = $("#result");

  $btn.addEventListener("click", () => {
    $result.innerText = $num.value;
  });

  function gugu() {
    for (var i = 2; i <= 9; i++) {
      for (var j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + i * j);
      }
    }
  }
};
App();
