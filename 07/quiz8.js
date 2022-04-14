var $ = (selector) => document.querySelector(selector);

const App = () => {
  $box = $("#box");
  $min = $("#min");
  $max = $("#max");
  $btn = $("#btn");

  // const로 묶인 $ 산하는 직접 움직이지 않고 따로 변수를 둬서 마지막에 삽입하는 게 좋다
  let boxValue = 0;
  let anim = null;
  let isClick = false;

  // 함수로 만들어야 가독성, 끼워넣기 좋음
  // value를 갱신하는 방법이 parse 뿐인가?
  function randomNum() {
    return Math.floor(
      Math.random() * (parseInt($max.value) - parseInt($min.value)) +
        parseInt($min.value)
    );
  }

  function actBtn() {
    isClick ? ($btn.disabled = true) : ($btn.disabled = false);
  }

  function running() {
    boxValue = randomNum() - 100;
    anim = setInterval(() => {
      isClick = true;
      actBtn();
      boxValue += 10;
      $box.innerText = parseInt(boxValue); // setInterval로 변화한 값을 어떻게 불러올까?
    }, 50);
    setTimeout(() => {
      isClick = false;
      actBtn();
      clearInterval(anim);
    }, 500); // 셋타임아웃 내 클리어로 횟수 제한
  }

  $btn.addEventListener("click", running);
};
App();
