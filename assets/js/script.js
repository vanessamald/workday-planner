var text = "";

// display current date and time
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var tasksArray = [];

// function to save tasks
$(".saveBtn").click(function() {
    var taskHour = $(this).attr("data");
    var textarea = $(this).siblings("#tasks").val();
    console.log(taskHour);
    console.log(textarea);
    console.log(this);

    // local storage
    localStorage.setItem(taskHour, textarea); 

    // get info from local storage
    localStorage.getItem(taskHour, textarea);  
});

