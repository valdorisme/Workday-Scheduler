var timeCurrent = moment().hour();
console.log(moment());

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var saveSelection = document.querySelectorAll('.saveBtn');


// Setting classes/functionality for past, present, and future
document.querySelector('#currentDay').textContent = moment().format("dddd, MMMM Do YYYY");
for (var i=9; i <17; i++) {
    if (timeCurrent === hours[i]) {
        console.log(i);
        document.getElementById(i).classList.add("present");
    }

    else if (timeCurrent > hours[i]) {
        console.log(i);
        document.getElementById(i).classList.add("past");
    }

    else if (timeCurrent < hours[i]) {
        console.log(i);
        document.getElementById(i).classList.add("future");
    }
}

if (localStorage.getItem(i)) {
    document.getElementById(i).value = localStorage.getItem(i);
}

saveSelection[i].addEventListener("click", saveButton());

function saveButton() {
   var num = this.getAttribute("col-id") ;
   var id = document.getElementById(id).value;
    localStorage.setItem(num, id);
}
