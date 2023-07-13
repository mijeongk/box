// 함수 function
// 예)
// 레시피 (실행상태x 나중에 벌어질 일들을 미리 얘기해줌)
// 공장 (재료 받아서(or재료 없어도) 만들고 납품)
// 마법 (1번 만든 것, 여러번 씀. 함수로 만들어두고 주문만 외우기)
// 수학 (예: f(x)=2x+1 결과모름. x에 대입시켜 결과값 알아냄)
// 기능

// 레시피 예시:
// function 떡볶이만들기(양념){
//     믈 끓이기
//     양념 넣기
//     떡 넣기
//     끓이기
// }

// 떡볶이 만들기(간장);

// 공장 예시:
// function 쥬스 공장(재료){
//     재료 착즙
// }

// 쥬스공장(당근);

// 함수를 선언한다.
// 내장함수: 자바스크립트 안에 내장되어있는 함수(ex-alert)
// function 함수이름(매개변수/parameter/인수){}
// function hello(name, lang){
//     if(lang == "ko") {
//         alert(name+"님 안녕하세요.");
//     }else if(lang == "ge"){
//         alert(name+" Guten tag.");
//     }else if(lang == "ch"){
//         alert(name+" Ni hao.");
//     }else{

//     }
// }

// hello("홍길동", "");

// var cel = "유재석"; //전역변수
// alert("가장 유명한 사람:"+cel);

// function bbb(){
//     var cel = "한지호"; //지역변수
//     alert("가장유명한사람:"+cel);
// }

// function ccc(){
//     var (cel);
// }

// // aaa();

// alert(cel);

// var name = prompt("이름을 입력하세요.");
// alert(name+"님 안녕하세요.");

// var a = prompt("첫 번째 수"); //아래 alert에 a+b를 했더라도 ab를 문자로 인식하기 때문에 숫자가 나열되어서 나옴(계산x)
// var b = prompt("두 번째 수");
// alert(a+b);


// 확인, 취소 버튼 누르는 것에 따라 달라짐
// contirm 논리값 2개 중 1개 선택할 수 있는 버튼 나옴
// var adult = confirm("만 18세 이상입니까?");
// alert(adult);

// 조건절 참, 거짓 참이면 실행, 거짓이면 불실행

// var adult = confirm("만 18세 이상입니까?");
// if(adult){
//     alert("어서오세요.");
// }else{
//     alert("아가들은 가라~!");
// }

// var del = confirm("정말로 데이터를 삭제하시겠습니까?");
// if(del){
//     alert("데이터 삭제");
// }

// function plus(a,b){
//     var result = a + b;
//     return result;
// }

// console.log( plus(3,5) );

// onclick이라는 이벤트가 발생되었을 때 실행시키는 것
// document.getElementById("aaa").onclick = function(){
//     alert("누르지마");
// }
// 문서에서 아이디가 "aaa"인 녀석을 눌렀을 때 이런 일이 벌어질 것이다.

// function sing(){
//     alert("빨간맛 궁금해 허니~");
// }

// 언제 실행시킬 것이냐
// 아래와 같이 하면 페이지 열자마자 켜짐
// sing();

// 원래 함수 뒤에 괄호 붙는데 지금은 안붙임 why? 과정 중심
// 추후에 결과중심이면 붙을 듯..?
// document.getElementById("aaa").onclick = sing;

// 조건발생
// document.getElementById("aaa").onclick = function(){
//     sing();
// };

// document.onmousemove = function(event){
//     var x = event.clientX;
//     var y = event.clientY;
//     console.log( x + "," + y );
// }

// 변수 s(score라는 뜻)에 0을 넣어준다.
// 문서에서 아디기 aaa인 녀석을 클리했을 때 이런 일이 벌어질 것이다.
// s를 1증가 시키자.
// 증가된 그 s를 문서에서 아이디가 score인 녀석의 안쪽에 s를 넣자.

// var s = 0;
// document.getElementById("aaa").onclick = function(){
//     // s++;
//     // 풀어쓴 ver.
//     // s = s + 1;
//     // 더 많은 숫자 더하거나 빼고싶을 때
//     // s = s + 10;
//     // 줄여 쓰는 방법
//     s += 10;
//     document.getElementById("score").innerHTML = s;
// }

// 값이 같은가?
// alert("apple"=="apple");
// alert(3==2);
// alert(3=="3");

// ===타입이 같은가?
// alert(3==="3");

// ~와 다른가? ! 넣기
// alert(3!=3);
// alert(3!=5);

// 비교
// alert(3>5);
// alert(3>3);
// alert(3<=3);
// alert(3<"5");

// &
// alert(5>3 && 6>3); // 결과 true
// alert(5>3 && 6>9); // 결과 flase

// 조건     A       B       결과
// &&       true    true   true
// &&       true    flase   flase
// &&       flase    true   flase
// &&       flase   flase   flase

// 조건     A       B       결과
// ||       true    true   true
// ||       true    flase   true
// ||       flase    true   true
// ||       flase   flase   flase

// var age = 17;
// var height = 162;
// if(age>=15 && height>=150){
//     alert("입장 가능");
// }else{
//     alert("입장 불가능")
// }

// var age = 5;
// var height = 50;
// if(age>=15 || height>=150){
//     alert("입장 가능");
// }else{
//     alert("입장 불가능")
// }

// var age = 15;
// var height = 132;
// var ticket = true;
// if(age>=15 || height>=150 && ticket){
//     alert("입장 가능");
// }else{
//     alert("입장 불가능")
// }

// var age = 15;
// var height = 132;
// var ticket = flase;
// if((age>=15 || height>=150) && ticket){
//     alert("입장 가능");
// }else{
//     alert("입장 불가능")
// }

var deposit = 100000;
var monthlt = 500;
var distance = 15;
var top = true;
var direction = "south";
if((deposit <= 100000 && monthly <= 50 && distance <= 15) && direction ? ){
    alert("입주");
}else{
    alert("입주 안함");
}