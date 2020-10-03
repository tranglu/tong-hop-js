// truy xuất phần tử


document.addEventListener("DOMContentLoaded",function(){
	//code thực hiện
	var nut=document.getElementById('nut1');
	var khoi=document.getElementsByClassName('card')
	// goi sự kiện click
	nut.onclick=function(){
		khoi[0].classList.toggle('diphai');
	}
},false);