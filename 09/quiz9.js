const $ = (selector) => document.querySelector(selector);

const App = () => {
  $url = $("#url");
  $btn = $("#btn");
  $log = $("#log");

  // 가져오기 : fetch 항목에 url 삽입하기
  fetch("issue.json")
    .then(function (response) {
      response.json().then(function (data) {
        console.log("json data:", data);
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
};
App();
