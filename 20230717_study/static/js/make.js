$(function(){
    $("#send").click(function(){
        var row = $("#row").val();
        var col = $("#col").val();
        var out = "<table>";
        for(var i=1; i<=row; i++){
            out +="<tr>";
            for(var k=1; k<=col; k++){
                out +="<td></td>";
            }
            out +="</tr>"        
        }
        out +="</table>";
        opener.$("#box").html(out);
    });
});