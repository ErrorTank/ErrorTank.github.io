$(document).ready(function(){
	function playBGMusic(bool){
		var temp=$("#bgaudio");
		temp[0].volume=0.5;
		temp[0].loop=true;
		if(bool){
			temp[0].play();
		}
		else{
			temp[0].pause();
		}
	}
	function destroyCard(bool,count){
		switch(count){
			case 1:
			{
				var temp=$("#first-blood")[0];
				temp.play();
				var to=setTimeout(function(){
					temp.load();
					clearTimeout(to);
				},2500);
				break;
			}
			case 2:
			{
				var temp=$("#killing-spree")[0];
				temp.play();
				var to=setTimeout(function(){
					temp.load();
					clearTimeout(to);
				},2500);
				break;
			}
			case 3:
			{
				var temp=$("#unstoppable")[0];
				temp.play();
				var to=setTimeout(function(){
					temp.load();
					clearTimeout(to);
				},2500);
				break;
			}
			case 4:
			{
				var temp=$("#rampage")[0];
				temp.play();
				var to=setTimeout(function(){
					temp.load();
					clearTimeout(to);
				},2500);
				break;
			}
			case 5:
			{
				var temp=$("#dominate")[0];
				temp.play();
				var to=setTimeout(function(){
					temp.load();
					clearTimeout(to);
				},2500);
				break;
			}
			case 6:
			{
				var temp=$("#god-like")[0];
				temp.play();
				var to=setTimeout(function(){
					temp.load();
					clearTimeout(to);
				},2500);
				break;
			}
			case 7:
			{
				var temp=$("#legend")[0];
				temp.play();
				var to=setTimeout(function(){
					temp.load();
					clearTimeout(to);
				},2500);
				break;
			}
			case 8:
			{
				var temp=$("#legend")[0];
				temp.play();
				var to=setTimeout(function(){
					temp.load();
					clearTimeout(to);
				},2500);
				break;
			}
			case 9:
			{
				var temp=$("#legend")[0];
				temp.play();
				var to=setTimeout(function(){
					temp.load();
					clearTimeout(to);
				},2500);
				break;
			}
		}
	}
	function wrongAnswer(bool){
		var temp=$("#waudio");
		temp[0].play();
		var to=setTimeout(function(){
			temp[0].load();
			clearTimeout(to);
		},1700);
	}
	var cardArr=["img/ahri.jpg","img/hec.jpg","img/j4.jpg","img/kz.jpg","img/lulu.jpg","img/noc.jpg","img/rek.jpg","img/thresh.jpg","img/viktor.jpg"];
	cardArr=cardArr.concat(cardArr);
	function shuffle(){
		var t1=cardArr.length,t2,rand;
		while(t1!==0)
		{
			rand=Math.floor(Math.random()*t1);
			t1--;
			temp=cardArr[t1];
			cardArr[t1]=cardArr[rand];
			cardArr[rand]=temp;
		}
	}
	shuffle();
	function fillCard(){
		var l=cardArr.length;
		for(var i=0;i<l;i++){
			$($(".card")[i]).find(".front>img").attr("src",cardArr[i]);
		}
	}
	fillCard();
	function pickGameMode(){
		var order=1;
		function onLoad(){
						$("#loading>ul>li:nth-of-type("+order+")").css({"background-color":"#1a1a1a","transform":"scale(1.1) translateY(-20px)"});
						var to=setTimeout(function(){
							$("#loading>ul>li:nth-of-type("+order+")").css({"background-color":"orangered","transform":"scale(1) translateY(0px)"});
							order++;
						if(order===4)
							order=1;
						onLoad();
						},200);
					}
		function toggleMode(choosen,faded){

			var bgColor,move;
			if($(choosen).attr("id")==="easy")
			{
				bgColor="#064e72";
				move="145px";
			}
			else
			{
				bgColor="#680707";
				move="165px";
			}
			$(choosen).off("click");
			$(choosen).css("pointer-events","none");
			$(choosen).css("background-color",bgColor);
			$(choosen).css("color","white");
			$(choosen).css({"box-shadow":"0 5px 10px 2px black","transform":"scale(1.1)"});
			$(faded).css("pointer-events","none");
			$(faded).off("click");
			$(choosen).animate({left:move},{duration:300,queue:false,easing:"linear",complete:function(){
				$("#loading").delay(600).show("fade",200,function(){
					onLoad();
					var to=setTimeout(function(){
						$("#greet").hide("fade",500);
						playBGMusic(true);
						clearTimeout(to);
						gameStart($(choosen).attr("id"));
					},2000)
				});
			}});
			$(faded).animate({top:"260px"},{duration:200,queue:false,easing:"linear"}).hide("fade",300);
			$(choosen).html('<img src="img/checked.png"/>');
		};
		var buttonMode=$("#pick>div");
		$(buttonMode).on("click",function(){
			if($(this).attr("id")==="easy")
			{
				toggleMode($("#easy"),$("#hard"));
			}
			else
			{
				toggleMode($("#hard"),$("#easy"));
			}
		});
	}
	pickGameMode();
	var rightCount=0;
	var remain=9;
	function clickCard(){
		var one,two;
		var clickCount=0;
		$(".card").on("click",function(){
			clickCount++;
			if(clickCount===1){
				one=$(this);
			}
			else
				two=$(this);
			var t1=$(this).find(".front");
			var t2=$(this).find(".back");
			$(this).addClass("up");
			$(this).off("click");
			$(this).find(".front").css("box-shadow","0px 0px 10px 3px white");
			$(t1).css("transform","rotateY(-360deg)");
			$(t2).css("transform","rotateY(-180deg)");
			if(clickCount===2){
				$(".card").off("click");
				clickCount=0;
				var to=setTimeout(function(){
					if($(one).find(".front>img").attr("src")===$(two).find(".front>img").attr("src")){
						remain--;
						rightCount++;
						destroyCard(true,rightCount);
						$(one).find(".front").hide("explode",500,function(){
							$(this).parent().find(".back").css("display","none");
						});
						$(two).find(".front").hide("explode",500,function(){
							$(this).parent().find(".back").css("display","none");
						});
						$(one).css("pointer-events","none");
						$(two).css("pointer-events","none");
					}
					else{
						wrongAnswer(true);
						rightCount=0;
						$(".up .front").css("transform","rotateY(-180deg)");
						$(".up .back").css("transform","rotateY(0)");
						$(".up").removeClass("up");
						$(this).find(".front").css("box-shadow","");
					}
					if(remain==0){
						Win();
					}
					clickCard();
				},1200);
			}
		});
	}
	clickCard();
	function gameOverNoti(){
		$(".rq-wrap>div").on("click",function(){
			if($(this).hasClass('replay')){
				location.reload();
			}
			else if($(this).hasClass('quit')){
				window.close();
			}
		});
	}
	gameOverNoti();
	var it;
	function gameStart(gameMode){
		var time;
		var p=$("progress");
		$(p).css("display","block");
		if(gameMode==="easy"){
			time=100;
		}
		else{
			time=30;
		}
		$(p).attr("max",time);
		$(p).attr("value",time);
		it=setInterval(function(){
			time--;
			$(p).attr("value",time);
			if(time===0){
				Lose();
			}
		},1000);
	}
	function Win(){
		clearInterval(it);
		playBGMusic(false);
		$(".noti-window-wrap").show("fade",500,function(){
			$("#win-window").show("fade",300);
			var temp=$("#win");
			temp[0].play();
		});
	}
	function Lose(){
		clearInterval(it);
		playBGMusic(false);
		$(".noti-window-wrap").show("fade",500,function(){
			$("#lose-window").show("fade",300);
			var temp=$("#lose");
			temp[0].play();
		});
	}
});