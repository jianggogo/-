// 定义模块，加载头部尾部
define(["jquery"], function($){
	$(".header").load("/html/include/header.html");
	$(".footer").load("/html/include/footer.html");
});