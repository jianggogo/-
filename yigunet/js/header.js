define(["jquery"], function($){
	//搜索框联想提示
	
	
                    $("#word").keyup (function(){
                        var _s = document.createElement("script");
                        _s.src = "https://suggest.taobao.com/sug?code=utf-8&q="+ this.value +"&callback=handle"
                        $("body")[0].appendChild(_s);
                        $("body")[0].removeChild(_s);
                        $(".info").css("display","block");
                    });
                   
                    function handle(data) {
                        var html = "";
                        data.result.forEach(function(curr){
                            html += `<div>${curr[0]}</div>`;
                        });
                     $(".info").html(html);
                   
                    $(".info").children("div").on("mouseenter",function() {
                        $(this).css("background","#cccccc");
                    });
                    $(".info").children("div").on("mouseleave",function() {
                        $(this).css("background","white");
                    });
                    $(".info").children("div").on("click",function() {
                        var text=$(this).html();
                        $("#word").val(text);
                        $(".info").css("display","none");
                    });
                 }
                    
                   
});