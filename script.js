$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});
$("#create-error").click(function () {
   $("#overlay-danger").toggleClass(" d-flex d-none");
});
$("#formbutton").click(function () {
   $("#form1").toggle();
   $("#formbutton").remove();
});
//$("#customCheck1").click(function () {
//$("#delete-button").toggle("d-none display");
//});
$(function () {
   $("#customCheck1").click(function () {
      if ($(this).is(":checked")) {
         $("#delete-button").show();
      } else {
         $("#delete-button").hide();
      }
   });
});
