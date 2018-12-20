var body = document.getElementsByTagName('body')[0];
var nav = document.getElementsByClassName('nav-all')[0];
//菜单按钮
var menuBtn = document.getElementsByClassName('micon')[0];
menuBtn.onclick = function() {
	body.style.height=window.innerHeight+'px';
	body.style.overflow='hidden';
	nav.style.height=window.innerHeight+'px';
	nav.style.left = 0 + 'px';
	console.log(nav.style.left);
}
//取消按钮
var closeBtn = document.getElementsByClassName('n-close')[0];
closeBtn.onclick = function() {
	nav.style.left = '-150%';
	body.style.height='auto';
	body.style.overflow='visible';
}

// 侧边导航栏
var open = document.getElementsByClassName('open-li');
var addBtn = document.getElementsByTagName('em');
var content = document.getElementsByClassName('dl-content');
var addLen = addBtn.length; 
var flag = 1;
for (var i = 0; i < addLen; i++) {
	open[i].index = i;
	open[i].onclick = function() {
		if (!content[this.index].style.display || content[this.index].style.display=='none') {
			addBtn[this.index].style.background = 'url(image/sub.png) no-repeat';
			content[this.index].style.display = 'block';
			addBtn[this.index].style.backgroundSize = '100%';
		} else if (content[this.index].style.display == 'block') {
			addBtn[this.index].style.background = 'url(image/add.png) no-repeat';
			content[this.index].style.display = 'none';
			addBtn[this.index].style.backgroundSize = '100%';
		}
	}
}