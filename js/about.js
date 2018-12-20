// 固定导航栏
var oFix = document.getElementById('fixBox');
var offTop = oFix.offsetTop;
window.onscroll = function() {
	if (pageYOffset > offTop) {
		oFix.style.cssText = "position:fixed; top:0; left:0; z-index:9999;";
	} else {
		oFix.style.cssText = "position:static;";
	}
}


var anchor = location.href.slice(location.href.search(/\.html/)+6);
var anchors = ['tro','dev','cul','str','joi','con'];
var oAbout = document.getElementsByClassName('about');
var index = anchors.findIndex(function(ele){return ele==anchor});
var oLink = oFix.getElementsByTagName('a');
if (location.href == 'http://atone0119.gz01.bdysite.com/about.html') {
	index = 0;
}
var oLinkLen = oLink.length;
oAbout[index].style.display = 'block';
oLink[index].className = 'fix-nav-active';
for (var j = 0; j < oLinkLen; j++) {
	oLink[j].index = j;
	oLink[j].onclick = function() {
		for (var i = 0; i < oLinkLen; i++) {
			oLink[i].className = '';
			oAbout[i].style.display = 'none';
		}
		this.className = 'fix-nav-active';
		oAbout[this.index].style.display = 'block';
	}
}


