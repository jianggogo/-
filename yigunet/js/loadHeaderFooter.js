// 定义模块，加载头部尾部
define(["jquery"], function($){
	$.ajax("/yigunet/html/include/header.html").done(function(data){
		// 将加载的头部静态资源添加到 .header 盒子中
		// $(data).appendTo(".header");
		$(".header").html(data);
	}).done(function(){//加载完之后执行
		  	//滚动吸顶
	  	$(document).scroll(function(){
	  		var _top = $(document).scrollTop();
	  		if (_top>=100) {
	  			$(".header_2").css({"position":"fixed",
	  									"top":0,
	  									"left":0,
	  									"z-index":9999,
	  									"background-color": "rgba(139,140,144,.8)"})}
	  		else{
	  			$(".header_2").css("position","static")
	  		}
	  		
	  	});
		
		//按键弹起联想
			$("#word").keyup (function(){
	                        var _s = document.createElement("script");
	                        _s.src = "https://suggest.taobao.com/sug?code=utf-8&q="+ $(this).val() +"&callback=handle"
	                        $("body")[0].appendChild(_s);
	                        $("body")[0].removeChild(_s);
	                        $(".info").css("display","block");
	                        });
	                        
	           //点击进入购物车页面
	           $(".header_2 .cart").on("click",function(){
	          		location = "/yigunet/html/cart.html"
	           })
	                        
	           //读取cookie 将 登录  换成  欢迎你
	      var name = $.cookie();
	      if(name != null){
	      	name = JSON.parse(name.login_user).username;
	      	$("#welcome").text('欢迎你 ：'+name ).attr("href","#");
	      	$("#zhuCe").text("退出登录").attr("href","/yigunet/html/login.html")
	      }
		
	});
					
		$(".footer").load("/yigunet/html/include/footer.html");
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
                };