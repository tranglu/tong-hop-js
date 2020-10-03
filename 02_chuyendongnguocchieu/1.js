
document.addEventListener("DOMContentLoaded",function(){
	//code thực hiện
	var nut=document.getElementById("nut");
	//var khoi=document.getElementById("kcd");
	var khoi=document.getElementsByClassName("card");
	var trangthai="lan1";
	nut.onclick=function(){
		if(trangthai=="lan1"){
			khoi[0].classList.add('diphai');
			khoi[0].classList.remove('ditrai');
			khoi[0].classList.remove('khongchuyendong');
			trangthai="lan2";
		}
		else{
			khoi[0].classList.add('ditrai');
			khoi[0].classList.remove('diphai');
			trangthai="lan1";
		}
		
	}
},false);
