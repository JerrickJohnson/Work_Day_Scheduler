// Wrapped all code that interacts with DOM in call to JQuery to ensure that the code
// isnt run until the browser has finished rendering all the elements in HTML
$(document).ready(function () {

  //Array of all the hour ids
  var timeBlock = [
    {id: 'hour-9', hour: 9},
    {id: 'hour-10', hour: 10},
    {id: 'hour-11', hour: 11},
    {id: 'hour-12', hour: 12},
    {id: 'hour-13', hour: 13},
    {id: 'hour-14', hour: 14},
    {id: 'hour-15', hour: 15},
    {id: 'hour-16', hour: 16},
    {id: 'hour-17', hour: 17},
  ];

  // Listener on for click events on the Save button(.saveBtn)
  // uses the id in the containting time-block as key to save the user input in 
  // local storage
  $(".saveBtn").on("click", function() {
    var blockId = $(this).parent().attr("id");
    var data = $("#" + blockId + " .description").val();
    localStorage.setItem(blockId, data);
  })

  // Apply the past, present, or future class to each time
  // Uses id attribute of each time-block to conditionally add or remove the 
  //past, present, and future classes using Day.js for the current hour in day
  function updateTimeBlock() {
    var curHour = dayjs().hour();

    timeBlock.forEach(function(block) {
      if (block.hour < 9 || block.hour > 17) {
      }else if (block.hour < curHour) {
        $("#" + block.id).removeClass("present future").addClass("past");
      }else if (block.hour === curHour) {
        $("#" + block.id).removeClass("past future").addClass("present");
      }else {
        $("#" + block.id).removeClass("past present").addClass("future");
      }
    });
  }

  updateTimeBlock();
  //Updates the timeblock 
  setInterval(updateTimeBlock, 10 * 60 * 1000);

 // Get the user input saved in local storage and set the values of corresponding
 // textarea elements 
timeBlock.forEach(function(block) {
  var savedTask = localStorage.getItem(block.id);
  if (savedTask) {
    $("#" + block.id + " .description").val(savedTask);
  }
})

  // Displays the current day at the top of the application
  var curDate = dayjs().format('dddd MMMM YYYY');
  $('#currentDay').text(curDate);
});


 
  


