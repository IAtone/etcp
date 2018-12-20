
var body = document.getElementById('body');
// var nav = document.getElementsByClassName('nav-all')[0];
// //菜单按钮
// var menuBtn = document.getElementsByClassName('micon')[0];
// menuBtn.onclick = function() {
// 	body.style.height=window.innerHeight+'px';
// 	body.style.overflow='hidden';
// 	nav.style.height=window.innerHeight+'px';
// 	nav.style.left = '0';
// }
// //取消按钮
// var closeBtn = document.getElementsByClassName('n-close')[0];
// closeBtn.onclick = function() {
// 	nav.style.left = '-150%';
// 	body.style.height='auto';
// 	body.style.overflow='visible';
// }

// 数字滚动
var oNum = document.getElementsByClassName('oNum');
var n = 0;
var timer = setInterval(function(){	
	n += 80;
	if (n<10000) {
		oNum[0].innerHTML=n;
		oNum[1].innerHTML=n;
		oNum[2].innerHTML=n;
	} else if(n>10000) {
		oNum[0].innerHTML=10000;
		oNum[1].innerHTML=435254;
		oNum[2].innerHTML=43146;
		clearInterval(timer);
	}
},5)

//日期更新
var time = document.getElementsByClassName('time')[0];
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
time.innerHTML = "更新于" + year + "年" + month + "月" + day + "日";


//视频播放
var vClose = document.getElementsByClassName('close')[0]; 
var video = document.getElementsByClassName('video')[0];
var oVideo = document.getElementsByClassName('oVideo')[0];
var vid = document.getElementsByTagName('video')[0];
video.onclick = function() {
	oVideo.style.display = 'block';
	vid.play();
	oVideo.style.height=screen.height+'px';
	oVideo.style.top=scrollY+'px';
	body.style.overflow='hidden';
}
vClose.onclick = function() {
	oVideo.style.display = 'none';
	vid.pause();
	body.style.overflow='visible';
}

// // 侧边导航栏
// var addBtn = document.getElementsByTagName('em');
// var content = document.getElementsByClassName('dl-content');
// var addLen = addBtn.length; 
// var flag = 1;
// for (var i = 0; i < addLen; i++) {
// 	addBtn[i].index = i;
// 	addBtn[i].onclick = function() {
// 		if (!content[this.index].style.display) {
// 			addBtn[this.index].style.background = 'url(image/sub.png) no-repeat';
// 			content[this.index].style.display = 'block';
// 			addBtn[this.index].style.backgroundSize = '100%';
// 		} else if (content[this.index].style.display == 'block') {
// 			addBtn[this.index].style.background = 'url(image/add.png) no-repeat';
// 			content[this.index].style.display = 'none';
// 			addBtn[this.index].style.backgroundSize = '100%';
// 		}
// 	}
// }

// 微信二维码
var wx = document.getElementsByClassName('wx')[1];
var code = document.getElementsByClassName('code')[0];
wx.onmouseover = function() {
	code.style.display = 'block';
}
wx.onmouseout = function() {
	code.style.display = 'none';
}

// 轮播图

var oBan = document.getElementsByClassName('banner')[0];
var oLi = oBan.getElementsByTagName('li');
var oSpan = oBan.getElementsByTagName('span');
var oI = oBan.getElementsByTagName('i');
var len = oLi.length;
var index = 0;
function play() {
	oLi[index].className = '';
	oSpan[index].className = '';
	oI[index].className = '';
	if (index + 1 < len) {
		index ++;
	} else {
		index = 0;
	}
	oLi[index].className = 'active';
	oSpan[index].className = 'active';
	oI[index].className = 'i-active';
}
var banTimer = setInterval(play,2000);
oBan.onmouseover = function() {
	clearInterval(banTimer);
}
oBan.onmouseout = function() {
	banTimer = setInterval(play,2000);
}

for (var j = 0; j < len; j++) {
	oI[j].index = j;
	oI[j].onclick = function() {
		for (var i = 0; i < len; i++) {
			oLi[i].className = '';
			oSpan[i].className = '';
			oI[i].className = '';
		}
		index = this.index;
		oLi[this.index].className = 'active';
		oSpan[this.index].className = 'active';
		oI[this.index].className = 'i-active';
	}
}





