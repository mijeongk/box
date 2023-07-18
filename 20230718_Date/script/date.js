var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
// var wol = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aus", "Sep", "Oct", "Nov", "Dec"];
// alert(wol[month]);
// alert(month+1); // 위에도 +1 할 수 있지만 여기 (원본은 보존하는게 좋음)

// 2023-07-18
// 2023-7-18
// 한자리 숫자일 때 좌측에 0을 추가해주는 함수 필요
function addZero(num){
    var result=""; // num 완성품 보여주려면 담아야한다.
    if(num < 10){
        result = "0"+ num;
    }else{
        result=num;
    }
    return result; // 결과 
}

var day = now.getDay();
var yoil = ["일","월","화","수","목","금","토"];
// 2023-07-18
month = addZero(month+1);
date = addZero(date);

// 2023-07-18 AM 10:03
var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();
var ampm = "";
if(hour >= 12){
    ampm = "PM";
    hour = hour - 12;
}else{
    ampm = "AM";
}

if(hour == 0){
    hour=12;
}
hour = addZero(hour);
min = addZero(min);
sec = addZero(sec);

var narjja = year+"-"+ month +"-"+ date + " "+ yoil[day];
narjja += " "+ ampm + " " + hour + ":"+ min + ":" + sec;

// a=a+1
// a+=1;
// a++;

// alert(narjja);

// timestamp 이용한 날짜계산
// 2022-02-03 이 날로부터 며칠 지났는지 알아보기.
// now의 timestamp에서 2022-02-03의 timestamp를 빼면 => 지나온 세월(timestamp) => 일자로 계산
// alert(now.getTime());

document.getElementById("dateBtn").onclick = (function(){
    var date = document.getElementById("date").value;
    // alert(date); 중간점검
    var anni = new Date(date);
    var anniTimestamp = anni.getTime();
    var nowTimestamp = now.getTime();
    var duration = nowTimestamp - anniTimestamp;
    // alert(duration); 중간점검
    duration = duration / 1000;
    duration = parseInt(duration); //integer(정수)
    // alert(duration); 중간점검 (소수점 제외)
    // 하루 = 24시간 => 12*60=1440분 => 86400초
    duration = duration/86400 // 일수로 변경됨
    duration = Math.floor(duration);
    // alert(duration); 중간점검
    document.getElementById("result").value= duration + "일 째입니다.";
});

// 오타 어디있는지 보기!!

// 왜 이름이 jQuery인가? javascript query(질의: 필요한 정보를 묻기 위해 질문하는 것) => 뭔가를 부른다!
// INSER INTO user (userId, userPw, userName) VALUE("abc123","afdf").. 데이터베이스 이런식으로 쓴다. 어쨌든 질의 한다.
// $("#apple p>span"); // id가 apple 인

// $(".banana"); // class가 banana인 것 부르기

// for(i=1; i<-100;i++){
//     $("#box")+i;
// } 

// 왜 문자로(따옴표로) 아이디를 묶나? 예로 html에 box1~100까지 있는데 위 사항으로 부르려면 배열로다 적어야하지만 for문 사용하고 i라는 것을 넣어주면 더 간단함

// 지호야 걸어가라.
// $("지호").walk();
// 날씨가 비올 때 지호야 뛰어가라.
// $("날씨").비올때(function(){
    // $("지호").뛰어가라();
// });

// 까마귀 날자 때 떨어진다. 
// 까마귀가 날 때 funcstion 이뤄진다.
// ~할때 보통 event 함수라고 한다. 날떄(이벤트). 떨어진다(일반함수)
// $("까마귀").날때(function(){
    // $("배").떨어진다();
// });

// 지호가 기쁠 때 지호는 박수를 쳐라. 주어가 중복됨. 그러니 this를 활용한다.
// $("지호").기쁠때(function(){
//     $(this).박수치기();
// });

// 남자가 화났을 때 [그 화난 사람만] 손을 들어라.
// 남자가 화났을 때 [사람] 손을 들어라. 모든 남자들 손들게 해라
// 남자가 화났을 때 [그 사람] 손을 들어라. 화난 그 사람만 손들게 해라
// $("남자").화났을때(function(){
//     $(this).손들기();
// });

// #list>li에 마우스를 올렸을 때
// #list>li는 빨개진다.
// $("#list").mouseover(function(){
//     $("#list").css("스타일이름", "값")
// });

// $("#list1>li").mouseover(function(){
//     $("#list1>li").css("color", "red");
// });

// $("#list1>li").mouseout(function(){
//     $(this).css("color","red");
// });
// 왜 이것도 안되냐...

//이거 먼저 해줘야한다.
$(document).ready(function(){
    
    $("#list1>li").click(function(){
        $(this).hide();
    });
    // #nation인 녀석의 값이 변했을 때 alert로 그녀석의 값을 표시하자
    $("#nation").change(function(){
        alert($(this).val());
    });
    $("#input").focus(function(){
        $(this).css("ouline","2px solid red")
    });
    $("input").blur(function(){
        $(this).css("outline","none");
    });

    // #input1에서 키가 눌릴때 그 내용을 #final1에 적겠따.
    $("#input1").keyup(function(){
        var t = $(this).val();
        $("#final").text(t);
        // (keydown 함수에 넣으면) 키가 눌리기 시작하고 글자가 들어옴 글자 들어오기 전에 직전 내용만 쓰게됨 그래서 마지막 글자 안나옴 
        // 그러니 keyup 사용

        $("#submitBtn").click(function(){
            alert();
        });

        // #input2에서 키가 눌렸을 떄 방금 눌린키가 엔터키라면 #submitBtn을 누른셈이나 다름없게 하겠다.(촉발제?)
        // event = e라고도 함
        // enterkey 13번
        // 코드 모르면 alert로 묶어서 물어보기

        $("#input2").keyup(function(event){
            // alert(event.keyCode); 키 눌렀을 때 코드 무엇인지 나타냄
            if(event.keyCode == 13 ){
                $("#submitBtn").trigger("click");
            }
        });
    });
    // 문서 내에서 마우스가 움직일때마다 이런일들을 하겠다.
    // 방금 움직인 그 마우스의 x,y좌표를 찾알.
    // fly인 녀석에게 x,y좌표를 통해 위치를 지정해준다.

    $(document).mousemove(function(event){
        // console.log(event.clientX);
        var x = event.clientX;
        var y = event.clientY;
        $("#fly").css({left:x+"px"+top+"px"});
    });

    // .main에 마우스 올렸을 때
            // .main>a에 마우스 올렸을 때 안됨 메뉴 사라짐? a든 sub든 살아있어야하니 main으로 해야한다
        // 방금 그것의 자식 중 .sub라고 하는 녀석을 보여주자.
    // .main에서 마우스 치웠을 때 이런 일이 벌어질 것이다.
        // 방금 그것의 자식 중 .sub라고 하는 녀석을 숨겨주자.
    $(".main").nouseenter(function(){
        $(this).children(".sub").show();
    });
    $(".main").mouseleave(function(){
        $(this).children(".sub").stop().fadeIn(); // slideDown 등도 가능
    });
    $(".main").mouseleave(function(){
        $(this).children(".sub").stop().fadeOut(); // slideUp 등도 가능
    });


});


// 이것도 안되네...
// change() => (input타입 텍스트에 글자 쓰고 focus나갔을 때) select, 라디오 체크박스에 많이 쓰임 사실 selec일때 더 많이 씀
// bubling 보통 부모가 자식에게 영향 미치는데 자식과 부모가 겹쳐있지 않은 공간에서 자식에만 얹어도 부모에게 영향을 미친다..?
// 자주 쓰는 mouseenter, mouseleave

