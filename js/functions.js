$(document).ready(function(){

	// Tabs
	$(".tab-content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab-content:first").show(); //Show first tab content
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab-content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("name"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
    
});
