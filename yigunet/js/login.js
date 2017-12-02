// 生成验证码 注意在用jquery的时候 jquery对象和dom对象方法不能混用
		function yanZm(){
				$.ajax({
						type:"get",
						url: "http://route.showapi.com/932-2" ,
						data:{
							showapi_appid:"49960",
							showapi_sign:"093a944db44b431aa6640bf0f31bca4e"
						},
						dataType:"json",
						success:function(data){
							var img = data.showapi_res_body;
							$("#gen_code").attr("src",img.image);
							$("#gen_code").attr("sid",img.sid) ;
						}
				});
			}
	
			yanZm();
			$("#gen_code").on("click",yanZm);
			$("#input_code").on("blur",function(){
				$.ajax({
					type:"get",
						url: "http://route.showapi.com/932-1" ,
						data:{
							showapi_appid:"49960",
							showapi_sign:"093a944db44b431aa6640bf0f31bca4e",
							checkcode : $("#input_code").val(),
							sid:$("#gen_code").attr("sid")
						},
						
						dataType:"json",
						success:function(data){
							if (data.showapi_res_body.valid) {
								$("#pandu").text("正确");
							}else{
								$("#pandu").text("验证错误");
								}
								
						}
						
				});
			});
			
			
		