"use strict";
document.addEventListener("DOMContentLoaded", function() {
    //code thực hiện
    var nut = document.getElementsByClassName("tamgiac");
    var list = document.getElementsByClassName("list");
    for (var i = 0; i < nut.length; i++) {

        nut[i].onclick = function() {
            if (this.classList[1] == "tamgiactrang") { //kiểm tra coi nó có dc class màu trắng chưa
                this.classList.remove('tamgiactrang');
                var ID = this.getAttribute('data-nut');
                var thongbao = document.getElementById(ID);
                thongbao.classList.remove('xuathien');

            } else {
                //cho tất cả màu đen
                for (var k = 0; k < nut.length; k++) {
                    nut[k].classList.remove('tamgiactrang');
                    list[k].classList.remove('xuathien');
                }
                //cho icon click màu trắng
                this.classList.add('tamgiactrang');
                // lấy data cái nội dung cần hiện, yêu cầuđặt data-nut = id của nội dung cần hiển thị
                var ID = this.getAttribute('data-nut');
                var thongbao = document.getElementById(ID);
                thongbao.classList.add('xuathien');
            }
        }
    } //js cuar menu
    var images = document.querySelectorAll('.hinh-slide');
    var layer2 = document.querySelector('.layer2');
    var slides = document.querySelector('.slides');
    var slidewrapper = document.querySelector('.slidewrapper');
    
   
    // var slides = document.querySelectorAll('.slide-hien-thi');
    window.ID = 0;
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function() {
            layer2.classList.add('xuat-hien');
            window.ID = this.getAttribute('data-id');
            var slideHienThiHienTai = document.getElementById(window.ID);
            slideHienThiHienTai.classList.add('xuat-hien');
            var nutPhai = document.querySelector('.chuyenslide b.phai'),
                nutTrai = document.querySelector('.chuyenslide b.trai');
            var slidesHienThi = document.querySelectorAll('.slide-hien-thi');
             var comment = document.querySelector('.comment');
             var button = document.querySelector('.btn');
            var trangthai = "dungyen";

            function xacDinh2SlideVaChuyenDong(nut) {
                if (trangthai == "dangchuyendong") { return false; }
                //đang đứng yên thì xử lý chuyển động
                trangthai = "dangchuyendong";
                var trangthai2chuyendong = 0;
                console.log(window.ID);
                var slideHienTai = slidesHienThi[window.ID];
                console.log(slideHienTai);
                // tinh phan tu hien tai, gom cụm code, lồng hàm
                window.ID = (nut == 'nutPhai') ? ((window.ID == (slidesHienThi.length - 1)) ? 0 : parseInt(window.ID) + 1) : ((window.ID == 0) ? slidesHienThi.length - 1 : parseInt(window.ID) - 1);
                console.log(window.ID);
                var slideTiepTheo = slidesHienThi[window.ID];
                console.log(slideTiepTheo);
                // kiểm tra kết thúc chuyển động
                var xuLyHienTaiKetThucChuyenDong = function() {

                    this.classList.remove((nut == 'nutPhai') ? 'bienMatKhiAnNext' : 'bienMatKhiAnPre');
                    this.classList.remove('xuat-hien');
                    trangthai2chuyendong++;
                    trangthai = (trangthai2chuyendong == 2) ? 'dungyen' : trangthai;
                }
                var xuLyTiepTheoKetThucChuyenDong = function() {
                    this.classList.remove((nut == 'nutPhai') ? 'hienRaKhiAnNext' : 'hienRaKhiAnPre');
                    this.classList.add('xuat-hien');
                    trangthai2chuyendong++;
                    trangthai = (trangthai2chuyendong == 2) ? "dungyen" : trangthai;
                }
                slideHienTai.addEventListener('webkitAnimationEnd', xuLyHienTaiKetThucChuyenDong);
                slideTiepTheo.addEventListener('webkitAnimationEnd', xuLyTiepTheoKetThucChuyenDong);
                // toán tử 3 ngôi chổ này
                slideHienTai.classList.add((nut == 'nutPhai') ? 'bienMatKhiAnNext' : 'bienMatKhiAnPre');
                slideTiepTheo.classList.add((nut == 'nutPhai') ? 'hienRaKhiAnNext' : 'hienRaKhiAnPre');
            }
            // hàm chuyển slide phải
            var chuyenSlidePhai = function() {
                xacDinh2SlideVaChuyenDong('nutPhai');
            };
            // hàm chuyển slide trái
            var chuyenSlideTrai = function() {
                xacDinh2SlideVaChuyenDong('nutTrai');
            };
            //hành động
            nutPhai.addEventListener('click', chuyenSlidePhai);
            nutTrai.addEventListener('click', chuyenSlideTrai);
            function xoa (slidesanh) {
                layer2.classList.remove('xuat-hien');
                for (var k = 0; k < slidesanh.length; k++) {
                    slidesanh[k].classList.remove('xuat-hien');
                };
            };
             // tắt layer2
            button.onclick = function(){xoa(slidesHienThi);};
            comment.onclick =function(){xoa(slidesHienThi);};
        }
    }

}, false); // cách 2