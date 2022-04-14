// https://grace-go.tistory.com/86

const $ = (selector) => document.querySelector(selector);

const App = () => {
  $box = $("#box");
  $min = $("#min");
  $max = $("#max");
  $btn = $("#btn");

  let btnClick = false;

  function animation(e) {
    e += 10;
  }

  function running() {
    if (
      !(Number($min.value) && Number($max.value) && $min.value < $max.value)
    ) {
      alert("올바른 값 입력");
      return;
    }
  }

  $btn.addEventListener("click", () => {
    btnClick ? ($btn.disabled = true) : ($btn.disabled = false);
    if (Number($min.value) && Number($max.value) && $min.value < $max.value) {
      btnClick = true;

      $box.innerText = Math.floor(
        (Math.floor(Math.random() * ($max.value - $min.value)) + $min.value) /
          100
      );
      var aniStartNum = parseInt($box.innerText, 10) - 100;
      let interval = setInterval(() => animation(aniStartNum), 100);
      for (var i = 0; i < 10; i++) {
        $box.innerText = aniStartNum;
      }
      clearInterval(interval);

      btnClick = false;
    } else alert("올바른 값 입력");
  });

  //   $btn.addEventListener("click", );
};
App();
