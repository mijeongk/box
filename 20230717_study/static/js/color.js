
$(function(){

    var bt_list=""; // 버튼 태그를 만들어서 담아줄 변수
    for(var i=1; i<=8; i++){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        bt_list += "";

        bt_list +="<button onclick='select(this)' style='background:rgb("+r+","+g+","+b+")'></button>"
        // elements 객체가 this다. 함수를 실행시켜라
    }

    $("#color").html(bt_list);
    
});

// 함수 - 귀속 되지 않은 독립적으로 기능을 수행하 수 있는 코드의 집합체
// 메서드 - 객체에 귀속 되어있는 객체의 기능을 수행하는 코드의 집합체 (자바는 객체에 모든 것이 귀속되어있음, 모두 메서드 사용)

// 매게 변수 필요한 함수 필요없는 함수 있음
// 매게 변수로 받아야? 변수가 있어야? 괄호 안에 있는 것 
// ogj 클릭한 버튼 들어있는 것임?

// open 함수를 통해 사로 창을 열어주면 새창은 자식이고, 새창을 열어준 창은 부모이다.
// 자식은 부모를 지칠할 때 opener라고 하고
// 부모는 자식을 window.open의 값을 저장해둔 변수로 사용한다.
// var ch= window.open(.....);
// ch가 부모창에서 사용할 수 있는 자식이다.

function select(obj){
    alert(obj);
    var color = $(obj).css("background");
    // alert(color);
    opener.$("table>tbody>tr>td").css("background",color);
}

// table 갯수 기입하여 만들어주고 색상을 클릭하여 table 색을 입혀준다.