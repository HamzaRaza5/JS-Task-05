//? <---------- MATH METHODS  ---------->

//! QUESTION NO 01

// var number = +prompt("Enter any Positive Integer.");

// var roundOff = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);

// document.write("number: " + number + "<br>");
// document.write("round off value: " + roundOff + "<br>");
// document.write("floor value: " + floor + "<br>");
// document.write("ceil value: " + ceil);

//! QUESTION NO 02

// var number = +prompt("Enter any Negative Integer.");

// var roundOff = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);

// document.write("number: " + number + "<br>");
// document.write("round off value: " + roundOff + "<br>");
// document.write("floor value: " + floor + "<br>");
// document.write("ceil value: " + ceil);

//! QUESTION NO 03

// var userInput = +prompt("Enter a number.");

// var result = Math.abs(userInput);

// document.write("The absolute Value of " + userInput + " is " + result);

// //! QUESTION NO 04

// var diceValue = Math.random() * 6;
// var result = Math.floor(diceValue) + 1;

// document.write("random dice Value: " + result);

// //! QUESTION NO 05

// var coinValue = Math.random() * 2;
// var result = Math.floor(coinValue) + 1;

// document.write(result + "<br>");

// if (result === 2) {
//   document.write("random coin value: Heads");
// } else {
//   document.write("random coin value: Tails");
// }

//! QUESTION NO 06

// var number = Math.random() * 100;
// var result = Math.floor(number) + 1;

// document.write("random number between 1 and 100: " + result);

//! QUESTION NO 07

// var userInput = parseFloat(prompt("Enter your weight in kilograms"));

// document.write("The weight of user is " + userInput + " kilograms");

//! QUESTION NO 08

// var secretRandomNumber = Math.random() * 10;
// var result = Math.floor(secretRandomNumber) + 1;

// var userInput = +prompt("Enter a Number between 1 and 10");

// if (userInput === result) {
//   alert("Congratulations!");
// } else {
//   alert("Try again!");
// }

//? <---------- DATE METHODS  ---------->

//! QUESTION NO 01

var date = new Date();

// console.log(date);

//! QUESTION NO 02

// var monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// var currentMonth = date.getMonth();

// var result = monthNames[currentMonth];
// console.log("Current Month: " + result);

// //! QUESTION NO 03

// var dayNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// var curuentDay = date.getDay();

// var currentDayName = dayNames[curuentDay];

// var firstThreeLetters = currentDayName.slice(0, 3);

// console.log("Today is: " + firstThreeLetters);

//! QUESTION NO 04

// var currentDay = date.getDay();

// if (currentDay === 0 || currentDay === 6) {
//   console.log("It's Fun day");
// } else {
//   console.log("It's Not Fun day");
// }

//! QUESTION NO 05

// var currentDay = date.getDay();

// if (currentDay < 16) {
//   console.log("First fifteen days of the month");
// } else {
//   console.log("Last days of the month");
// }

//! QUESTION NO 06

// var todayMiliseconds = date.getTime();
// var todayMinutes = date.getMinutes();

// var diff = todayMiliseconds - todayMinutes;

// var diffMin = diff / (1000 * 60 * 60);

// document.write("Current Date: " + date);

// document.write(
//   "<br> Elapsed milliseconds since January 1, 1970: " + todayMiliseconds
// );

// document.write("<br> Elapsed minutes since January 1, 1970: " + diffMin);

//! QUESTION NO 07

// var currentHour = date.getHours();

// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

//! QUESTION NO 08

// var lastDayOf2020 = new Date(2020, 11, 31);

// var laterDate = lastDayOf2020;

// console.log("Later date: " + laterDate);

//! QUESTION NO 09

// var ramadanStartDate = new Date("June 18, 2015");

// var timeDiff = date - ramadanStartDate;

// var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// console.log(daysPassed + " days have passed since 1st Ramadan, 2015");

//! QUESTION NO 10

// var startDate2015 = new Date("january 1, 2015");

// var timeDifference = date - startDate2015;

// var secondsElapsed = Math.floor(timeDifference / 1000);

// console.log("On refrence date " + date);
// console.log(secondsElapsed + " Seconds had passed since beginning of 2015");

//! QUESTION NO 11

// var currentDate = new Date();

// var currentHours = date.getHours();

// date.setHours(date.getHours() - 1);

// document.write("Current Date: " + currentDate + "<br>");

// document.write(
//   "One Hour ago, it was " + date.toDateString() + " " + date.toTimeString()
// );

//! QUESTION NO 12

// var currentDate = new Date();
// date.setFullYear(date.getFullYear() - 100);

// document.write("Current date: " + currentDate + "<br>");
// document.write(
//   "100 years back, it was " + date.toDateString() + " " + date.toTimeString()
// );

//! QUESTION NO 13

// var age = +prompt("Enter Your Age");

// var currentYear = new Date().getFullYear();

// var birthYear = currentYear - age;

// document.write("Your age is: " + age);
// document.write("<br> Your birth year is: " + birthYear);

//! QUESTION NO 14

var customerName = "Hamza Raza";
var month = "October";
var numberOfUnits = 410;
var chargesPerUnits = 70;
var latePaymentSurcharge = 5000;

var netAmountPayable = numberOfUnits * chargesPerUnits;

var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.write("Customer Name: " + "<strong>" + customerName + "</strong>");
document.write(" <br> Month: " + "<strong>" + month + "</strong>");
document.write(
  " <br> Number of Units: " + "<strong>" + numberOfUnits + "</strong>"
);
document.write(
  " <br> Charges Per Units: " + "<strong>" + chargesPerUnits + "</strong>"
);
document.write(
  " <br> <br> Net Amount Payable (within Due Date): " +
    "<strong>" +
    netAmountPayable +
    "</strong>"
);
document.write(
  " <br> Late Payment Surcharge: " +
    "<strong>" +
    latePaymentSurcharge +
    "</strong>"
);
document.write(
  " <br> Gross Amount Payable (after Due Date): " +
    "<strong>" +
    grossAmountPayable +
    "</strong>"
);
