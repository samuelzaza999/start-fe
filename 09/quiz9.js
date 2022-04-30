/**
 * 성공 : quiz9.html 입력후 가져오기
 * 에러 : https://daum.net 입력후 가져오기
 * => 무슨 뜻? 성공하면 저 링크 fetch를 대신 출력하라는 의미?
 */

const $ = (selector) => document.querySelector(selector);

const App = () => {
  $url = $("#url");
  $btn = $("#btn");
  $log = $("#log");

  function onClick() {
    // 가져오기 : fetch 항목에 url 삽입하기
    fetch(`${$url.value}`)
      .then((response) => response.text())
      .then((res) => {
        $log.innerText = res;
      })
      .catch((err) => {
        $log.innerText = err;
      });
  }

  $btn.addEventListener("click", onClick);
  $url.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      onClick();
    }
  });
};
App();
