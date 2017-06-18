$(document).ready(function(){
	$("#ec-quit").click(function(){
		$("#ec-wrap").addClass("falldown").delay(500).fadeTo(500,0,function(){
			$("#email-confirm").remove();
		});
	});
	$(window).click(function(event){
		if(event.target===$("#email-confirm"))
		{
			$("#ec-wrap").addClass("falldown").delay(500).fadeTo(500,0,function(){
				$("#email-confirm").remove();
			});
		}
	});
	$("#etext-contain button").click(function(){
		$("#etext-contain button").html('<img id="replace-checked" src="checked.png"/>');
		setTimeout(function(){
			$("#ec-wrap").addClass("falldown").delay(500).fadeTo(500,0,function(){
				$("#email-confirm").remove();
			});
		},2000);
	});
});