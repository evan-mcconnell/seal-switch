// $(document).ready(function() {
//   $(".clickable").click(function () {
//     var answer = prompt("u like to click?!");
//     console.log(answer);
//   });
// });
//
//
$(document).ready(function() {
  console.log("I'm ready!");
  $(".seal-switch").click(function() {
    console.log("CLICK!!!");
    $("#first-seal").slideToggle();
    $("#second-seal").slideToggle();
  });
});

// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $("#first-seal").toggle();
//     $("#second-seal").toggle();
//   });
// });


$(function() {
  $(".click1").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $(".click2").click(function() {
    $("body").removeClass();

  });
});

$(function() {
  $(".add-box").click(function() {
    $("#box-area").addClass("cool-box");
    console.log("1")
    // $(".add-box").toggle();
    // $(".take-box").toggle();
  });

  $(".take-box").click(function() {
    $("#box-area").removeClass();
    console.log("2")
    // $(".add-box").toggle();
    // $(".take-box").toggle();
  });

  $("#box-area").click(function() {
    $(".add-box").toggle();
    $(".take-box").toggle();
    console.log("3")
  });
});
