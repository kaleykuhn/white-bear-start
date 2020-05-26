// overlays on create imagery

$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});
$("#create-error").click(function () {
   $("#overlay-danger").toggleClass(" d-flex d-none");
});

// Edit Cards delete button
$("#show-delete").click(function () {
   $("#delete-button").toggleClass("d-none");
});
// Landing Page
$("#formbutton").click(function () {
   $("#form1").toggle();
   $("#formbutton").remove();
});
// Edit Cards delete button
//$("#show-delete").click(function () {
//$("#delete-button").toggleClass("d-none");
//});
//Email and Password Validation
$("#letsgo-button-landing").click(function () {
   //check if email is filled out correctly
   var emailInput = $("#inputEmail1").val();
   //atLocal checks the emailInput to ensure there is a local part
   var atLocal = emailInput.indexOf("@");
   // beforeAtlocal pulls the email address of the user but cuts at @
   var beforeAtLocal = emailInput.slice(0, atLocal);
   //userEmail represents a valid user email address
   console.log(beforeAtLocal);
   var userEmailValid = false;
   //if emailInput is equal to blank show error msg
   if (emailInput === "") {
      $("#email-error").show();
      $("#inputEmail1").addClass("is-invalid");
   } else {
      $("#email-error").hide();
      $("#inputEmail1").removeClass("is-invalid");
      $("#inputEmail1").addClass("is-valid");
   }
   // if email does not contain local part show error msg
   if (atLocal == -1) {
      $("#email-error-local").show();
      $("#email-error").hide();
      $("#inputEmail1").addClass("is-invalid");
      $("#inputEmail1").removeClass("is-valid");
   } else {
      userEmailValid = true;
   }
   if (userEmailValid === true) {
      $("#email-error-local").hide();
      $("#inputEmail1").addClass("is-valid");
      $("#inputEmail1").removeClass("is-invalid");
   }
   // if any error is present show as invalid
   else {
      $("#email-error").show();
      $("#inputEmail1").addClass("is-invalid");
      $("#inputEmail1").removeClass("is-valid");
   }

   //check if password is filled out correctly and validate length
   var validPassword = false;
   var passwordInput = $("#inputPassword1").val();
   if (passwordInput.length === 0) {
      $("#password-error").show();
      $("#inputPassword1").addClass("is-invalid");
      $("#password-error-length").hide();
      $("#password-error-local").hide();
   } else if (passwordInput.length < 9) {
      $("#password-error-length").show();
      $("#password-error").hide();
      $("#password-error-local").hide();
      $("#inputPassword1").addClass("is-invalid");
      //if char in password input are the same as emailinput error
   } else if (passwordInput.indexOf(beforeAtLocal) > -1) {
      $("#password-error-local").show();
      $("#password-error").hide();
      $("#password-error-length").hide();
      $("#inputPassword1").addClass("is-invalid");
      // else validate to true and hide all errors
   } else {
      validPassword = true;
      $("#password-error-local").hide();
      $("#password-error").hide();
      $("#password-error-length").hide();
      $("#inputPassword1").removeClass("is-invalid");
      $("#inputPassword1").addClass("is-valid");
   }
   // Create new Id amd get Created On Date

   // Date variables
   var getTodayDate = new Date();
   var dateYear = getTodayDate.getYear() - 100;
   console.log(dateYear);
   var dateMonth = getTodayDate.getMonth();
   console.log(dateMonth);
   var dateDay = getTodayDate.getDay();
   console.log(dateDay);
   var timeHours = getTodayDate.getHours();
   console.log(timeHours);
   var timeMinutes = getTodayDate.getMinutes();
   console.log(timeMinutes);
   var timeSeconds = getTodayDate.getSeconds();
   console.log(timeSeconds);
   var timeMilliseconds = getTodayDate.getMilliseconds();
   console.log(timeMilliseconds);

   function addPadding(num) {
      if (String(num).length < 2) {
         return "0" + num.toString();
      } else {
         return num;
      }
   }
   var getTodayDate =
      "" + //turns it into a readable string
      addPadding(dateYear) +
      addPadding(dateMonth) +
      addPadding(dateDay) +
      addPadding(timeHours) +
      addPadding(timeMinutes) +
      addPadding(timeSeconds);
   console.log(getTodayDate);

   var randomNumberForId = Math.floor(Math.random() * 1000);
   // getNewId is found by concatenating the current date and a ramdom number between 000-999
   var getNewId = "" + timeMilliseconds + randomNumberForId;
   console.log(randomNumberForId);

   if (userEmailValid && validPassword) {
      var newUserSubmission = {
         _id: getNewId,
         email: emailInput,
         password: passwordInput,
         createdOn: getTodayDate,
      };
   }
   console.log(newUserSubmission);
});
//create cue page
//character counter
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
