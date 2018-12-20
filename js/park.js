//固定导航栏
var sFix = document.getElementById('sFix');
var oTop = sFix.offsetTop;
window.onscroll = function() {
	if (pageYOffset > oTop) {
		sFix.style.cssText = "position:fixed; top:0; left:0; z-index:9999;";
	} else {
		sFix.style.cssText = "position:static;";
	}
}

var pFix = document.getElementById('park-fix');
var oCase = document.getElementsByClassName('main-case');
var aLink = pFix.getElementsByTagName('a');
var aLinkLen = aLink.length;
oCase[0].style.display = 'block';
aLink[0].className = 'fix-nav-active';
for (var i = 0; i < aLinkLen; i++) {
	aLink[i].index = i;
	aLink[i].onclick = function() {
		for (var i = 0; i < aLinkLen; i++) {
			aLink[i].className = '';
			oCase[i].style.display = 'none';
		}
		this.className = 'fix-nav-active';
		oCase[this.index].style.display = 'block';
	}
}

//城市二级联动
cities = new Object();
cities['北京'] = new Array('北京');
cities['浙江'] = new Array('杭州','宁波','温州','绍兴','嘉兴','金华','湖州','衢州','舟山','台州','丽水');
cities['河北'] = new Array('石家庄', '张家口', '承德', '秦皇岛', '唐山', '廊坊', '保定', '沧州', '衡水', '邢台', '邯郸');
cities['山西'] = new Array('太原', '大同', '朔州', '阳泉', '长治', '晋城', '忻州', '吕梁', '晋中', '临汾', '运城');


function set_city(province, city) {
	var pv, cv;
	var i, ii;

	pv=province.value;
	cv=city.value;

	city.length=1;

	if(pv=='0') return;
	if(typeof(cities[pv])=='undefined') return;

	for(i=0; i<cities[pv].length; i++)
	{
		ii = i+1;
		city.options[ii] = new Option();
		city.options[ii].text = cities[pv][i];
		city.options[ii].value = cities[pv][i];
	}
}

//轮播图

function ban(id) {
	var oBan = document.getElementById(id);
	var oUl = oBan.getElementsByTagName('ul')[0];
	var oLi = oBan.getElementsByTagName('li');
	var oSp = oBan.getElementsByTagName('span');
	var len = oLi.length;
	var index = 0;
	oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
	// console.log(oUl);
	oUl.style.width = document.body.offsetWidth * oLi.length + 'px';
	var speed = document.body.offsetWidth;
	// console.log(oLi);
	function imgShow() {
		oSp[index].className = '';
		if (index + 1 < len) {
			index ++;
		} else {
			index = 0;
		}
		oUl.style.left = oUl.offsetLeft - speed + 'px';
		if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
			oUl.style.left = 0 + 'px';
		} else if (oUl.offsetLeft > 0) {
			oUl.style.left = -oUl.offsetWidth / 2 + 'px';
		}
		oSp[index].className = 'pn-active';
	}

	var closeTimer = setInterval(imgShow, 2000);

	// for (var i = 0; i < len; i++) {
	// 	oSp[i].index = i;
	// 	oSp[i].onclick = function() {
	// 		oUl.style.left = 0 + 'px';
	// 		oUl.style.left = oUl.offsetLeft - (speed * this.index) + 'px';
	// 		for (var i = 0; i < len; i++) {
	// 			oSp.className = '';
	// 		}
	// 		index = this.index;
	// 		oSp[index].className = 'pn-active';
	// 	}
	// }
}

ban('banner-top');
ban('banner-center');


//案例中心
var anchor=location.href.slice(location.href.search(/\.html/)+6);
var anchors=['parkMain','caseCenter'];


var cent = document.getElementsByClassName('case-title')[0];
var oBlue = cent.getElementsByTagName('a');
var wCase = document.getElementsByClassName('case-wrapper');
var len = oBlue.length;
var index=anchors.findIndex(function(ele){return ele==anchor});
if (location.href == 'http://atone0119.gz01.bdysite.com/park.html') {
	index = 0;
}
wCase[index].style.display = 'block';
oBlue[index].className = 'blue';

for (var i = 0; i < len; i++) {
	oBlue[i].index = i;
	oBlue[i].onclick = function() {
		for (var i = 0; i < len; i++) {
			oBlue[i].className = '';
			wCase[i].style.display = 'none';
		}
		this.className = 'blue';
		wCase[this.index].style.display = 'block';
	}
}

