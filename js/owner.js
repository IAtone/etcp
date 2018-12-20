// 车主页面轮播图
function go(id) {
	var oId = document.getElementById(id);
	var oTitle = oId.getElementsByClassName('text-title')[0];
	var oShow = oTitle.getElementsByClassName('text-icon');
	var oLine = oTitle.getElementsByTagName('p');
	var oPhone = oId.getElementsByClassName('phone-show')[0];
	var oImg = oPhone.getElementsByTagName('li');
	var oText = oId.getElementsByClassName('text-content');
	var len = oLine.length;
	var index = 0;
	function showPlay() {
		oImg[index].className = '';
		oShow[index].style.opacity = '0.5';
		oLine[index].className = '';
		oText[index].style.display = 'none';
		if (index + 1 < len) {
			index ++;
		} else {
			index = 0;
		}
		oImg[index].className = 'active';
		oShow[index].style.opacity = '1';
		oLine[index].className = 'line-active';
		oText[index].style.display = 'block';
	}
	var showTimer = setInterval(showPlay,2000);
	oId.onmouseover = function() {
		clearInterval(showTimer);
	}
	oId.onmouseout = function() {
		showTimer = setInterval(showPlay,2000);
	}

	for (var j = 0; j < len; j++) {
		oShow[j].index = j;
		oShow[j].onclick = function() {
			for (var i = 0; i < len; i++) {
				oImg[index].className = '';
				oShow[index].style.opacity = '0.5';
				oLine[index].className = '';
				oText[index].style.display = 'none';
			}
			index = this.index;
			oImg[index].className = 'active';
			oShow[index].style.opacity = '1';
			oLine[index].className = 'line-active';
			oText[index].style.display = 'block';
		}
	}
}

go('box1');
go('box2');
go('box3');