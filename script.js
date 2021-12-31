function showTime() {
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	document.getElementById('currentTime').innerHTML = time;
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
