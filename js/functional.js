
$(document).ready(function(){
	$("#ec-quit").click(function(){
		$("#ec-wrap").addClass("falldown").delay(500).fadeTo(500,0,function(){
			$("#email-confirm").remove();
		});
	});
	$(window).click(function(event){
		if(event.target.id=='email-confirm')
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
	$(window).scroll(function(){
		if($(document).scrollTop()>=120){
			$("#fixed-menu").css("position","fixed");
			$("#fixed-menu").css("top","0");
		}
		else{
			$("#fixed-menu").css("position","absolute");
			$("#fixed-menu").css("top","130px");
		}
	});
	var c=1;
	var iv;
	var q=4;
	var stime=3000;
	var ctime=500;
	function slide(){
		iv=setInterval(function(){
			$("#slide-show #wrap-slide").animate({marginLeft:"-=100vw"},ctime,function(){
				c++;
				if(c==q)
				{
					c=1;
					$("#slide-show #wrap-slide").css("margin-left","-100vw");
				}
			});
		},stime);
	}
	slide();
	function tempStop(){
		clearInterval(iv);
	}
	$("#right").on("click",function(){
		tempStop();
		$("#slide-show #wrap-slide").animate({marginLeft:"-=100vw"},ctime,function(){
			c++;
			if(c==q)
			{
				c=1;
				$("#slide-show #wrap-slide").css("margin-left","-100vw");
			}
		});

	});
	$("#left").on("click",function(){
		tempStop();
		$("#slide-show #wrap-slide").animate({marginLeft:"+=100vw"},ctime,function(){
			c--;
			if(c==0)
			{
				c=3;
				$("#slide-show #wrap-slide").css("margin-left","-300vw");
			}
		});
		
	});
	$("#slide-show").on("mouseenter",tempStop).on("mouseleave",slide);
});