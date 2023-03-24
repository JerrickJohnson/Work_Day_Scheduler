// var saveButtonEl = document.querySelectorAll('.saveBtn');
// appointmentEl = document.getElementById('schedule');
// var hourOfDay = document.getElementById('hour');
var containerEl = document.getElementById('container')

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.







let hoursInDay = '';

var curTime = dayjs().format('hA');
// var lastHr = dayjs('').format('ha');

var timeArray = ['7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];


// .then(function (response) {
//   return response.json();
// })



$(document).ready(function () {
  // var text = document.getElementById('taskIn').value;
  
  // console.log(text);
  // console.log(hrTime);
  // localStorage.setItem("taskToDo", JSON.stringify(text));

  // if(e.click && text.val() != "") && (hrTime <= timeArray[i]) {
  //   var task = 

  // }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
for (var i = 0; i < timeArray.length; i++) {

  // var hourTime = dayjs(timeArray[i], 'HA');
  var hourTime = dayjs('timeArray[i]');
  // var hourTime = timeArray[i];
  console.log(timeArray[i]);
  var classPFP = '';

    // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // if (hourTime < (curTime, 'hour')) {
  if (hourTime.isBefore(curTime, 'hour')) {
    classPFP = 'past';
  } else if (hourTime.isSame(curTime, 'hour')) {
    classPFP = 'present';
  }else {
    classPFP = 'future';
  }
  console.log(hourTime);
  console.log(curTime);
  console.log(classPFP);
 
  hoursInDay += `<div id="hour-${i}" class="row time-block ${classPFP}">
  <div class="col-2 col-md-1 hour text-center py-3">${timeArray[i]}</div>
  <textarea id="taskIn=${i}" class="col-8 col-md-10 description" rows="3"></textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save" data-hour="${i}">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>
</div>`;

containerEl.innerHTML = hoursInDay;
}

 // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  // $(".btn").on("click",function (e) {

  var saveButton = document.querySelectorAll('.saveBtn');

  saveButton.forEach(function(saveBtn) {

    saveBtn.addEventListener('click', function() {
      var hour = this.getAttribute('data-hour');

      var task = document.querySelector(`#taskIn-${hour}`).value;

      console.log(`Saved task "${task}" for hour ${timeArray[hour]}`);
    });
  });

  // TODO: Add code to display the current date in the header of the page.

  var curDate = dayjs().format('dddd MMMM YYYY');
  $('#currentDay').text(curDate);


});


 
  


