var timeCurrent = moment().hour();
console.log(moment());

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var saveSelection = document.getElementById('.saveBtn');


// Setting classes/functionality for past, present, and future
document.querySelector('#currentDay').textContent = moment().format("dddd, MMMM Do YYYY");
for (var i=0; i <9; i++) {
    if (timeCurrent === hours[i]) {
        console.log(i);
        document.getElementById(i).classList.add("present");
    }
    if (timeCurrent < hours[i]) {
        console.log(i);
        document.getElementById(i).classList.add("future");
    }
    if (timeCurrent > hours[i]) {
        console.log(i);
        document.getElementById(i).classList.add("past");
    }
}

