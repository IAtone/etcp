//联系我们地图部分
var oMap = document.getElementsByClassName('map-nav')[0];
var aHref = oMap.getElementsByTagName('a');
var oImg = oMap.getElementsByTagName('img');
var mapLen = aHref.length;
aHref[0].className = 'map-active';
oImg[0].style.display = 'inline-block';

for (var i = 0; i < aHref.length; i++) {
	aHref[i].index = i;
	aHref[i].onclick=function(){
		for (var i = 0; i < mapLen; i++) {
			aHref[i].className = '';
			oImg[i].style.display = 'none';
		}
		aHref[this.index].className = 'map-active';
		oImg[this.index].style.display = 'inline-block';
		var city = JSON.parse(this.dataset.city);
		// console.log(parseFloat(city.x),parseFloat(city.y))
		init(parseFloat(city.x),parseFloat(city.y));
	}
}


function loadJScript() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://api.map.baidu.com/api?v=2.0&ak=1vUfsZ6F1a6qcBU4L1Hmme8xl0ng18DM&callback=init";
	document.body.appendChild(script);
}
function init(x='116.413787',y='39.910524') {
    var map = new BMap.Map("allmap");            // 创建Map实例
    Point = new BMap.Point(x,y);
    map.centerAndZoom(Point,17);      // 初始化地图,用城市名设置地图中心点  
    var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300,157));
	var marker2 = new BMap.Marker(Point,{icon:myIcon});  // 创建标注
	map.addOverlay(marker2);              // 将标注添加到地图中
    map.enableScrollWheelZoom(true);                 //启用滚轮放大缩小
}  
init();
window.onload = loadJScript;  //异步加载地图
