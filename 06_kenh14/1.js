
document.addEventListener("DOMContentLoaded",function(){
	//code thực hiện
	var trangthai='duoi200';
	var menu=document.querySelector('.menu');
	var search=document.querySelector('.search');
	var top=document.querySelector('.top');
	var noidungcongdong=document.querySelector('.noidungcongdong');
	var tintucphai=document.querySelector('.tintucphai');
	var trangthai_ndcongdong="duoi";
	console.log(tintucphai.offsetTop);
	window.addEventListener("scroll",function(){
	if(window.pageYOffset>100){
		if(trangthai=='duoi200'){
			
			menu.classList.add('fixed-top');
			menu.classList.add('bg-dark');
			trangthai='tren200';// dùng cái trạng thái để nó load 1 lần thôi, thỏa thì làm z, khỏi đi so sánh tọa độ miết
		}				
		}
		else if(window.pageYOffset<=100){
			if(trangthai=='tren200'){
				menu.classList.remove('bg-dark');
				menu.classList.remove('fixed-top');
				trangthai='duoi200';
			}		
		} //hiệu ứng của menu
	// hiệu ứng trượt của cột bên phải
	if(window.pageYOffset>tintucphai.offsetTop){
			if(trangthai_ndcongdong=='duoi'){
			noidungcongdong.classList.add('truot');
			trangthai_ndcongdong='tren';
			}
	}
			else if(window.pageYOffset<tintucphai.offsetTop){
				noidungcongdong.classList.remove('truot');
				trangthai_ndcongdong='duoi';
			}
						
		
	// if(truot.offsetTop>200){
	// 	truot.classList.remove('truot');
	// }
	})
},false);
