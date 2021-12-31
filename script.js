function showTime() {
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	document.getElementById('currentTime').innerHTML = "Time" + time;
}
function showDate() {
var today = new Date();
var time = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear();
	document.getElementById('currentDate').innerHTML = "Date" + time;
}
showTime();
showDate();
setInterval(function () {
	showTime();
        showDate();
}, 1000);
