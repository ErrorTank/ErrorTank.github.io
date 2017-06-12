function display(button){
	var x=document.getElementById("eval-content");
	var t=x.innerHTML;
	t+=button.innerHTML;
	x.innerHTML=t;
}