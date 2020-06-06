// Landing Page
$("#formbutton").click(function () {
   $("#form1").toggle();
   $("#formbutton").remove();
});
//Create the date function
//This will generate current date and time in two-digits
var getCreatedOnDate = "";
var timeMilliseconds = "";

function createTheDate() {
   var getTodayDate = new Date();
   var dateYear = getTodayDate.getFullYear();
   dateYear = dateYear.toString().substr(-2);
   var dateMonth = getTodayDate.getMonth() + 1;
   console.log(dateMonth);
   var dateDay = getTodayDate.getDate();
   console.log(dateDay);
   var timeHours = getTodayDate.getHours();
   console.log(timeHours);
   var timeMinutes = getTodayDate.getMinutes();
   console.log(timeMinutes);
   var timeSeconds = getTodayDate.getSeconds();
   console.log(timeSeconds);
   timeMilliseconds = getTodayDate.getMilliseconds();
   console.log(timeMilliseconds);

   getCreatedOnDate =
      "" + //turns it into a readable string
      dateYear +
      addTwoPadding(dateMonth) +
      addTwoPadding(dateDay) +
      addTwoPadding(timeHours) +
      addTwoPadding(timeMinutes) +
      addTwoPadding(timeSeconds);
   console.log(getCreatedOnDate); //format of two digit number
}

//padding functions for date and time to return 4 digits or 2 digits

function addThreePadding(num) {
   // A1: number
   // R: string

   var numAsString = String(num);
   if (numAsString.length === 1) {
      return "00" + numAsString; // 4 returns "004"
   } else if (numAsString.length === 2) {
      return "0" + numAsString; // 44 returns "044"
   } else {
      return numAsString;
   }
}
function addTwoPadding(num) {
   // A1: number
   // R: string

   var numAsString = String(num);
   if (numAsString.length === 1) {
      return "0" + numAsString; // 4 returns "04"
   } else {
      return numAsString;
   }
}
// variable for password validation
// common password list
var commonPasswords = [
   "x002tp00",
   "x4ww5qdr",
   "x72jhhu3z",
   "xaccess2",
   "xakep1234",
   "xboxlive",
   "xcalibur",
   "xcountry",
   "xenocide",
   "xenogear",
   "xenophobia",
   "xenophobic",
   "xenophon",
   "xexeylhf",
   "xianzong",
   "xiaoping",
   "xiaoyua123",
   "xinjiang",
   "xohzi3g4",
   "xpressmusic",
   "xsvnd4b2",
   "xsw21qaz",
   "xsw23edc",
   "xthtgfirf",
   "xtutdfhf",
   "xuanzang",
   "xuanzong",
   "xufrgemw",
   "xxx12345",
   "xxxp455w0rd5",
   "xxxxxxx1",
   "xyh28af4",
   "xylophone",
   "xzsawq21",
   "y'knowwhati'msayin",
   "y'understand",
   "yachting",
   "yaglasph",
   "yakovlev",
   "yakushova",
   "yamagata",
   "yamaha12",
   "yamahar1",
   "yamahar6",
   "yamakasi",
   "yamamoto",
   "yamanashi",
   "yamashita",
   "yammering",
   "yangzhou",
   "yankeemp",
   "yankees0",
   "yankees1",
   "yankees2",
   "yankees3",
   "yankees4",
   "yankees7",
   "yankees9",
   "yankovic",
   "yanochka",
   "yanshi1982",
   "yanukovych",
   "yarborough",
   "yarbrough",
   "yardbird",
   "yardbirds",
   "yardstick",
   "yarmouth",
   "yaroslav",
   "yaroslavl",
   "yasacrac",
   "yasuhiro",
   "ybrbnbyf",
   "ybrbnf_25",
   "ybrbnjcbr",
   "ybrjkftd",
   "ybrjkftdbx",
   "ybrjkftdyf",
   "ycwvrxxh",
   "yeahbaby",
   "yeahrigh",
   "yeahright",
   "year2000",
   "year2005",
   "yearbook",
   "yearbooks",
   "yearning",
   "yearnings",
   "yekaterinburg",
   "yelburton",
   "yelena03",
   "yellow12",
   "yellow22",
   "yellowhead",
   "yellowish",
   "yellowknife",
   "yellowstone",
   "yelverton",
   "yemenite",
   "yengeese",
   "yeomanry",
   "yes90125",
   "yeshivas",
   "yessenia",
   "yesterda",
   "yesterday",
   "yesterdays",
   "yfcnfcmz",
   "yfcntymrf",
   "yfcnz123",
   "yfcnzvjz",
   "yfcnzyfcnz",
   "yfdbufnjh",
   "yfeiybrb",
   "yfgjktjy",
   "yfhrjnbrb",
   "yfltymrf",
   "yfnfitymrf",
   "yfxfkmybr",
   "ygfxbkgt",
   "yggdrasi",
   "yielding",
   "yildirim",
   "yingling",
   "yingyang",
   "yitzchak",
   "yjdbrjdf",
   "yjdjcnbf",
   "yjdsqgfhjkm",
   "yjdsqujl",
   "yjdujhjl",
   "yjhbkmcr",
   "ym3cautj",
   "yogibear",
   "yogyakarta",
   "yohannan",
   "yokohama",
   "yokosuka",
   "yokozuna",
   "yorkshir",
   "yorkshire",
   "yorktown",
   "yorkville",
   "yosemite",
   "yoshihiro",
   "youandme",
   "youlanda",
   "youngblood",
   "youngest",
   "youngman",
   "youngone",
   "youngster",
   "youngsters",
   "youngstown",
   "yourmama",
   "yourmom1",
   "yourname",
   "yourself",
   "yourselves",
   "yousuck1",
   "youthful",
   "yoyodyne",
   "ypsilanti",
   "yqlgr667",
   "yqmbevgk",
   "yr8wdxcq",
   "ytdxz2ca",
   "ytngfhjkz",
   "ytnhjufnm",
   "ytrhjvfyn",
   "ytyfdbcnm",
   "yudhoyono",
   "yugoslav",
   "yugoslavia",
   "yugoslavian",
   "yuitre12",
   "yujyd360",
   "yuletide",
   "yushchenko",
   "yvelines",
   "yvtte545",
   "yxkck878",
   "yy5rbfsc",
   "yyyyyyy1",
   "yzerman1",
   "z1234567",
   "z123456789",
   "z123456z",
   "z1x2c3v4",
   "z1x2c3v4b5",
   "z1x2c3v4b5n6m7",
   "z1z2z3z4",
   "z3cn2erv",
   "zacatecas",
   "zacharia",
   "zachariah",
   "zacharias",
   "zachary1",
   "zaharova",
   "zakamatak",
   "zalewski",
   "zalgiris",
   "zamarripa",
   "zambales",
   "zamboanga",
   "zambrano",
   "zamindar",
   "zamoyski",
   "zanesville",
   "zantopia",
   "zanzibar",
   "zapatista",
   "zaphod42",
   "zaporizhia",
   "zapruder",
   "zaq!2wsx",
   "zaq11qaz",
   "zaq12345",
   "zaq123wsx",
   "zaq12qaz",
   "zaq12wsx",
   "zaq1xsw2",
   "zaq1xsw2cde3",
   "zaqwsx123",
   "zaqwsxcde",
   "zaqwsxcderfv",
   "zaqxsw123",
   "zaqxswcde",
   "zaragoza",
   "zaratustra",
   "zarzuela",
   "zasranec",
   "zatunica",
   "zawahiri",
   "zaxscdvf",
   "zbigniew",
   "zcfvfzkexifz",
   "zcxfcnkbdf",
   "zcxfcnkbdfz",
   "zealander",
   "zealanders",
   "zebra123",
   "zechariah",
   "zeebrugge",
   "zeitgeist",
   "zeitschrift",
   "zeljeznicar",
   "zemanova",
   "zendejas",
   "zenit2011",
   "zeppelin",
   "zeringue",
   "zerocool",
   "zesyrmvu",
   "zhaozong",
   "zhejiang",
   "zhengzhou",
   "zhjckfdf",
   "zhongguo",
   "zhongshan",
   "zhongshu",
   "zhongzong",
   "zhytomyr",
   "zidane10",
   "ziegfeld",
   "zielinski",
   "zigazaga",
   "ziggy123",
   "zildjian",
   "zillions",
   "zimbabwe",
   "zimbabwean",
   "zimmerma",
   "zimmerman",
   "zimmermann",
   "zinedine",
   "zinfandel",
   "zinoviev",
   "zionists",
   "zipdrive",
   "zippy123",
   "zirconia",
   "zirconium",
   "zjses9evpa",
   "zldej102",
   "zoidberg",
   "zolushka",
   "zombie13",
   "zookeeper",
   "zoological",
   "zoologist",
   "zooplankton",
   "zootsuit",
   "zoroaster",
   "zoroastrian",
   "zoroastrianism",
   "zoroastrians",
   "zorro123",
   "zpflhjn1",
   "zqjphsyf6ctifgu",
   "zrjdktdf",
   "zse45rdx",
   "zse4xdr5",
   "zsecyus56",
   "zucchero",
   "zucchini",
   "zuckerberg",
   "zuckerman",
   "zukowski",
   "zulfikar",
   "zulfiqar",
   "zvonareva",
   "zweibrucken",
   "zx123456",
   "zx123456789",
   "zxasqw12",
   "zxc12345",
   "zxc123456",
   "zxc123zxc",
   "zxcasd123",
   "zxcasdqw",
   "zxcasdqwe",
   "zxcasdqwe123",
   "zxcqweasd",
   "zxcv1234",
   "zxcv4321",
   "zxcvasdf",
   "zxcvb123",
   "zxcvb1234",
   "zxcvb12345",
   "zxcvbasdfg",
   "zxcvbn12",
   "zxcvbn123",
   "zxcvbn123456",
   "zxcvbnm.",
   "zxcvbnm1",
   "zxcvbnm12",
   "zxcvbnm123",
   "zxcvbnm123456789",
   "zxcvbnma",
   "zxcvbnmm",
   "zxcvbnmz",
   "zxcvfdsa",
   "zxcvvcxz",
   "zz123456",
   "zz8807zpl",
   "zzxxccvv",
   "zzzxxxccc",
   "zzzzxxxx",
   "zzzzzzz1",
];

//filter used to only give words above 8 char in password new arr
var filteredPasswords = commonPasswords.filter((password) => {
   if (password.length > 8) {
      return true;
   } else {
      return false;
   }
});
//Email and Password Validation
$("#letsgo-button-landing").click(function () {
   //check if email is filled out correctly
   var emailInput = $("#inputEmail1").val();
   //atLocal checks the emailInput to ensure there is a local part index
   var atLocal = emailInput.indexOf("@");
   // beforeAtlocal pulls the email address of the user but cuts at @
   var beforeAtLocal = emailInput.slice(0, atLocal);
   //userEmail represents a valid user email address
   console.log(beforeAtLocal);
   var userEmailValid = false;

   differentChar = "";
   for (let i in beforeAtLocal) {
      if (differentChar.indexOf(beforeAtLocal[i]) === -1) {
         differentChar = differentChar + beforeAtLocal[i];
      }
   }
   //if emailInput is equal to blank show error msg
   if (emailInput === "") {
      //$("#email-error").show();
      $("#inputEmail1").addClass("is-invalid");
      $("#uniqueMess").text("Please enter your email");
      userEmailValid = false;
   } // if email does not contain local part show error ms
   else if (atLocal == -1) {
      //$("#email-error-local").show();
      //$("#email-error").hide();
      $("#inputEmail1").addClass("is-invalid");
      $("#inputEmail1").removeClass("is-valid");
      $("#uniqueMess").text("Email must contain the  @");
      userEmailValid = false;
   } else if (differentChar.length < 3) {
      $("#inputEmail").addClass("is-invalid");
      $("#uniqueMess").text("Must enter unique characters");
      //$("#email-error-local").hide();
      //$("#email-error").hide();
      userEmailValid = false;
   } else {
      //$("#email-error").hide();
      $("#inputEmail1").addClass("is-valid");
      $("#inputEmail1").removeClass("is-invalid");
      $("#uniqueMess").text("");
      userEmailValid = true;
   }

   console.log(differentChar);

   if (userEmailValid === true) {
      //$("#email-error-local").hide();
      $("#inputEmail1").addClass("is-valid");
      $("#inputEmail1").removeClass("is-invalid");
   }

   //check if password is filled out correctly and validate length
   var validPassword = false;
   var passwordInput = $("#inputPassword1").val();
   console.log(filteredPasswords.includes(passwordInput));
   if (passwordInput.length === 0) {
      //$("#password-error").show();
      $("#uniquePass").text("please enter your password");
      $("#inputPassword1").addClass("is-invalid");
      //$("#password-error-length").hide();
      //$("#password-error-local").hide();
      //$("#password-match-error").hide();
   } else if (passwordInput.length < 9) {
      //$("#password-error-length").show();
      $("#uniquePass").text("your password must be at least 9 chararacters");
      //$("#password-error").hide();
      //$("#password-error-local").hide();
      //$("#password-match-error").hide();
      $("#inputPassword1").addClass("is-invalid");
      //if char in password input are the same as emailinput error
   } else if (passwordInput.indexOf(beforeAtLocal) > -1) {
      // $("#password-error-local").show();
      $("#uniquePass").text("your password cannot contain email address");
      $("#password-error").hide();
      $("#password-error-length").hide();
      $("#password-match-error").hide();
      $("#inputPassword1").addClass("is-invalid");
      // else validate to true and hide all errors
   } else if (filteredPasswords.includes(passwordInput)) {
      console.log("found-in-list");
      $("#uniquePass").text("password must not be on list of common passwords");
      //$("#password-match-error").show();
      //$("#password-error").hide();
      //$("#password-error-local").hide();
      //$("#password-error-length").hide();
      $("#inputPassword1").addClass("is-invalid");
   } else {
      validPassword = true;
      $("#uniquePass").text("");
      //$("#password-error-local").hide();
      //$("#password-error").hide();
      //$("#password-error-length").hide();
      //$("#password-match-error").hide();
      $("#inputPassword1").removeClass("is-invalid");
      $("#inputPassword1").addClass("is-valid");
   }
   // Create new Id and get Created On Date
   //call the getCreatedOn function to get the CreatedOn Date
   createTheDate();
   // Date variables

   //variable for random number for Id
   var randomNumberForId = Math.floor(Math.random() * 1000);

   // getNewId is found by concatenating the current date and a random number between 000-999
   var paddedMilliseconds = addThreePadding(timeMilliseconds);
   var paddedRandomNumId = addThreePadding(randomNumberForId);
   var getNewId = paddedMilliseconds + paddedRandomNumId;

   if (userEmailValid && validPassword) {
      var newUserSubmission = {
         _id: getNewId,
         email: emailInput,
         password: passwordInput,
         createdOn: Number(getCreatedOnDate),
      };
   }
   console.log(newUserSubmission);
});

/*$("#letsgo-button-landing").click(function () {
   //check if email is filled out correctly
   var emailInput = $("#inputEmail1").val();
   //atLocal checks the emailInput to ensure there is a local part index
   var atLocal = emailInput.indexOf("@");
   // beforeAtlocal pulls the email address of the user but cuts at @
   var beforeAtLocal = emailInput.slice(0, atLocal);
   //userEmail represents a valid user email address
   console.log(beforeAtLocal);
   var userEmailValid = false;
   //if emailInput is equal to blank show error msg
   differentChar = "";
   for (let i in beforeAtLocal) {
      if (differentChar.indexOf(beforeAtLocal[i]) === -1) {
         differentChar = differentChar + beforeAtLocal[i];
      }
   }
   console.log(differentChar);
   if (differentChar.length < 3) {
      $("#inputEmail").addClass("is-invalid");
      $("#uniqueMess").text("Must enter unique characters");
      $("#email-error-local").hide();
      $("#email-error").hide();
   } else {
      userEmailValid = true;
   }
});*/
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
// overlays on create imagery and get validation info

$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");

   // call the function for createdOn and the timeMilleseconds for id
   createTheDate();
   //
   //var for random id num
   var randomNumberForId = Math.floor(Math.random() * 1000);
   console.log(randomNumberForId);
   // getNewId is found by concatenating the current date and a random number between 000-999
   var paddedMilliseconds = addThreePadding(timeMilliseconds);
   var paddedRandomNumId = addThreePadding(randomNumberForId);
   var getNewId = paddedMilliseconds + paddedRandomNumId;
   // user Create Input is tracking user inputs
   var userCreateImInput = {
      id_: getNewId,
      // encoded to prevent user from entering things that could cause security risk of database and application
      imagery: encodeURIComponent(
         "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG."
      ),
      // encoded to prevent users from entering things that could cause security risk of database and application
      answer: encodeURIComponent(
         "The syntax for making a comment in HTML is <!-- Mike's comment here -->"
      ),
      levelNum: 1,
      successfulAttemptsNum: 0,
      // Number makes the data of date a Number from a string
      createdOn: Number(getCreatedOnDate),
      lastAttemptedOn: Number(getCreatedOnDate),
   };
   console.log(userCreateImInput);
});
$("#create-error").click(function () {
   $("#overlay-danger").toggleClass(" d-flex d-none");
});

// Edit Cards delete button
$("#show-delete").click(function () {
   $("#delete-button").toggleClass("d-none");
});
