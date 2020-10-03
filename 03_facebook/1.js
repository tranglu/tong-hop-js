
// document.addEventListener("DOMContentLoaded",function(){
// 	//code thực hiện
// 	var nut=document.getElementsByClassName("tamgiac");
// 	var list=document.getElementsByClassName("list");
// 	var trangthai="lan1";
// 	for (var i = 0; i < nut.length; i++) {
		
// 		nut[i].onclick=function(){
// 			if(trangthai=="lan1"){
// 				//cho tất cả màu đen
// 			for (var k = 0; k <nut.length; k++) {
// 				nut[k].classList.remove('tamgiactrang');
// 				list[k].classList.remove('xuathien');
// 			}
// 			//cho icon click màu trắng
// 			this.classList.add('tamgiactrang');
// 			// lấy data cái nội dung cần hiện, yêu cầuđặt data-nut = id của nội dung cần hiển thị
// 			var ID=this.getAttribute('data-nut');
// 			var thongbao=document.getElementById(ID);
// 			thongbao.classList.add('xuathien');
// 			trangthai="lan2";
// 		}
// 		else{
// 			this.classList.remove('tamgiactrang');
// 			var ID=this.getAttribute('data-nut');
// 			var thongbao=document.getElementById(ID);
// 			thongbao.classList.remove('xuathien');
// 			trangthai="lan1";
// 		}
// 		}
// 	}
// },false);// cách 1
document.addEventListener("DOMContentLoaded",function(){
	//code thực hiện
	var nut=document.getElementsByClassName("tamgiac");
	var list=document.getElementsByClassName("list");
	for (var i = 0; i < nut.length; i++) {
		
		nut[i].onclick=function(){
			if(this.classList[1]=="tamgiactrang"){//kiểm tra coi nó có dc class màu trắng chưa
			this.classList.remove('tamgiactrang');
			var ID=this.getAttribute('data-nut');
			var thongbao=document.getElementById(ID);
			thongbao.classList.remove('xuathien');
				
		}
		else{
			//cho tất cả màu đen
			for (var k = 0; k <nut.length; k++) {
				nut[k].classList.remove('tamgiactrang');
				list[k].classList.remove('xuathien');
			}
			//cho icon click màu trắng
			this.classList.add('tamgiactrang');
			// lấy data cái nội dung cần hiện, yêu cầuđặt data-nut = id của nội dung cần hiển thị
			var ID=this.getAttribute('data-nut');
			var thongbao=document.getElementById(ID);
			thongbao.classList.add('xuathien');
		}
		}
	}
},false);// cách 2
