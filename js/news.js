
function getId(id) {
	var reg = new RegExp("(^|&)" + id + "=([^&]*)(&|$)");
	var regId = window.location.search.substr(1).match(reg);
	if (regId != null) {
		return unescape(regId[2]);
	}
	return null;
}

var news = document.getElementById('news');
var hTitle = document.getElementById('htitle');
var xhr2 = new XMLHttpRequest();
xhr2.open('get','js/news.json?random = ' + Math.random(),true);
xhr2.send();
xhr2.onreadystatechange = function() {
	if (this.status == 200 && this.readyState == 4) {
		var datas = JSON.parse(this.responseText);
		var len = datas.length;
		for (var i = 0; i < len; i++) {
			var ele = datas[i];
			if(getId('id') == ele.id) {
				hTitle.innerHTML = ele.title;
				news.innerHTML = ele.body;
			}
		}
	}
}

// //获取时间
// function times() {
// 	var mTime = document.getElementsByClassName('moretime')[0];
// 	var dates = new Date();
// 	var y = dates.getFullYear();
// 	var m = dates.getMonth() + 1;
// 	var d = dates.getDate();
// 	var hh = dates.getHours();
// 	var mm = dates.getMinutes();
// 	var ss = dates.getSeconds();
// 	var h = check(hh);
// 	var m = check(mm);
// 	var s = check(ss);
// 	function check(i) {
// 		if (i < 10) {
// 			return "0" + i;
// 		} else {
// 			return i;
// 		}
// 	}
// 	mTime.innerHTML = y + "年" + m + "月" + d + "日" + " " + h + ":" + m + ":" + s;
// }

// setInterval(times,1000);


