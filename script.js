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
// $("#delete-button").toggle(" display d-none");
//});
/*/$(function () {
   $("#customCheck1").click(function () {
      if ($(this).is(":checked")) {
         $("#delete-button").show();
      } else {
         $("#delete-button").hide();
      }
   });
/});*/
$("#show-delete").click(function () {
   $("#delete-button").toggleClass("d-none");
});

$("#letsgo-button-landing").click(function () {
   //check if email is filled out correctly
   var emailInput = $("#exampleInputEmail1").val();
   //if emailInput is equal to blank show error msg
   if (emailInput == "") {
      $("#email-error").show();
      $("#exampleInputEmail1").addClass("is-invalid");
   } else {
      $("#email-error").hide();
      $("#exampleInputEmail1").removeClass("is-invalid");
      $("#exampleInputEmail1").addClass("is-valid");
   }
});
