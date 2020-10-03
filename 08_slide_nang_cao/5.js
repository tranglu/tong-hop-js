//xử lý đóng gói code && toán tử 3 ngôi
"use strict";
document.addEventListener("DOMContentLoaded", function() {
    window.ID = 0;
    window.chon = 1;
    var chuyenDong = document.querySelectorAll('.btn');
    for (var i = 0; i < chuyenDong.length; i++) {
        chuyenDong[i].onclick = function() {
            for (var k = 0; k < chuyenDong.length; k++) {
                chuyenDong[k].classList.remove('active');
            }
            this.classList.toggle('active');
            window.chon = this.getAttribute('data-id');
        }
        var nutPhai = document.querySelector('.chuyenslide b.phai'),
            nutTrai = document.querySelector('.chuyenslide b.trai');
        var slides = document.querySelectorAll('.motslide');
        window.trangThai = "dungyen";

        function xacDinh2SlideVaChuyenDong(nut, i) {
            if (window.trangThai == "dangchuyendong") { return false; }
            //đang đứng yên thì xử lý chuyển động
            window.trangThai = "dangchuyendong";
            var trangThai2ChuyenDong = 0;
            var slideHienTai = slides[window.ID];
            // tinh phan tu hien tai, gom cụm code, lồng hàm
            window.ID = (nut == 'nutPhai') ? ((window.ID == (slides.length - 1)) ? 0 : window.ID + 1) : ((window.ID == 0) ? slides.length - 1 : window.ID - 1);
            var slideTiepTheo = slides[window.ID];
            // kiểm tra kết thúc chuyển động
            var xuLyHienTaiKetThucChuyenDong = function() {
                this.classList.remove((nut == 'nutPhai') ? 'bienMatKhiAnNext' + i : 'bienMatKhiAnPre' + i);
                this.classList.remove('xuathien');
                trangThai2ChuyenDong++;
                window.trangThai = (trangThai2ChuyenDong == 2) ? 'dungyen' : window.trangThai;
            };
            var xuLyTiepTheoKetThucChuyenDong = function() {
                this.classList.remove((nut == 'nutPhai') ? 'hienRaKhiAnNext' + i : 'hienRaKhiAnPre' + i);
                this.classList.add('xuathien');
                trangThai2ChuyenDong++;
                window.trangThai = (trangThai2ChuyenDong == 2) ? "dungyen" : window.trangThai;
            };
            slideHienTai.addEventListener('webkitAnimationEnd', xuLyHienTaiKetThucChuyenDong);
            slideTiepTheo.addEventListener('webkitAnimationEnd', xuLyTiepTheoKetThucChuyenDong);
            // toán tử 3 ngôi chổ này
            slideHienTai.classList.add((nut == 'nutPhai') ? 'bienMatKhiAnNext' + i : 'bienMatKhiAnPre' + i);
            slideTiepTheo.classList.add((nut == 'nutPhai') ? 'hienRaKhiAnNext' + i : 'hienRaKhiAnPre' + i);
        };
        // hàm chuyển slide phải
        var chuyenSlidePhai = function() {
            xacDinh2SlideVaChuyenDong('nutPhai', window.chon);
        };
        // hàm chuyển slide trái
        var chuyenSlideTrai = function() {
            xacDinh2SlideVaChuyenDong('nutTrai', window.chon);
        };
        //hành động
        nutPhai.addEventListener('click', chuyenSlidePhai);
        nutTrai.addEventListener('click', chuyenSlideTrai);
    };
}, false);