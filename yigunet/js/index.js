require(["config"], function(){
	require(["jquery","template","load","slider"], function($,template){
		//轮播
		$(document).ready(function(){
	          $('.slider1').bxSlider({
	            slideWidth:1400, 
				auto:true,
				autoHover:true
	            //slideMargin: 10
	          });
	        });
	      
	      $(document).ready(function(){
	      	$(".li1").mouseenter(function(){
	      		$(".frout").show();
	      	}).mouseleave(function(){
	      		$(".frout").hide();
	      	})
	      });
	      $(document).ready(function(){
	      	$(".li2").mouseenter(function(){
	      		$(".meat").show();
	      	}).mouseleave(function(){
	      		$(".meat").hide();
	      	})
	      });
	      $(document).ready(function(){
	      	$(".li3").mouseenter(function(){
	      		$(".oil").show();
	      	}).mouseleave(function(){
	      		$(".oil").hide();
	      	})
	      });
	      $(document).ready(function(){
	      	$(".li4").mouseenter(function(){
	      		$(".wind").show();
	      	}).mouseleave(function(){
	      		$(".wind").hide();
	      	})
	      });
	      $(document).ready(function(){
	      	$(".li5").mouseenter(function(){
	      		$(".place").show();
	      	}).mouseleave(function(){
	      		$(".place").hide();
	      	})
	      });
	      $(document).ready(function(){
	      	$(".li6").mouseenter(function(){
	      		$(".gift").show();
	      	}).mouseleave(function(){
	      		$(".gift").hide();
	      	})
	      });
	      $(document).ready(function(){
	      	$(".li7").mouseenter(function(){
	      		$(".life").show();
	      	}).mouseleave(function(){
	      		$(".life").hide();
	      	})
	      });
	  	//滚动吸顶
	  	$(document).scroll(function(){
	  		var _top = $(document).scrollTop();
	  		if (_top>=100) {
	  			$(".header_2").css({"position":"fixed",
	  									"top":0,
	  									"left":0,
	  									"z-index":9999})}
	  		else{
	  			$(".header_2").css("position","static")
	  		}
	  		
	  	});
	  	// 渲染楼层模板
		$.ajax("/mock/floors.json").done(function(responseData){
			var html = template("floor_template", {floors : responseData.data});
			$(".main").html(html);
			
		});
	    	// 绑定楼层事件，事件委派
		$(".main").on("mouseenter", ".product", function(){
			console.log("hahah")
			$(this).stop().animate({"padding-left":20},400)
		}).on("mouseleave", ".product", function(){
			$(this).stop().animate({"padding-left": 0},400)
		});
	    
	    //banner下面一层 划过图片图片运动
	   
	    
	    $(".silie_1").on("mouseenter",function(){
	    	$(this).stop().animate({"left":10},400)
	    }).on("mouseleave",function(){
	    	$(this).stop().animate({"left":0},400)}
	    );
	     $(".silie_2").on("mouseenter",function(){
	    	$(this).stop().animate({"left":320},400)
	    }).on("mouseleave",function(){
	    	$(this).stop().animate({"left":310},400)}
	    );
	     $(".silie_3").on("mouseenter",function(){
	    	$(this).stop().animate({"left":630},400)
	    }).on("mouseleave",function(){
	    	$(this).stop().animate({"left":620},400)}
	    );
	     $(".silie_4").on("mouseenter",function(){
	    	$(this).stop().animate({"left":940},400)
	    }).on("mouseleave",function(){
	    	$(this).stop().animate({"left":930},400)}
	    );
	    
	   
	});
});