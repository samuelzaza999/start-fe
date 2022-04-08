const $ = (selector) => document.querySelector(selector);

const App = () => {
  $num = $("#num");
  $btn = $("#btn");
  $result = $("#result");

  $btn.addEventListener("click", () => {
    if (Number($num.value)) gugu($num.value);
    else alert("숫자를 입력하세요");
  });

  function gugu(input) {
    if ($result.innerText != "") $result.innerText = "";
    for (var i = 1; i <= 10; i++) {
      $result.innerText += `${input} * ${i} = ${input * i}\n`;
    }
  }
};
App();
