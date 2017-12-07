require.config({
	baseUrl : "/yigunet/",
	paths : {
		"jquery" : "lib/jquery/jquery-1.12.4.min",
		"load" : "js/loadHeaderFooter",
		"template" : "lib/arttemplate/template",
		"slider" : "lib/bxslider/jquery.bxslider",
		"cookie":"lib/jquery_plugins/jquery.cookie",
		"zoom":"lib/jquery_plugins/jquery.elevateZoom-3.0.8.min"
	},
	shim : {
		"slider" : {
			deps  : ["jquery"]
		},
		"zoom" :{
			deps : ["jquery"]
		}
	}
});