// Write a function called sleepIn that takes in two boolean parameters:weekday and vacation .


// The parameter weekday is true if it is a weekday,and parameter vacation is true if we
// are on vacation.We sleep in if it is not a weekday or we are on vacation.Return true if
// we sleep in.So some example input and output are:

  // sleepIn(false,false)-->true
  // sleepIn(true,false)-->false
  // sleepIn(false,true)-->true


function sleepIn(weekday,vacation) {
  return (!weekday || vacation)
}

// NEXT // QUESTION:


function monkeyTrouble(aSmile,Bsmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile)
}

// NEXT // QUESTION:


function stringTimes(str,n) {
  var returnStr = "";
  var i = 0;
  while (i<n) {
    returnStr += str
    i++
  }
return returnStr
}

// NEXT // QUESTION:
function luckySum(a,b,c) {

if (a == 13) {
  return 0
}
if (b == 13) {
  return a
}
if (c == 13) {
  return a+b
}
else {
  return a+b+c
}
}
// NEXT // QUESTION:

function caughtSpeeeding(speed,is_birthday) {
  if (is_birthday) {
    speed -= 5
 }
if (speed < 60) {
  return 0
}
if (60 < speed <= 80) {
  return 1
}
return 2
}

// NEXT // QUESTION:

function makeBricks(small,big,goal) {
  return goal%5 >= 0 && goal%5 - small <= 0 && small + 5*big >= goal;
}
