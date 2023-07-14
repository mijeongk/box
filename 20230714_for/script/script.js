// ~하는 동안은 계속 반복한다.
// while

// for(시작값 ; 조건식 ; 증감식){
    // 반복할 내용
// }
// 반복하고싶은 횟수를 조건식에 넣기
// i interation count;;

// i는 반복한 횟수를 의미
// for(i=0;i<5;i++){
//     // 반복할 내용
// }

// 예시
// for(나이=0;나이<80;나이++;;){
//     // 살아가기
// }
// => 80이상 되기 전까지 반복

// text = "a";
// text = text+"b";

// for(i=0;i<5;i++){
//     document.getElementById("para1").innerHTML = document.getElementById("para1").innerHTML + "*";
// }

// 0부터 100까지의 정수를 더하는 코드를 작성하시오.
// 1+2+3+...+98+99+100

// var total=o;
// for(i=0; i<=100;i++){
//     total=total+i
// }
// document.getElementById("para1").innerHTML = total;

// 100부터 0까지의 정수를 더하는 코드를 작성하시오.
// 100+99+98+...+3+2+1+0

// var total=0;
// for(i=0; i<=100;i++){
//     total = total + (100-i);
// }
// for(i=100; 0<=i<=100; i--){
//     total = total +i;
// }


// 0+2+4+6+8+...+96+98+100
// var total=0;
// for(i=0; i<=100; i++){
//     if(i%2 == 0){ //i를 2로 나눴을 떄 나머지가 0일경우 짝수의 배수이기 때문에
//         total = total + i;
//     }
// }

// document.getElementById("para1").innerHTML = total;


// // 1+3+5+7+9+...+97+99
// var total=0;
// for(i=0; i<100; i++){
//     if(i%2 == 1){
//         total = total +i;
//     }
// }

// document.getElementById("para1").innerHTML = total;

// 아이디가 para1인 태그 내부에 100개의 *을 기입하는 코드를 작성하시오.

// var star = "";
// for(i=0; i<100; i++){
//     star = star + "<b>ㅎㅎㅎ<b/>";
// }
// document.getElementById("para1").innerHTML = star;

// 아이디가 date인 태그의 내부에 <option></option>를 기입하는 행위를 31번 반복하되 옵션태그 내에는 1부터 31까지의 숫자가 들어가야 한다.
// 반복하자 31번
    // 아이디 date에 내용 추가하자
        // <option>{반복한 횟수+1}</option>

// 먼저 계산해야하는 것에는 ()괄호 사용하기
var tag = "";
for(i=0; i<31; i++){
    tag = tag + "<option>"+ (i+1) +"</option>"
}
document.getElementById("date").innerHTML = tag;

// 오감도 - 이상
// var fiveSense = "";
// for(i=0;i<13;i++){
//     fiveSense = fiveSense + "제 "+ (i+1) + "의 아이가 무섭다고 그리오<br>"
// }

// document.getElementById("para1").innerHTML = fiveSense;

// 오감도 - 이상
var fiveSense = "";
for(i=0;i<13;i++){
    if(i==0 || i==10){
        fiveSense = fiveSense + "제 "+ (i+1) + "의 아이가 무섭다고 그리오<br>"
    }else{
        fiveSense = fiveSense + "제 "+ (i+1) + "의 아이도 무섭다고 그리오<br>"
    }
}

document.getElementById("para1").innerHTML = fiveSense;