require(["config"], function(){
	require(["jquery","load","cookie","zoom"], function($,load,cookie,zoom){
		$.cookie.json = true;
		var id = $.cookie("pro_id");
		var prod = null;
			$.ajax("/yigunet/mock/floors.json").done(function(responseData){
			var floors = responseData.data,
				floor = 0;
			floors.forEach(function(floor,index){
				
				floor = floor;
				var products = floor.products;
				products.forEach(function(product,index){
				if (id == product.id) {
					prod = products[index];
					$("#img").attr({"src":prod.img,"data-zoom-image":prod.img});
					$(".title").html(prod.title);
					$(".price_p").html(prod.price)
				}
				 
			})
			});
			
			//放大镜效果
			$("#img").elevateZoom({tint:true, tintColour:'#F90', tintOpacity:0.5});
			
			//点击保存cookie
			$(".messege .add_cart").on("click",function(){
						/* 将当前点击的"加入购物车"所在盒子商品数据保存到对象中 */
					var str_id = String(id);
					var str_price = String(prod.price)
					var product = {
						id :str_id,
						title : prod.title,
						price :'￥：' + str_price,
						img : prod.img,
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
			})
			
			
		});
		 function exist(id, products) {
		for (var i = 0; i < products.length; i++) {
			if (products[i].id == id)
				return i;
		}
		return -1;
	}
		
		
		//点击加入购物车弹出提示信息
		$(".messege_main .add_cart").on("click",function(){
			console.log("sdfssdfsdf")
			$(".messege_main .comform").show();
			setTimeout("$('.messege_main .comform').css('display','none')",1000)
		})
	});
	})
	
