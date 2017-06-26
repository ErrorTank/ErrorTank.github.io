
$(document).ready(function(){
	var stuff=function(s,n,p){
		this.src=s;
		this.name=n;
		this.price=p;
	}
	var stuffList=[];
	if(sessionStorage.getItem("arr")!=null)
	{
		stuffList=JSON.parse(sessionStorage.getItem("arr"));
		for(var i=0;i<stuffList.length;i++){
			$('<div class="product"><div class="order"></div><div class="pic"><img src=""/></div><div class="quantity"></div><div class="pname"></div><i class="fa fa-times" aria-hidden="true"></i></div>').appendTo("#cart-info");
			$($(".product")[i]).find(".order").html(i+1);
			$($(".product")[i]).find("img").attr("src",stuffList[i]["src"]);
			$($(".product")[i]).find(".quantity").html(1);
			$($(".product")[i]).find(".pname").html(stuffList[i]["name"]);
			$($(".product")[i]).find("i").on("click",function(){
				var specify=$(this).parent().find("img").attr("src");
				var money;
				for(var i=0;i<stuffList.length;i++){
					if(stuffList[i]["src"]==specify){
						money=Number(stuffList[i]["price"].slice(0,stuffList[i]["price"].length-1));
						var t2=Number($("#quantity").html());
						t2--;
						$("#quantity").html(t2);
						stuffList.splice(i,1);
						break;
					}
				}
				price-=money;
				price=Number(price.toFixed(2));
				$("#total").html(price);
				$(this).parent().hide("fade",500,function(){
					$(this).remove();
					var sort=$(".product");
					for(var i=1;i<=sort.length;i++){
						$(sort[i-1]).find(".order").html(i);
					}
				});
			});
		}

	}
	var price=0;
	if(sessionStorage.getItem("price")!=null)
		price=sessionStorage.getItem("price");
	price=Number(price);
	$("#total").html(price);
	var quantity=0;
	if(sessionStorage.getItem("qty")!=null)
		quantity=sessionStorage.getItem("qty");
	quantity=Number(quantity);
	$("#quantity").html(quantity);
	var date=new Date();
	date=date.toDateString();
	$("#date").html(date);
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
		if($(this).scrollTop()>=120){
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
	$(".prev").on("click",function(){
		var t="";
		if($(this).parent().hasClass("atnew"))
			t=".newm";
		else if($(this).parent().hasClass("atbest"))
			t=".bestm";
		else if($(this).parent().hasClass("atsale"))
			t=".salem";
		var s=$(t).css("margin-left");
		var t1=s.slice(0,s.length-2);
		t1=Number(t1);
		var move="100px";
		if(t1<100 && t1>=0){
			move=t1;
			move=move+"px";
		}
		console.log(move);
		$(t).animate({marginLeft:"+="+move},100,function(){

		});
		return false;
	});
	$(".next").on("click",function(){
		var t="";
		if($(this).parent().hasClass("atnew"))
			t=".newm";
		else if($(this).parent().hasClass("atbest"))
			t=".bestm";
		else if($(this).parent().hasClass("atsale"))
			t=".salem";
		var s=$(t).css("margin-left");
		var t1=s.slice(0,s.length-2);
		t1=Number(t1);
		var move="100px";
		if(t1>=-200 && t1<-100){
			move=200+t1;
			move=move+"px";
		}
		$(t).animate({marginLeft:"-="+move},100,function(){
			
		});
		return false;
	});
		/*$("#cart-info .product i").on("click",function(){
			$(this).parent().hide("fade",500,function(){
				$(this).remove();
			});
		});*/
	$(".item .add-to-cart").on("click",function(){
		var t=$(this).parent().parent();
		var t1=Number($("#quantity").html());			
		t1++;
		$('<div class="loading"><div class="spin"></div><h1 class="l">Loading...</h1></div>').appendTo(t);
		var temp=new stuff($(t).find("img").attr("src"),$(t).find(".name").html(),$(t).parent().parent().parent().find(".price").html());
		stuffList.push(temp);
		var l=stuffList.length;
		$('<div class="product"><div class="order"></div><div class="pic"><img src=""/></div><div class="quantity"></div><div class="pname"></div><i class="fa fa-times" aria-hidden="true"></i></div>').appendTo("#cart-info");
		var pd=$("#cart-info .product").last();
		$(pd).find("i").click(function(){
			var specify=$(this).parent().find("img").attr("src");
			var money;
			for(var i=0;i<stuffList.length;i++){
				if(stuffList[i]["src"]==specify){
					money=Number(stuffList[i]["price"].slice(0,stuffList[i]["price"].length-1));
					var t2=Number($("#quantity").html());
					t2--;
					$("#quantity").html(t2);
					stuffList.splice(i,1);
					break;
				}
			}
			price-=money;
			price=Number(price.toFixed(2));
			$("#total").html(price);
			$(this).parent().hide("fade",500,function(){
				$(this).remove();
				var sort=$(".product");
				for(var i=1;i<=sort.length;i++){
					$(sort[i-1]).find(".order").html(i);
				}
			});
		});
		$(pd).find(".order").html(l);
		$(pd).find("img").attr("src",temp.src);
		$(pd).find(".quantity").html(1);
		$(pd).find(".pname").html(temp.name);
		price+=Number(temp.price.slice(0,temp.price.length-1));
		price=Number(price.toFixed(2));
		$("#total").html(price);
		var to1=setTimeout(function(){
			$(t).find(".loading").remove();
		},1000);
		var to2=setTimeout(function(){
			$("#quantity").html(t1);
			var info=$(t).find(".name").html();
			$("#pn").html(info);
			$("#notification").show("fade",300);
			$("#cart-img").css("color","#56f441");
			setTimeout(function(){
				$("#notification").hide("fade",300);
			},3500);
			setTimeout(function(){
				$("#cart-img").css("color","black");
			},3500);
		},1000);

		return false;
	});
	$(window).on("click",function(e){
		if(e.target.id=="cart-info-contain"){
			$("#cart-info-contain").hide("fade",500);
			$("#cart-info").hide("fade",500);
		}	
	});
	$("#keep").on("click",function(){
		$("#cart-info-contain").hide("fade",500);
		$("#cart-info").hide("fade",500);
	});
	function confirm(){
		$("#noti-contain #yes").on("click",function(){
			$("#loading-contain").css("display","block");
			setTimeout(function(){
				$("#loading-contain").css("display","block");
				location.href="purchase.html";
			},500);
		});
		$("#noti-contain #no").on("click",function(){
			$("#noti-contain").hide("fade",500);
		});
	}
	confirm();
	function purchaseConfirm(){
		$("#pur").on("click",function(){
			$("#noti-contain").show("fade",500);
		});
	}
	purchaseConfirm();
	function openCart(){
		$("#cart-img").on("click",function(){
			$("#cart-info-contain").show("fade",500,function(){
				$("#cart-info").css("display","block");
			});
		});
	}
	openCart();
	$("#cart-info").scroll(function(){
		var t=$("#cart-info").scrollTop()+200;
		t=String(t)+"px";
		$("#right-wrap").css("top",t);
	});
	function backToTop(){
		$("#back-top").on("click",function(){
			$("html,body").animate({scrollTop:0}, 500);
			return false;
		});
		$(window).scroll(function(){
			if($(this).scrollTop()>=150){
				$("#back-top").show("fade",100);
			}
			else
				$("#back-top").hide("fade",100);
		});
	}
	backToTop();
	$(".item .buy").on("click",function(){
		var t=$(this).parent().parent();
		$('<div class="loading"><div class="spin"></div><h1 class="l">Loading...</h1></div>').appendTo(t);
		var to1=setTimeout(function(){
			$(t).find(".loading").remove();
			location.href="purchase.html";
		},1000);
	});
	window.onbeforeunload=function(){
		var sendPrice=sessionStorage.setItem("price",price);
		var sendQty=sessionStorage.setItem("qty",$("#quantity").html());
		var sendArr=JSON.stringify(stuffList);
		sessionStorage.setItem("arr",sendArr);
		return onbeforeunload();
	}
});