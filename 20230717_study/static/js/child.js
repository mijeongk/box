

$(function(){ // 현재 html의 페이지가 로드되면 실행
    var name = $(opener.document).find("#name").val(); // 부모창의 input값 가져오기 opener라고 정해져있음
    $("#input_name").html(name);

    $("#parent_send").click(function(){
        var detail = $("#detail").val(); // input태그값 가져오기
        opener.$("#parent_detail").html(detail);
    });
});