$(document).ready(function() {
  checkSize();
$(window).resize(checkSize);
});
function checkSize(){
  if ($("").css("float") == "none" )(
      $(".navpane").removeClass("hidden");
      $(".navbutton").addClass("hidden");
  )
  else if ($(".navpane").css("float") == "left" )(
    $(".navbutton").removeClass("hidden");
    $(".navpane").addClass("hidden");
  )
}
function navToggle() {
  $(".navpane").toggleClass("hidden");
}
