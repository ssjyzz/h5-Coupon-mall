var myswiper=new Swiper(".swiper-container",{
	loop:true,
	autoPlay:true,
});
// 设置倒计时
// targetDate.setHours(targetDate.getHours()+2);
function setTime(){
	var endTime=new Date(2017,4,1,0,0);
	var	nowTime=new Date();
	var times = endTime.getTime() - nowTime.getTime();
	var hours = parseInt(times/1000/60/60);
	var mins = parseInt(times/1000/60%60);
	var secondes = parseInt(times/1000%60);
	$("#time").text("距离开始|"+hours+"时"+":"+mins+"分"+":"+secondes+"秒");
	setInterval(setTime,1000);
}
setTime();
// 设置下拉城市
$("#selectCity").click(function(){
	if ($(this).attr("src")=="img/1-top/listDown.png") {
		$("#cities").show();
		$(this).attr("src","img/1-top/listUp.png");
	}else{
		$("#cities").hide();
		$(this).attr("src","img/1-top/listDown.png");
	}
});
$("#cities ul li").click(function(){
	$("#city").text($(this).text());
	$("#cities").hide();
	$("#selectCity").attr("src","img/1-top/listDown.png");
});
// 设置显示隐藏图片
$("#viewtxt").click(function(){
	if ($(".hidePic").css("display")=="none") {
		$(".hidePic").show();
		$(this).text("隐藏全部团购");
	}else{
		$(".hidePic").hide();
		$(this).text("显示全部团购");
		
	}
});
