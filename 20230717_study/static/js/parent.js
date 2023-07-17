// let child=""; // 전역으로 사용해야 다른 함수에서도 사용 가능.

$(function(){
    $("#open_child").click(function(){
        if($("#name").val() == ''){ // input 태그에 이름을 입력 안했다면
            alert("이름을 먼저 입력하세요.");
            $("#name").focus();
            return;
        }
        child = window.open("child.html","","width=500,height=500,top=100,left=300"); 
        
        // child.document.getElementById("#input_name").innerHTML("aa");
        
    });
    $("#child_send").click(function(){
        $(child.document).find("#input_name").html($("#name").val());
    });
});

// open 3가지 넣는다.
// 기입 내용
// 1. 1번째: 새창 열엇을 때 어떤 페이지 열 것인지 주소 적기
// 2. 2번째 ? 대상(어디에 띄어줄 것인가? 기존 페이지에? or 같은 브라우저 새창? 완전히 다른 새창?) 새 창으로 띄움 
// 현재창으로는 "_self" 기입
// 3. 3번째 부분에 기입할 경우 완전히 새로운 창으로 뜸
// 3번째width=너비, height=높이 지정. 기본 띄우는 위치는 왼쪽상단. 좌표 정하려면 모니터 기준으로 top. left 기입