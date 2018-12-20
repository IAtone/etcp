// 新闻AJAX插入

var oNews = document.getElementsByClassName('news-text')[0];

var xhr1 = new XMLHttpRequest();
xhr1.open('get','js/news.json?random = ' + Math.random(),true);
xhr1.send();
xhr1.onreadystatechange = function() {
	if (this.status == 200 && this.readyState == 4) {
		var datas = JSON.parse(this.responseText);
		var output = "";
		for (var i in datas) {
			output += "<li><a href ='news.html?id=" + datas[i].id + "'>" + datas[i].title + "</a></li>";
		}
		oNews.innerHTML = output;
	}
}