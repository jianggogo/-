require.config({
	baseUrl : "/",
	paths : {
		"jquery" : "lib/jquery/jquery-1.12.4.min",
		"load" : "js/loadHeaderFooter",
		"template" : "lib/arttemplate/template",
		"slider" : "lib/bxslider/jquery.bxslider"
	},
	shim : {
		"slider" : {
			deps  : ["jquery"]
		}
	}
});