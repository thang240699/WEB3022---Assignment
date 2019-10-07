// JavaScript Document
//thu vien anh
var camnang = new Object();
camnang.urlAnh0 = "videos/0.mp4";
camnang.urlAnh1 = "videos/1.mp4";
camnang.urlAnh2 = "videos/2.mp4";
camnang.urlAnh3 = "videos/3.mp4";
camnang.urlAnh4 = "videos/4.mp4";
camnang.anh0 = function () {
    document.getElementById("img_camnang").src = this.urlAnh0;
};
camnang.anh1 = function () {
    document.getElementById("img_camnang").src = this.urlAnh1;
};
camnang.anh2 = function () {
    document.getElementById("img_camnang").src = this.urlAnh2;
};
camnang.anh3 = function () {
    document.getElementById("img_camnang").src = this.urlAnh3;
};
camnang.anh4 = function () {
    document.getElementById("img_camnang").src = this.urlAnh4;
};
var videos = new Object();
videos.urlvideo0= "videos/0.mp4";
videos.urlvideo1= "videos/1.mp4";
videos.urlvideo2= "videos/2.mp4";
videos.urlvideo3= "videos/3.mp4";
videos.urlvideo4= "videos/4.mp4";
videos.video0 = function(){
	document.getElementById("videoe").src = videos.urlvideo1;
};
function loadvideo(){
	video1.src="videos/3.mp4";
}