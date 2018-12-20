//获取时间
function times() {
	var mTime = document.getElementsByClassName('moretime')[0];
	var dates = new Date();
	var y = dates.getFullYear();
	var m = dates.getMonth() + 1;
	var d = dates.getDate();
	var hh = dates.getHours();
	var mm = dates.getMinutes();
	var ss = dates.getSeconds();
	var h = check(hh);
	var m = check(mm);
	var s = check(ss);
	function check(i) {
		if (i < 10) {
			return "0" + i;
		} else {
			return i;
		}
	}
	mTime.innerHTML = y + "年" + m + "月" + d + "日" + " " + h + ":" + m + ":" + s;
}

setInterval(times,1000);