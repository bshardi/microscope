Handlebars.registerHelper("pluralize", function(n, thing){
	//simple pluralizer, notice just adds s so be careful
	if (n === 1){
		return "1 " + thing;
	} else {
		return n + " " + thing + "s";
	}
});