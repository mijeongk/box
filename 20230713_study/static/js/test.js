
// var redCup=10;
// var blueCup=20;
// var whiteCup=0;

// document.write("변경전 빨간컵 : "+redCup+" 파란컵 : "+blueCup+"<br>");

// whiteCup = redCup;
// redCup = blueCup;
// blueCup = whiteCup;

// document.write("변경후 빨간컵 : "+redCup+" 파란컵 : "+blueCup+"<br>");

//위 물음표 세줄에 들어갈 알맞은 코드를 작성하시오.
// 화면에 출력되는 내용은 다음과 같습니다.
// 변경전 빨간컵 : 10 파란컵 : 20
// 변경후 빨간컵 : 20 파란컵 : 10

// redCup=20 이렇게 하는건 금지. 덮어버려서 값이 없어지니 이렇게 하면 안된다.

// var jin =0;
// var red=1;
// var blue=2;
// var yellow=3;
// var green=4;

// jin = red;
// document.write("변경전 : "+jin+"<br>");

// jin = green;
// document.write("변경후 : "+jin+"<br>");

// jin(청바지)에 빨간색으로 물들였다.
// 청바지를 녹색으로 물들이고 청바지의 색이 무엇인지 출력하시오.
// 실제 색의 출력은 그냥 숫자만 나오면 된다.(1-빨강, 2-파랑)

// 데이터를 저장하는 가장 기본적인 방법은 변수입니다.
// 변수를 모르면 할 수 있는게 없어요.....
// 변수에 저장되는 데이터는 오직 하나!
// 변수에 다른 데이터를 저장하면 이전 데이터 위에 덮어쓰기 합니다.
// 스크립트에서 변수는 숫자를 가질 수도 문자를 가질 수도 있어요.
// 숫자를 저장했다고 문자 저장 못하는거 아닙니다.

// 제어문 - 조건문, 반복문
// 조건문 - if, switch문
// 반복문 - for, while, do~while

// if문 - 조건식이 참이니 거짓이냐에 따라서 코드가 실행된다. (분기문)
// 조건식 - 결과가 참과 거짓이 나오는 식
//          비교 - > , < , >= , <= , == , != (범위가 있는 연산자)

// 140<= 키 . 4<= 수업시간 , 심부름 ==심부름결과(고추장)
// 내위치 == 주문위치

// var tall = 150;
// if( tall>= 140){ // 조건식이 참일 경우 실행되는 곳
//     document.write("바이킹 탑승");
// }else{ // 조건식이 거짓일때만 실행되는 곳
//     document.write("바이킹 탑승 불가");
// }

// // 점수가 60점 이상이라면 합격, 60점 미만이라면 불합격
// var score = 80;
// if(score>= 60){
//     document.write("합격");
// }else{
//     document.write("불합격");
// }

// document.write("<br><br>");

// 국도 8-10길에서 시속 70km 제한이 있다.
// 과속인지 아닌지 자동차의 속도를 입력받아서 출력하시오.

// var v = 50;
// if( v >70){
//     document.write("과속");
// }else{
//     document.write("정상 속도입니다.");
// }

// 내 점수의 등급을 출력하고 싶다.
// 90점 이상이면 A, 80점 이상이면 B, 70점 이상이면 C, 나머지는 F

// var score =Number(prompt("나의 점수"));
// if(score>=90){
//     document.write("<br> A등급 ");
// }else if(score>=80){
//     document.write("<br> B등급 ");
// }else if(score>=70){
//     document.write("<br> C등급 ");
// }else{
//     document.write("<br> F등급 ");
// }


// 음식을 배달 주문했다.
// 음식점의 위치는 중구 대흥동이다.
// 같은 구에서 주문하면 배달료 0원,서구에서 주문하면 배달료 1000원
// 동구에서 주문하면 배달료 2000원이다.
// 이 때 현재 나의 위치는 어디인지 입력하여 배달료 얼미인가 출력하시오
// (중구, 서구, 동구 중 하나만 입력한다.)

// var my_location = prompt("나의 위치는 ");
// var tip=0; //배달변수

// if(my_location == "서구"){
//     tip=1000;
// }else if(my_location == "동구"){
//     tip=2000;
// }
// document.write(my_location+"에서 주문 배달료는 "+tip+"원 입니다.");

// 더 간단하게 사용할 수 있는 것, 불필요한 것이 무엇이 있는지 찾아보기!!
// 간단! 줄이기!
// 다양한 경험 많이 겪기


// if(my_location == "중구"){
//     document.write("<br> 배달료 0원");
// }else if(my_location == "서구"){
//     document.write("<br> 배달료 1000원");
// }else if(my_location == "동구"){
//     document.write("<br> 배달료 2000원");
// }

// 지금 하는걸로 과제 해오기

// var num = Math.floor(Math.random()*10 ) + 1;
// document.write( num );

// 곲하기 - 큰숫자-작은숫자+1
// 더하기 - 가장 가장 작은값

// 동전 맞추기, 1-앞면, 2-뒷면

// Math.floor 넣어야 정수 나옴

// var coin = Math.floor(Math.random()*2 )+1 ;

// var user = prompt("1.앞면 2.뒷면");
// if( isNaN(user)){ // isNaN 함수는 숫자로 변환이 가능한 경우 거짓,
//                     //숫자로 변환이 불가능한 경우 참이다. 
//     alert("숫자만 입력하세요.");
//     user = prompt("1.앞면 2.뒷면");
// }
// user = Number(user); // 문자열을 숫자로 변환

// if( coin == user ){
//     document.write((user==1 ? '앞면' : '뒷면')+"정답 <br>");
// }else{
//     document.write("틀렸어...")
// }

// 조건 연산자 if문처럼 참, 거짓인지 만들 수 있음 (참이면 ? 뒤에꺼 실행
// 거짓이면 : 뒤에꺼 실행)
// 이거.. 꼭.. 해야하는거야..!!ㅠㅠㅠ!! 


// 주사위 게임
// 주사위는 던져졌다. 주사위의 숫자가 무엇인지 맞추시오.
// 내가 입력한 숫자가 주사위의 숫자와 같다면 정답, 같지 않다면 손목이라고 출력

// var dice = Math.floor(Math.random()*6)+1;

// var user = prompt("1~6 중에 하나를 입력하시오.");
// user = Number(user);

// if( user == dice){
//     document.write(("정답 "+dice));
// }else{
//     document.write("손목");
// }


// var dice = Math.floor(Math.random()*6)+1;

// var user = inputNum("1~6 중 하나를 입력하시오.");

// if( user == dice){
//     document.write(("정답 "+dice));
// }else{
//     document.write("손목");
// }

// function inputNum(str){
//     var a = prompt(str);
//     if( isNaN(a)){
//         alert("숫자만 입력 가능합니다.");
//         a=prompt(str);
//     }
//     a=Number(a);
//     return a;
// }


var dice = Math.floor(Math.random()*6)+1;

var user = inputNum("1~6 중 하나를 입력하시오.");

if( user == dice){
    document.write(("정답 "+dice));
}else{
    document.write("손목");
}

function inputNum(str){
    var a = prompt(str);
    while( isNaN(a) ){
        alert("숫자만 입력 가능합니다.");
        a=prompt(str);
    }
    a=Number(a);
    return a;
}

// 과제
// 주차장 요금 계산
// 주차장 기본요금 1000원 (30분) 1~39분 1000원
// 10분 초과시 100원 추가

// 2시간 이상 주차시 기본요금 1500원
// 4시간 이상 주차시 기본요금 2500원
// 8시간 이상 주차시 무조건 5000원

//주차한 시간이 총 몇분인가 입력하여 요금 출력하기