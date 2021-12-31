function showTime() {
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	document.getElementById('currentTime').innerHTML = time;
}
function showDate() {
var today = new Date();
var time = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear();
	document.getElementById('currentDate').innerHTML = time;
}
showTime();
showDate();
setInterval(function () {
	showTime();
        showDate();
}, 1000);
