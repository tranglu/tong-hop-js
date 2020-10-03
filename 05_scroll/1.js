
document.addEventListener("DOMContentLoaded",function(){
	//code thực hiện
	var trangthai='duoi200';
	var menu=document.querySelector('.to');
	window.addEventListener("scroll",function(){

	console.log(window.pageYOffset);
	if(window.pageYOffset>100){
		if(trangthai=='duoi200'){
			menu.classList.remove("to");
			menu.classList.add('fixed-top');
			trangthai='tren200';// dùng cái trạng thái để nó load 1 lần thôi, thỏa thì làm z, khỏi đi so sánh tọa độ miết
		}				
		}
		else if(window.pageYOffset<=100){
			if(trangthai=='tren200'){
				menu.classList.add("to");
				menu.classList.remove('fixed-top');
				trangthai='duoi200';
			}		
		}
	
	})
},false);
