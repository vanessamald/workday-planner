// display current date and time
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// function to save tasks
$(".saveBtn").click(function() {
    // get time and task
    var taskHour = $(this).attr("data");
    var textarea = $(this).siblings("#tasks").val();
    console.log(taskHour);
    console.log(textarea);
    //console.log(this);

    // local storage
    localStorage.setItem(taskHour, textarea); 
});

// get info from local storage for each hour 
$("#8 .text").val(localStorage.getItem("eight"));
$("#9 .text").val(localStorage.getItem("nine"));
$("#10 .text").val(localStorage.getItem("ten"));
$("#11 .text").val(localStorage.getItem("eleven"));
$("#12 .text").val(localStorage.getItem("twelve"));
$("#13 .text").val(localStorage.getItem("one"));
$("#14 .text").val(localStorage.getItem("two"));
$("#15 .text").val(localStorage.getItem("three"));
$("#16 .text").val(localStorage.getItem("four"));
$("#17 .text").val(localStorage.getItem("five"));

function checkHour() {
    // check for current time 
    var currentTime = moment().hour(); 

    // loop through each time block 
    $(".time-block").each(function () {

    // get time for corresponding block
    var sectionTime = parseInt($(this).attr("id")); 
    console.log(currentTime, sectionTime);
    //console.log(this);

    // conditional statements to check against current time
    if (currentTime > sectionTime) {
        // add red, green, or grey background according to time lapse
        $(this).addClass("past-tasks");
        $(this).removeClass("future-tasks");
        $(this).removeClass("present-tasks");  
    }
    else if (currentTime === sectionTime) {
        $(this).removeClass("past-tasks"); 
        $(this).removeClass("future-tasks");
        $(this).addClass("present-tasks");
    }
    else if (currentTime < sectionTime) {
        $(this).removeClass("present-tasks");
        $(this).removeClass("past-tasks");
        $(this).addClass("future-tasks");      
        }  
    })  
};
// run function 
checkHour();


