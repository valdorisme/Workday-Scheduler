var timeCurrent = moment().hour();
console.log(moment());

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var saveSelection = document.getElementById('.saveBtn');

document.querySelector('#currentDay').textContent = moment().format("dddd, MMMM Do YYYY");
