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
});

// get info from local storage for each hour 
$("#eight .text").val(localStorage.getItem("eight"));
$("#nine .text").val(localStorage.getItem("nine"));
$("#ten .text").val(localStorage.getItem("ten"));
$("#eleven .text").val(localStorage.getItem("eleven"));
$("#twelve .text").val(localStorage.getItem("twelve"));
$("#one .text").val(localStorage.getItem("one"));
$("#two .text").val(localStorage.getItem("two"));
$("#three .text").val(localStorage.getItem("three"));
$("#four .text").val(localStorage.getItem("four"));
$("#five .text").val(localStorage.getItem("five"));




