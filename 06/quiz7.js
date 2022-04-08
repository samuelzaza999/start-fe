const $ = (selector) => document.querySelector(selector);

const App = () => {
  $point = $("#point");
  $life = $("#life");
  $box = $(".box");
  $bug = $("#bug");

  function bugMove() {
    $bug.style.display = "none";
    $bug.style.top = 20 * Math.floor(Math.random() * 20) + "px";
    $bug.style.left = 20 * Math.floor(Math.random() * 20) + "px";
    $bug.style.display = "block";
  }

  $bug.addEventListener("click", () => {
    $point.innerText = parseInt($point.innerText, 10) + 1;
    $bug.style.display = "none";
    event.stopPropagation();
  });
  $box.addEventListener("click", () => {
    $life.innerText = parseInt($life.innerText, 10) - 1;
    if ($life.innerText == "0") {
      alert("game over");
      clearInterval(interval);
    }
  });

  let interval = setInterval(bugMove, 1400);
};
App();
