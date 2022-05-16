/**
 * roadmap.sh
 * https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide
 * 콘솔에서 도메인 등록해야, REST API 사용
 */

//  curl -v -X GET "https://dapi.kakao.com/v2/search/web" \
//  --data-urlencode "query=이효리" \
//  -H "Authorization: KakaoAK 086351cf0bafd4cb33ca55eb4757e190"

// let url = `https://dapi.kakao.com/v2/search/web?query=#query&page=1`;
var pageNum = 1;

const $docs = document.querySelector("#docs");
// const $query = document.querySelector("#query");
const $query = document.querySelector(`[name="query"]`);
// const $searchBtn = document.querySelector("#searchBtn");
const $searchForm = document.querySelector("#searchForm");
const $moreBtn = document.querySelector("#more");

function getFetch(url, callback) {
  const headers = {
    // 프론트에서는 키 값을 숨길 수 없음, 백엔드로 넘겨야
    Authorization: "KakaoAK 086351cf0bafd4cb33ca55eb4757e190",
  };
  fetch(url, { headers })
    .then((Response) => Response.json())
    .then((data) => callback(data));
}

function search(num) {
  let url = `https://dapi.kakao.com/v2/search/web?query=#query&page=${num}`;
  const query = $query.value;
  const searchUrl = url.replace("#query", query);

  getFetch(searchUrl, (data) => {
    const { documents } = data;
    const docs = documents.map((document) => {
      return document.contents;
    });
    $docs.innerHTML = docs.join("<hr>"); // 불러오면서 분리
  });
}

// $searchBtn.addEventListener("click", search);
// $query.addEventListener("keydown", (e) => {
//   if (e.key != "Enter") return;
//   search();
// });

// 개발자 도구 - 콘솔 - 로그 보존 켜기
$searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  search(pageNum);
});
$moreBtn.addEventListener("click", (e) => {
  pageNum++;
  e.preventDefault();
  search(pageNum);
});
