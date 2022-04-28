// fetch("data.json")
//   .then(function (response) {
//     console.log(response);
//     response.json().then(function (data) {
//       console.log("json data:", data);
//     });
//   })
//   .catch(function (err) {
//     console.log("Fetch Error :-S", err);
//   });

function getFetch(url, callback) {
  fetch(url)
    .then((response) => {
      console.log(response.headers);
      response.headers.forEach(function (val, key) {
        console.log(key + " -> " + val);
      });
      return response.json();
    })
    .then((data) => callback(data));
}

// f12 - 네트워크 - fetch/XHR - json 더블클릭 - 링크 복사 (access-control-allow-origin 따라 실행 갈림)
const url =
  "https://gfp.veta.naver.com/adcall?u=p_theme_sports&xdid=p_theme_sports_div&p=da_dom_id%3Ap_theme_sports_div&c=https%3A%2F%2Fwww.naver.com%2F&sv=0.4.1&sn=web&sa=0&rui=89891164523555170";

getFetch(url, (data) => console.log(data));
