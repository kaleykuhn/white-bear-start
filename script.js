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
   //});
   //check if password is filled out correctly and validate length
   //$("#letsgo-button-landing").click(function () {
   //check if password is filled out correctly
   var passwordInput = $("#exampleInputPassword1").val();
   if (passwordInput.length === 0) {
      $("#password-error").show();
      $("#exampleInputPassword1").addClass("is-invalid");
      $("#password-error-length").hide();
   } else if (passwordInput.length < 9) {
      $("#password-error-length").show();
      $("#password-error").hide();
      $("#exampleInputPassword1").addClass("is-invalid");
   } else {
      $("#password-error").hide();
      $("#exampleInputPassword1").removeClass("is-invalid");
      $("#exampleInputPassword1").addClass("is-valid");
   }

   //if (passwordInput == "") {
   // $("#password-error").show();
   //$("#password-error").addClass("is-valid");
   // } else {
   //  $("password-error").hide();
   //  $("#exampleInputPassword1").removeClass("is-invalid");
   //  $("#exampleInputPassword1").addClass("is-valid");
});
//$("#answerArea").keyup(function () {
// Each char in text area counted and displayed
//var answerInput = $("#answerArea").val().length;
//console.log(answerInput);
//var inputCounter = $("#characterCounter").text(answerInput + "/240");
//console.log(inputCounter);
//if (answerInput <= 0 || answerInput <= 240) {
//$("#nextButton").removeClass("disabled");
//$(inputCounter).removeClass("text-danger");
//} else if (answerInput === 0 || answerInput > 240) {
//$("#nextButton").addClass("disabled");
//$("#characterCounter").addClass("text-danger");
//} else {
//$("#nextButton").removeClass("disabled");
///}
//});
//$("#answerArea").keyup(function () {
/// var answerInput = $("#answerArea").val().length;
//console.log(answerInput);
//var inputCounter = $("#characterCounter").text(answerInput + "/240");
//console.log(inputCounter);
//if (answerInput === 0 || answerInput > 240) {
// $("#nextButton").attr("disabled",true);
//$("#characterCounter").addClass("text-danger");
// when it has 0 or >240 disable it next button
// change color of counter to "danger" when over 240 but contine to allow entry
// } else {
// $("#next-button").click(function () {
//window.location.href = "./create-imagery.html";
// });
// $("#nextButton").attr("disabled",false);
// $("#characterCounter").removeClass("text-danger");
// });
$("#answerArea").keyup(function () {
   // for each character entered in textarea display amount of characters preceding /240
   var answerInput = $("#answerArea").val().length;
   console.log(answerInput);
   var inputCounter = $("#characterCounter").text(answerInput + "/240");
   console.log(inputCounter);
   // disable "Next" button by default
   // when textarea has > 0 and <=240 characters enable
   if (answerInput === 0 || answerInput >= 240) {
      $("#nextButton").attr("disabled", true);
      $("#characterCounter").addClass("text-danger");
      // when it has 0 or >240 disable it next button
      // change color of counter to "danger" when over 240 but contine to allow entry
   } else {
      $("#nextButton").click(function () {
         window.location.href = "./create-imagery.html";
      });
      $("#nextButton").attr("disabled", false);
      $("#characterCounter").removeClass("text-danger");
   }
});
