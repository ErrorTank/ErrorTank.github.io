console.log("okay");
var Question= function(){
	var ques;
	var ans=[];
	var correct;
	this.setQues=function(x){
		ques=x;
	};
	this.setAns=function(x,y,z,t){
		ans=[x,y,z,t];
	};
	this.setTrue=function(x){
		correct=ans[x-1];
	};
	this.getQues=function(){
		return ques;
	};
	this.getAns=function(){
		return ans;
	};
	this.getTrue=function(){
		return correct;
	};
};
var quesArr=[];
for(var i=0;i<5;i++)
{
	quesArr[i]=new Question();
}
quesArr[0].setQues("How many legs that human have?");
quesArr[0].setAns(1,2,3,4);
quesArr[0].setTrue(2);
quesArr[1].setQues("What is Quyen's father Name?");
quesArr[1].setAns("Tho","Quang","Toan","Ha");
quesArr[1].setTrue(1);
quesArr[2].setQues("GT73VR is the name ofwhich produce laptop's company?");
quesArr[2].setAns("MSI","Asus","Acer","DY");
quesArr[2].setTrue(1);
quesArr[3].setQues("What is your name?");
quesArr[3].setAns("unknow","Tho","Quang","Quyen");
quesArr[3].setTrue(4);
quesArr[4].setQues("Are you nuts?");
quesArr[4].setAns("No","Yes","Dunno","a little bit");
quesArr[4].setTrue(3);
var scoreInGame=0;
var inGameQuesArr=[];
var inGameAnsArr=[];
var correctAns=[];
var dt;
var turn=0;
for(var i=0;i<5;i++)
{
	var temp;
	do{
		temp=quesArr[Math.floor(Math.random() * 5)];
	}while(inGameQuesArr.indexOf(temp.getQues())!=-1);
	inGameQuesArr[i]=temp.getQues();
	inGameAnsArr[i]=temp.getAns();
	correctAns[i]=temp.getTrue();
}
function ready(){
	confirm("Are you ready??!");
}
function backward(){
	clearInterval(dt);
	turn--;
	Process();
}
function forward(){
	clearInterval(dt);
	turn++;
	Process();
}
function count(countDown){
	dt=setInterval(function(){
		if(countDown==0)
		{
			clearInterval(dt);
			turn++;
			Process();
		}
		document.getElementById("time").innerHTML=countDown--;
	},1000);
}
function buttonSet(bool){
	var buttonEdit=document.getElementsByTagName("BUTTON");
	for(var i=0;i<buttonEdit.length;i++)
	{
		buttonEdit[i].disabled=bool;
		if(bool===true)
			buttonEdit[i].style.cursor="not-allowed";
		else
			buttonEdit[i].style.cursor="pointer";
	}
}
function choose(x){
	buttonSet(true);
	clearInterval(dt);
	var newEle=document.createElement("img");
	var ansValue=x.querySelector("h1").innerHTML;
	if(ansValue==correctAns[turn])
	{
		scoreInGame++;
		document.getElementById("score").innerHTML=scoreInGame;
		newEle.setAttribute("src","checked.png");
	}
	else
		newEle.setAttribute("src","unchecked.png");
	x.appendChild(newEle);
	turn++;
	setTimeout(Process,3000);
}
function loading(){
	var x=document.getElementById("damn");
	x.className="empty";
}
function setLoad(){
	var x=document.getElementById("damn");
	x.className="full";
}
function delIMG(){
	var delImgArr=document.getElementById("ans").getElementsByTagName("BUTTON");
	for(var i=0;i<delImgArr.length;i++)
	{
		if(delImgArr[i].lastChild.nodeName=="IMG")
			delImgArr[i].removeChild(delImgArr[i].querySelector("img"));
	}
}
function Process(){
			buttonSet(false);
			delIMG();
			var u=0;
			var a1=document.getElementById("ans1");
			var a2=document.getElementById("ans2");
			var a3=document.getElementById("ans3");
			var a4=document.getElementById("ans4");
			var disQues=document.getElementById("quiz");
			setLoad();
			setTimeout(loading,1000);
			if(turn==5)
			{
				sessionStorage.setItem("scoreCur",scoreInGame);
				location.href="ask.html";
			}
			else
			{
				disQues.innerHTML=inGameQuesArr[turn];
				console.log(disQues);
				var tempArr=[a1,a2,a3,a4];
				tempArr.forEach(function(x){
					x.innerHTML=inGameAnsArr[turn][u++];
				});
				count(9);
			}
		
}

	Process();	
