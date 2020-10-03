
document.addEventListener("DOMContentLoaded",function(){
	//code thực hiện
	var quay=document.querySelector("#quay");
	var nut=document.querySelector(".nut");
	var menu=document.querySelector(".menutrai");
	var layer=document.querySelector(".den");
	var noidungto=document.querySelector(".noidungto");
	var trang=document.querySelector(".mautrang");
	nut.onclick=function(){
		//menu.classList.remove('vetrai');
		layer.classList.add('len');
		noidungto.classList.add('vephai');
	}
	quay.onclick=function(){
		menu.classList.remove('vetrai');
		layer.classList.add('len');
		//noidungto.classList.add('vephai');
		trang.classList.add('quay');
	}
	layer.onclick=function(){
		menu.classList.add('vetrai');
		layer.classList.remove('len');
		noidungto.classList.remove('vephai');
		trang.classList.remove('quay');
	}
},false);
