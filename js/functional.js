
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
	var product=function(x,y,z){
		var id=x;
		var op=y;
		var p=z;
		this.idValue= function(){
			return id;
		}
		this.oldPrice=function(){
			return op;
		}
		this.price=function(){
			return p;
		}
	}
	var productList=[];
	function setData(){
		var nier=new product("nier","49.99$","30$");
		productList.push(nier);
		var bf1=new product("bf1","54.99$","39.99$");
		productList.push(bf1);
		var gprokb=new product("gpro-kb","120$","98.99$");
		productList.push(gprokb);
		var g502=new product("g502","80$","59.99$");
		productList.push(g502);
		var rival700=new product("rival700","82.99$","70$");
		productList.push(rival700);
		var csgo=new product("csgo","15.99$","8.99$");
		productList.push(csgo);	
		var gta5=new product("gta5","49.99$","29.99$");
		productList.push(gta5);
		var revolver=new product("revolver","84.99$","64.99$");
		productList.push(revolver);
		var ge72vr=new product("ge72vr","1500$","1349.99$");
		productList.push(ge72vr);
		var payday2=new product("payday2","30$","19.99$");
		productList.push(payday2);
		var k63=new product("k63","64.99$","49.99$");
		productList.push(k63);
		var titanfall2=new product("titanfall2","59.99$","44.99$");
		productList.push(titanfall2);
	}
	setData();
	$("#wrap-slide").on("mouseenter",tempStop).on("mouseleave",slide);
	$(".item").on("mouseenter",function(){
		var t="";
		if($(this).parent().hasClass("newm"))
			t="#logo1";
		else if($(this).parent().hasClass("bestm"))
			t="#logo2";
		else if($(this).parent().hasClass("salem"))
			t="#logo3";

		for(var i=0;i<productList.length;i++){
			if(productList[i].idValue()==$(this).find(".name").attr("id")){
				$(t).parent().parent().find(".old-price").html(productList[i].oldPrice());
				$(t).parent().parent().find(".price").html(productList[i].price());
				break;
			}
		}
		if($(this).hasClass("dice")){
			$(t).attr("src","dice.png");
		}
		else if($(this).hasClass("pg")){
			$(t).attr("src","pg.png");
		}
		else if($(this).hasClass("logitech")){
			$(t).attr("src","logitech.png");
		}
		else if($(this).hasClass("ss")){
			$(t).attr("src","ss.png");
		}
		else if($(this).hasClass("valve")){
			$(t).attr("src","valve.png");
		}
		else if($(this).hasClass("rs")){
			$(t).attr("src","rs.png");
		}
		else if($(this).hasClass("hx")){
			$(t).attr("src","hx.png");
		}
		else if($(this).hasClass("msi")){
			$(t).attr("src","msi.png");
		}
		else if($(this).hasClass("ok")){
			$(t).attr("src","ok.png");
		}
		else if($(this).hasClass("cs")){
			$(t).attr("src","cs.png");
		}
		else if($(this).hasClass("ea")){
			$(t).attr("src","ea.png");
		}
		$(t).parent().parent().css("display","block");
	});
	$(".item").mouseleave(function(){
		var t="";
		if($(this).parent().hasClass("newm"))
			t="#logo1";
		else if($(this).parent().hasClass("bestm"))
			t="#logo2";
		else if($(this).parent().hasClass("salem"))
			t="#logo3";
		$(t).parent().parent().css("display","none");
	});
	$(".next").on("click",function(){
		var t="";
		if($(this).parent().hasClass("atnew"))
			t=".atnew";
		else if($(this).parent().hasClass("atbest"))
			t=".atbest";
		else if($(this).parent().hasClass("atsale"))
			t=".atsale";
		$(t).animate({marginLeft:"+=50px"},300,function(){
			alert("me");
			var s=$(this).css("margin-left");
			var t1=s.slice(0,s.length-2);
			t1=Number(t1);

		});
	});
	$(".prev").on("click",function(){
		
	});
});