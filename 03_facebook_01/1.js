
// document.addEventListener("DOMContentLoaded",function(){
// 	//code thực hiện
// 	var nut=document.getElementById("nut");
// 	var khoi=document.getElementsByClassName("list");
// 	nut.onclick=function(){
// 	nut.classList.toggle('tamgiactrang');
// 	khoi[0].classList.toggle('xuathien');
// 	}
// },false);// 1 nút trên facebook

// document.addEventListener("DOMContentLoaded",function(){
// 	//code thực hiện
// 	var nut=document.getElementsByClassName("tamgiac");
// 	for ( i=0; i<nut.length;i++){
// 		console.log(nut[i].classList);
// 		nut[i].onclick=function(){
// 		nut[i].classList.toggle('tamgiactrang');
// 		}
// 	}
// },false);// 1 bầy nút trên facebook

document.addEventListener("DOMContentLoaded",function(){
	//code thực hiện
	var nut=document.getElementsByClassName("tamgiac");
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick=function(){
			for (var k = 0; k <nut.length; k++) {
				nut[k].classList.remove('tamgiactrang');
			}
			this.classList.toggle('tamgiactrang');
			var ID=this.getAttribute('data-nut');
			var nutcanthaotac=document.getElementById(ID);
			nutcanthaotac.classList.toggle('xuathien');
		}
	}
},false);
