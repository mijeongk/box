// 페이지를 연 후 3초가 지났을 때 이런 일을 할 것이다. (미래시제)
    // 아이디가 box1인 녀석 안에 "hello"라는 문자열을 추가하겠다.

// window.setTimeout(); 이게 맞지만 생략하기도함 (원래 윈도우 객체라는 것은 잊지 않기!)
// 함수 이름 넣지 않아?, 시간 기본단위가 밀리세크임

// setTimeout(function(){
//     document.getElementById("box1").innerHTML
//     = document.getElementById("box1").innerHTML + "hello";
// },3000);

// 페이지를 연 후 3초 마다 이런 일을 할 것이다.
    // 아이디가 box1인 녀석 안에 "hello"라는 문자열을 추가하겠다.
// setInterval(function(){
//     document.getElementById("box1").innerHTML
//     = document.getElementById("box1").innerHTML + "hello";
// },500);

// for(i=0; i<100; i++){
// document.getElementById("box1").innerHTML
//     = document.getElementById("box1").innerHTML + "hello";
// }
// // for 문 setInterval 헷갈리지 않기~! for문 한번에 정해진 횟수만큼, setInterval 때마다 끝없이 나옴

// for(i=0; true; i++){
//     document.getElementById("box1").innerHTML
//         = document.getElementById("box1").innerHTML + "hello";
//     }
// true 동시에 무한으로 한방에 나오려니 교착상태에 빠짐

// setTimeout(function(){
//     location.href = "http://naver.com";
// },3000);
// rediretion

// 09:05:03 => 9:5:3으로 나오니 0이라는 '글자'를 넣어주고 이외 10의자리로 바뀌면 0이 없어지게 만들어야함

// 한자리 숫자인 경우 앞에 "0"을 추가해주는 함수
// (왜 함수로? 시, 분, 초에 다 적용해야함)
function addZero(num){
    // 재료로 들어온 숫자(num)가 만약 10보다 작다면? (한자리 숫자라면)
        // 그 숫자 왼쪽에 "0"을 더해주고 가공된 숫자라고 하자.
    // 그렇지 않다면
        // 그냥 재료로 들어온 숫자를 가공된 숫자라고 하자.
    // 그렇게 가공된 숫자를 원청자에게 납품한다.

    var result;
    if(num<10){
        result = "0"+num;
    }else{
        result = num;
    }
    return result;
}
// alert(addZero(9)); (시범)

function add2Zero(num){
    var result;
    if(num < 10){
        result = "00"+num;
    }else if(num < 100){
        result = "0"+num;
    }else{
        result = num;
    }
    return result;
}

var clock = setInterval(function(){
    // 현재 시간을 캡쳐한다.
    // 당시의 시, 분, 초를 알아낸다.
    // 각각 시, 분, 초가 한자리 숫자인 경우 addZero 함수를 이용해 0을 붙인다.
    // 이렇게 만들어진 시, 분, 초를 시:분:초의 형태로 만들어서
    // 아이디가 box1이라는 녀석의 내용으로 써준다.
    var now = new Date();
    var hour = now.getHours(); // <->get은 자동으로 set 우리가 설정
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var msec = now.getMilliseconds(); // millisecond는 0~999까지 있음 0을 1 붙일지 2개붙일지
    hour = addZero(hour);
    min = addZero(min);
    sec = addZero(sec);
    msec = add2Zero(msec)
    var time = hour+":"+min+":"+sec+":"+msec;
    document.getElementById("box1").innerHTML = time; //덮어쓰면 돼서 또 안씀
}, 20);
// 새로운 객체 만드는 함수 따로 있음. 대부분 첫글자가 대문자인 경우가 많음.

// var jiho = {
//     age: 19,
//     salarty: 250,
//     gender: "m"
// }
// 복잡한.. 객체변수

// setInterval 변수를 만들고 setInterval 이름 붙이고 변수에 넣어버리기 (연결한다)
// clearInterval?
// 문서에서 아이디가 "clockStopBtn"이라는 녀석이 눌리면 이런 일을 할 것이다.
    // clock이라는 interval을 멈추자
document.getElementById("clockStopBtn").onclick=function(){
    clearInterval(clock);
}

// document.getElementById("box1").style.color = "red";
// 위 사항 jquery로 하면됨

// reload(); 무한새로고침 페이지
// for(i=0; i<100; i++){
//     window.open("http://naver.com", "win+i"+i) // open 새창 띄우기
// }

// array => arr로 쓰기도 한다.
var arr = ["박보검", "뷔", "설윤", "윈터", "카리나", "닝닝"];
document.getElementById("addName").onclick = function(){
    var name=document.getElementById("userName").value;
    arr.push(name);
    alert(arr);
}
// 추가한 것 지워지지 않고 쌓임
document.getElementById("delName").onclick=function(){
    arr.pop();
    alert(arr);
}

// var num = 3;
// num = num + ""; // 자동으로 문자열 됨

var num = "4.50$"; // ,가운데 문자열 넣으면 뒤에는 자름 
num = parseFloat(num); // introl 소수점 버림?으로 됨 (정수) 실수는 소수점 살림
alert(num*2);

alert(Math.random());

// !!!중요!!! 최솟값, 최댓값을 지정하고 그 사이에서 랜덤한 정수를 만드는 함수 !!!
// Math.random() =>   0~1(1안나오고?? 미세한 확률?이라? 0.999...?)
// Math.random()*5    0~5 (최댓값 곱하면 된다?)
// Math.random()*(5-2)+2  2~5 1*5+2 7나온다. 그러니
// Math.random()*(최댓값-최솟값)+최솟값 (결론)
// 버림 (Math.random()*(최댓값-최솟값)+최솟값) (결론)
// Math.floor(Math.random()*(max-min)+min);
// alert(Math.random()*5);
// 실제로 최댓값 5라고 하지만 +1 하고 소수점 버림 해야 5값 살려서 나올 수 있음

function rand(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
// alert(rand(1,6));

// var count = [0,0,0,0,0,0];
// for(i=0; i<1000; i++){
//     var num = rand(1,6);
//     count[num-1]++;
// }
// alert(count);

// css에서 background-color: rgb(255, 0, 0); 괄호 안에 랜덤하면 색도 랜덤
setInterval(function(){
    var r = rand(0,255);
    var g = rand(0,255);
    var b = rand(0,255);
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb("+r+","+g+","+b+")";
}, 5000);
// id 제외하고 다 getElement's' 사용. 바디가 1개라도 0번째 적어줘야함 "rgb("++","++","++")";

// var text = "안녕하세요. 하하입니다."; 
// alert(text.length); // 공백 포함되어 글자 갯수 나옴
// alert(text.indexOf("하")); // 왼쪽부터 시작하여 가장먼저 발견되는 것 알려줌
// alert(text.charAt(4));
// alert(text.substring(2,5)); // 5번째 전까지 나온다.
// alert(text.substr(2,3)); // 2번째부터 3 글자만 나옴


// !!중요!! path에서 확장자 추출하기 !!
// var path ="abc/fff/123/123/123/eee.asdfad.adsfad.jpg"; // 파일명 경로. 맨 뒤에 있는 확장자
var path = location.href;
path = path.split("/"); // / 폭파시킴(expl..). 3조각이 난 것임
// alert(path[2]); // 2번째것 알려줌. but 파일 경로가 더 추가되어있다면 조각을 더 내야하고 내가 알고자하는 확장명이 안나올 수 있음
// 항상 마지막은 '갯수-1' 이더라
// extension
var ext = path[path.length-1].split("."); //확장자만 알고싶을 때 but .kfad.jpg 일수도 있음
ext = [ext[ext.length-1]];
ext = [ext[0]]; // 파일명??
alert(ext);
// alert(path[path.length-1]); // 파일명과 확장자 같이 나옴

document.getElementById("attBtn").onclick=function(){
    var path = document.getElementById("attach").value;
    path = path.split("/");
    var ext = path[path.length-1].split("."); // 파일명
    ext = ext[ext.length-1]; // 확장자
    alert(ext);
}

//jquery

