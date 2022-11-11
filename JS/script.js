var timeCurrent = moment().hour();
console.log(timeCurrent);

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var saveSelection = document.querySelectorAll('.saveBtn');


// Setting classes/functionality for past, present, and future
document.querySelector('#currentDay').textContent = moment().format("dddd, MMMM Do YYYY");
for (var i=9; i <18; i++) {
    if (timeCurrent === hours[i]) {
        document.classList.add("present");
    }

    else if (timeCurrent > hours[i]) {
        document.classList.add("past");
    }

    else if (timeCurrent < hours[i]) {
        document.classList.add("future");
    }

if (localStorage.getItem(i)) {
    document.getElementById(i).value = localStorage.getItem(i);


saveSelection[i].addEventListener("click", function(){
   var num = this.getAttribute("col-id"); 
   var id = document.getElementById(id).value;
    localStorage.setItem(num, id);
})
}
}
