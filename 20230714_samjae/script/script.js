// var ganji = ["신", "유", "술", "해", "자", "축", "인", "묘", "진", "사", "오", "미"];

// function zodiac(year){
//     return ganji[year % 12];
// }

// document.getElementById("btn").onclick = function(){
//     var samjae = flase;
//     var birth = document.getElementById("birth").value;
//     var target = document.getElementById("target").value;
//     if(birth.length * target.length == 0 ){
//         alert("생년과 대상연도를 입력하해주세요.");
//     }else{
//         var birthDdi = zodiac(birth);
//         var targetDdi = zodiac(target);
//         if(birthDdi=="신"||birthDdi=="자"||birthDdi=="진"){
//             if(targetDdi=="인"||targetDdi=="묘"||targetDdi=="진"){
//                 samjae = true;
//             }else{
//                 samjae = flase;
//             }
//         }
        
//         if(birthDdi=="인"||birthDdi=="오"||birthDdi=="술"){
//             if(targetDdi=="신"||targetDdi=="유"||targetDdi=="술"){
//                 samjae = true;
//             }else{
//                 samjae = flase;
//             }
//         }

//         if(birthDdi=="사"||birthDdi=="유"||birthDdi=="축"){
//             if(targetDdi=="해0"||targetDdi=="자"||targetDdi=="축"){
//                 samjae = true;
//             }else{
//                 samjae = flase;
//             }
//         }
        
//         if(birthDdi=="해"||birthDdi=="묘"||birthDdi=="미"){
//             if(targetDdi=="사"||targetDdi=="오"||targetDdi=="미"){
//                 samjae = true;
//             }else{
//                 samjae = flase;
//             }
//         }
        
//         if(samjae){
//             alert(birthDdi+"인 당신은 "+target+"년에 삼재입니다");
//         }else{
//             alert(birthDdi+"인 당신은 "+target+"년에 삼재가 아닙니다");
//         }
//     }
// }

// 반복문(for/while)을 제어하는 두가지 방법
// break(그만둔다)

// for(i; i<정년; i++){
//     if(누가 이유없이 나를 미워한다){
//         break;
//     }else{
//         // 출근한다
//     }
// }
// 정년이 되기 전까지 출근한다 but 누가 이유없이 미워해서 break 멈춤 아니면 출근

// continue(이번턴을 쉰다)
// for(i=0; i<정년. i++){
//     if(큰 병에 걸렸다){
//         Continue;
//     }else{
//         // 출근한다
//     }
// }
// 1~100까지의 숫자 중 짝수만 더하는 프로그램
// 1~100까지의 숫자 중 짝수이면 더하고 홀수이면 건너뀌는 프로그램
for(i=0; i<=100; i++){
    if(i%2 == 0){
        total = total +i;
    }else{
        continue;
    }
}
alert(total)