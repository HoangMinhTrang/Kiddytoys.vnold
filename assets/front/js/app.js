$(document).ready(function(){
	$("#fakeLoader").fakeLoader({ 
	    timeToHide:800, 
	    zIndex:9999, 
	    spinner:"spinner2", 
	    bgColor:"#fff" 
    });
    $(".flbackdrop").remove();
	$('#header #hnav-group ul li').hover(function() {
	  $(this).children('.dropdown-menu').stop(true, true).delay(200).slideDown('fast');
	}, function() {
	  $(this).children('.dropdown-menu').stop(true, true).delay(200).slideUp('fast');
	});
});