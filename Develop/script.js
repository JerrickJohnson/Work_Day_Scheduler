$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
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

    // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  $(".saveBtn").on("click", function() {
    var blockId = $(this).parent().attr("id");
    var data = $("#" + blockId + " .description").val();
    localStorage.setItem(blockId, data);
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

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

  setInterval(updateTimeBlock, 10 * 60 * 1000);

 // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
timeBlock.forEach(function(block) {
  var savedTask = localStorage.getItem(block.id);
  if (savedTask) {
    $("#" + block.id + " .description").val(savedTask);
  }
})

  // TODO: Add code to display the current date in the header of the page.

  var curDate = dayjs().format('dddd MMMM YYYY');
  $('#currentDay').text(curDate);
});


 
  


