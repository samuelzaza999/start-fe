/**
 * 220428
 * HTTP : HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜(protocol)
 */

/**
 * URL : 통합 자원 지시자, Uniform Resource Locator, URI는 규약이고, URL은 규약에 대한 형태
 * http://www.domail.com:1234/path/to/resource?a=b&x=y
 * 프로토콜 - 호스트 - 포트 - 리소스 경로 - 쿼리
 */

/**
 * 요청 메소드 CRUD
 * GET : URL(URI) 형식으로 웹서버측 리소스(데이터)를 요청, Read
 * POST :	내용 전송 (파일 전송 가능), Create
 * PUT : 내용 갱신 위주 (파일 전송 가능), Update
 * DELETE : 파일을 삭제,	Delete
 *
 * 구글 F12 - 네트워크 - 메서드 체크
 */

/**
 * http 메시지
 * 1. 시작줄: 요청의 종류/응답의 결과
 * 2. 헤더: 이름과 값으로 구분된 추가정보, 헤더는 빈줄로 끝남
 * 3. 본문: 콘텐츠 데이터
 */
/**
 * 요청 헤더 (request)
 * GET / HTTP/1.1
Host: www.daum.net
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36
DNT: 1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,**;q=0.8
Accept-Encoding: gzip, deflate, br
Accept-Language: ko,en-US;q=0.9,en;q=0.8,de;q=0.7,fr;q=0.6,zh-CN;q=0.5,zh;q=0.4,th;q=0.3,la;q=0.2,da;q=0.1
 */
/**
 * 응답 헤더 (response)
 * HTTP/1.1 200 OK
Date: Fri, 07 Dec 2018 04:58:20 GMT
X-UA-Compatible: IE=10
Expires: Sat, 01, Jan 1970 22:00:00 GMT
Pragma: no-cache
Cache-Control: no-cache, no-store, must-revalidate
P3P: CP="ALL DSP COR MON LAW IVDi HIS IVAi DELi SAMi OUR LEG PHY UNI ONL DEM STA INT NAV PUR FIN OTC GOV"
Content-Type: text/html;charset=UTF-8
Content-Language: ko
Vary: Accept-Encoding
Content-Encoding: gzip
X-UA-Device-Type: pc
Content-Length: 48546
Connection: close
 */

/**
 * 캐싱 : 성능 최적화 목적으로 리소스를 따로 저장해두는 기술들
 * 일반 새로고침은 캐시 유지,
 */

/**
 * 상태 코드
# 성공(Success)
200	정상
201	자원(Resource) 생성 요청

# 리다이렉션
301	응답 코드는 요청한 리소스의 URI가 변경되었음을 의미
304 캐시된 자원으로 암묵적인 리다이렉션. 캐시 지우면 200으로 돌아온다.

# 클라이언트 에러
400	클라이언트 요청이 부적절할 경우 응답 코드
401	클라이언트가 권한이 없는 자원(Resource)를 요청하였을 때 응답 코드
403	보호되는 자원(Resource)를 요청하였을 때 응답 코드

# 서버에러
500	서버에 뭔가 문제가 있을때 사용하는 응답 코드
 */

/**
 * 테스트 도구 : postman, requestbin, .http 등
 * http 완벽 가이드
 */

//--------------------------------------------------------------------

/**
 * HTTP 스크립팅 (Ajax : Asynchronous JavaScript and XML)
 * 웹 서버와 비동기적으로 데이터 교환, 조작하기 위한 XML, JSON
 */

/**
 * XMLHttpRequest
 */
var req = new XMLHttpRequest();
req.open("POST", "dummy.xml", true);
req.send();
req.onreadystatechange = function () {};

/**
 * 주요 메소드 :
open(string method,string url,boolean asynch)
HTTP 요청과 동기/비동기 통신에 따른 필요사항을 준비

setRequestHeader(string header,string value)
요청 헤더를 설정합니다. 반드시 open( ) 메소드를 호출한 다음 사용

onreadystatechange
정의되는 콜백 함수는 readyState가 변경될 때마다 호출

send(string)
HTTP 요청을 합니다.

readyState
0 : uninitialized(open( ) 메소드가 호출되지 않은 상태)
1 : loading(send( ) 메소드가 호출되지 않은 상태)
2 : loaded(send( ) 메소드가 호출된 상태. header와 status 사용 가능)
3 : interactive(reponseText에 부분적인 데이터가 저장됨)
4 : completed

status : 응답 상태 코드, 200(Okay), 404(Not Found) 등
statusText : 응답상태 문자열
abort() : HTTP 요청을 취소
responseText : 반환된 일반 텍스트 문자열
responseXML : 반환된 XML , DOM객체
getAllResponseHeaders() : 모든 헤더 정보를 반환,문자열
getResponseHeader(string header) : 특정 헤더 값을 반환,문자열
 */

/**
 * fetch()
 */
fetch("issue.json") // 이 구간만 바꾸면 어디든 적용 가능, url 넣기?
  .then(function (response) {
    response.json().then(function (data) {
      console.log("json data:", data);
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });

/**
 * JSON : a lightweight data-interchange format
 * {
    "nick" : "FE MAN",
    "age" : 28,
    "area" :  "FE",
    "hobby" : ["js","html"]
};
 */

/**
 * JSONP : JSON Padding, Ajax 크로스도메인 이슈 회피
 * callback( {
    "nick" : "FE MAN",
    "age" : 28,
    "area" :  "FE",
    "hobby" : ["js","html"]
} )
사용하기 편하다, http 상태에 따른 디테일한 처리 불가능
 */
//JS동적 삽입
var head = document.getElementsByTagName("head")[0];
var script = document.createElement("script");
script.type = "text/javascript";
script.src =
  "http://api.facebook.com/method/links.getStats?format=json&urls=http://daum.net&callback=complate";
head.appendChild(script);

/**
 * Axios
 */
axios
  .get("/user?ID=12345")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

/**
 * CORS : Cross-Origin Resource Sharing
 * 웹 브라우저가 사용하는 정보를 읽을 수 있도록 허가된 출처 집합을
 * 서버에게 알려주도록 허용하는 HTTP 헤더를 추가함으로써 동작
 * 
 * Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS
Access-Control-Max-Age: 3600
Access-Control-Allow-Headers: Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization
 */
