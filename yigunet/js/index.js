require(["config"], function(){
	require(["jquery","template","load","slider","cookie"], function($,template){
			
		//banner上层级菜单
	      
	      $(document).ready(function(){
	      	$(".li1").mouseenter(function(){
	      		$(".frout").show();
	      	}).mouseleave(function(){
	      		$(".frout").hide();
	      	});
	      		$(".li2").mouseenter(function(){
	      		$(".meat").show();
	      	}).mouseleave(function(){
	      		$(".meat").hide();
	      	});
	      	$(".li3").mouseenter(function(){
	      		$(".oil").show();
	      	}).mouseleave(function(){
	      		$(".oil").hide();
	      	});
	      	
	      	$(".li4").mouseenter(function(){
	      		$(".wind").show();
	      	}).mouseleave(function(){
	      		$(".wind").hide();
	      	});
	      	$(".li5").mouseenter(function(){
	      		$(".place").show();
	      	}).mouseleave(function(){
	      		$(".place").hide();
	      	});
	      		$(".li6").mouseenter(function(){
	      		$(".gift").show();
	      	}).mouseleave(function(){
	      		$(".gift").hide();
	      	});
	      		$(".li7").mouseenter(function(){
	      		$(".life").show();
	      	}).mouseleave(function(){
	      		$(".life").hide();
	      	})
	      });
	    
	
	  	// 渲染楼层模板
		$.ajax("/yigunet/mock/floors.json").done(function(responseData){
			var html = template("floor_template", {floors : responseData.data});
			$(".main").html(html);
			
		});
	    	// 绑定楼层事件，事件委派
		$(".main").on("mouseenter", ".img,.title", function(){
			$(this).stop().animate({"padding-left":20},400);
		}).on("mouseleave", ".img,.title", function(){
			$(this).stop().animate({"padding-left": 0},400)
		});
		
	    	//绑定点击获取商品id信息
	    $(".main").on("click",".img,.title",function(){
	    	var id = $(this).parent().children("input").val();
	    	$.cookie("pro_id",id);
	    	location = "/yigunet/html/product_messege.html"
	    	
	    })
	    //绑定点击 。 获取商品信息存入cookie
	    $(".main").on("click",".add_cart",function(){
		    		/* 将当前点击的"加入购物车"所在盒子商品数据保存到对象中 */
			// 获取"加入购物车"的父节点
			var _p = $(this).parent();
			var product = {
				id : _p.children(".id").val(),
				title : _p.children(".title").text(),
				price : _p.children(".price").text(),
				img : _p.find("img").attr("src"),
				amount : 1
			};
	
			/* cookie操作 */
			$.cookie.json = true;
			// 将 cookie 中所有购物车中的商品读取出来
			var _products = $.cookie("products") || [];
			// 当前商品是否已被选购过
			var index = exist(product.id, _products);
			if (index !== -1) { // 已选购，数量自增
				_products[index].amount++;
			} else { // 未选购，将当前选购商品对象添加到数组中
				_products.push(product);
			}
			// 将数组重新保存回 cookie
			$.cookie("products", _products, {expires:7, path:"/"});
			
			//提示加入购物车
			$("#success_cart").show();
			setTimeout("$('#success_cart').css('display','none')",1000)
	   });
	   
	   function exist(id, products) {
		for (var i = 0; i < products.length; i++) {
			if (products[i].id == id)
				return i;
		}
		return -1;
	}
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
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
	    
	    
	    	//轮播
		$(document).ready(function(){
		
	          $('.slider1').bxSlider({
	            slideWidth:1400, 
				auto:true,
				autoHover:true
	            //slideMargin: 10
	          });
	        });
	        
	        
	   
	});
});