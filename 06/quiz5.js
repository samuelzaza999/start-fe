var $boxes = document.querySelectorAll(".box");

$boxes.forEach(function (box) {
  box.onmousedown = function (event) {
    var shiftX = event.clientX - box.getBoundingClientRect().left;
    var shiftY = event.clientY - box.getBoundingClientRect().top;
    document.body.append(box);

    function moveAt(pageX, pageY) {
      box.style.left = pageX - shiftX + "px";
      box.style.top = pageY - shiftY + "px";
    }
    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener("mousemove", onMouseMove);
    box.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      box.onmouseup = null;
    };
  };
});
