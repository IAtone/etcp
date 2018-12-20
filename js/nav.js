var xhr = new XMLHttpRequest();
xhr.open('get','js/nav.json?random=' + Math.random(),true);
xhr.send();
xhr.onreadystatechange = function() {
	if (this.status == 200 && this.readyState == 4) {
		var json = JSON.parse(xhr.responseText);
		var box = document.getElementById('box');
		for (var i = 0; i < json.length; i++) {
			box.innerHTML += '<li><a href =' + json[i].url + '>'
			+ json[i].name + '</a></li>';
			var a = box.getElementsByTagName('a');
			if (a[i].href == location.href) {
				a[i].className = 'navbar-active';
			}
		}
	}
}

// var xhr2 = new XMLHttpRequest();
// xhr2.open('get','js/fix-nav.json',true);
// xhr2.send();
// xhr.onreadystatechange = function() {
// 	if (xhr2.status == 200 && xhr2.readyState == 4) {
// 		var json2 = JSON.parse(xhr2.responseText);
// 		var box2 = document.getElementById('fixBox');
// 		for (var i = 0; i < json2.length; i++) {
// 			box2.innerHTML += '<li><a href =' + json2[i].url + '>'
// 			+ json2[i].name + '</a></li>';
// 			var a = box2.getElementsByTagName('a');
// 			if (a[i].href == location.href) {
// 				a[i].className = 'navbar-active';
// 			}
// 		}
// 	}
// }