//Display current date
var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(date);

$(document).ready(function(){
 //save typed input for timeblock entry into local storage
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".entry").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //retrieve the present hour
        var presentHour = moment().hour();
    
        $(".time-category").each(function () {
            var timeEntry = parseInt($(this).attr("id").split("hour")[1]);

            // //if the event is in the past display entry as past color
            if (timeEntry < presentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            //if the event is in the present display entry box as the present color
            else if (timeEntry === presentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            //if the entry is in the future display the entry ans the future color
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
     // get stored value of entrty from local storage and display in the time container for that hour
    $("#hour9 .entry").val(localStorage.getItem("hour9"));
    $("#hour10 .entry").val(localStorage.getItem("hour10"));
    $("#hour11 .entry").val(localStorage.getItem("hour11"));
    $("#hour12 .entry").val(localStorage.getItem("hour12"));
    $("#hour13 .entry").val(localStorage.getItem("hour13"));
    $("#hour14 .entry").val(localStorage.getItem("hour14"));
    $("#hour15 .entry").val(localStorage.getItem("hour15"));
    $("#hour16 .entry").val(localStorage.getItem("hour16"));
    $("#hour17 .entry").val(localStorage.getItem("hour17"));

    timeTracker();


//Clear button function for clearing content and local storage
    $("#clearItems").click(function(event) {
    event.preventDefault;
    $("textArea").val("");
    localStorage.clear();
 })
 });