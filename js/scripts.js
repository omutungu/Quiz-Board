// function check() {
//   var question1 = document.quiz.question1.value;
//   var question2 = document.quiz.question2.value;
//   var question3 = document.quiz.question3.value;
//   var question4 = document.quiz.question4.value;
//   var correct =0;
//
//  if(question1 == "JAVASCRIPT" {
//   correct+=12;
// }
//
//  if(question2 == "JS") {
//   correct+=12;
// }
//
//  if(question3 == "2000") {
//   correct+=12;
// }
//
//  if(question4 == "/script>") {
//   correct+=12;
// }
//
//   var messages = ["Good", "Fair", "Excellent", "Fantastic"];
//
//   var range;
//
//   if (correct < 1){
//   range = 2;
// }
//
// if (correct > 0 && correct < 3){
//   range = 1;
// }
//
// if (correct > 2){
//   range = 0;
// }
//    document.getElementById("message").innerHTML = messages[range];
//    documet.getElementById("number_correct").innerHTML = "You got" + correct + "correct"
// //  }
// function check(){
//  var question1= document.quiz.question1.value;
//  var question2= document.quiz.question2.value;
//  var question3= document.quiz.question3.value;
//  var correct=0;
//
//
// if (question1 == "JAVASCRIPT") {
// correct++;
// }
//
// if (question2 == "2000") {
//  correct++;
// }
//
// if (question3 == "JS") {
//  correct++;
// }
//
//
// var messages = ["Good", "Excellent", "Better"];
//
// var range;
//
//  if (correct < 1)
//  {
//    range = 2;
//  }
//
//  if (correct > 0 && correct < 3){
//    range = 1;
//  }
//
//  if (correct > 2){
//    range = 0;
//  }
//  document.getElementById("message").innerHTML= messages[range];
//  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
// // }
// function check() {
//  var question1 = document.quiz.question1.value;
//  var question2 = document.quiz.question2.value;
//  var question3 = document.quiz.question3.value;
//  var correct = 0;
// }
//
//  if (question1 == "JAVASCRIPT"); {
//   correct+=12;
// }
//
//  if (question2 == "JS"); {
//   correct+=12;
// }
//
//  if (question3 == "2000"); {
//   correct+=12;
// }
//
//
// var messages = ["Great job!", "That's just okay", "You really need to do better"];
//
// var range;
//
//  if (correct < 1){
//    range = 2;
//  }
//
//  if (correct > 0 && correct < 3){
//    range = 1;
//  }
//
//  if (correct > 2){
//    range = 0;
//  }
//
//  document.getElementById("message").innerHTML= messages[range];
//  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
//  });
function check(){
 var question1= document.quiz.question1.value;
 var question2= document.quiz.question2.value;
 var question3= document.quiz.question3.value;
 var correct=0;


if (question1 == "JAVASCRIPT") {
correct++;
}

if (question2 == "JS") {
 correct++;
}

if (question3 == "No") {
 correct++;
}


var messages = ["Great job!", "That's just okay", "You really need to do better"];

var range;

 if (correct < 1)
 {
   range = 2;
 }

 if (correct > 0 && correct < 3){
   range = 1;
 }

 if (correct > 2){
   range = 0;
 }
 document.getElementById("message").innerHTML= messages[range];
 document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
}
