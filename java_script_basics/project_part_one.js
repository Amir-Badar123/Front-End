var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var age = prompt("How old are you?");
var height = prompt("What is your height?")
var petName = prompt("What is yout pet name?")






var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

// Name condition
if (firstName[0]===lastName[0]){
  nameCond = true;
}else {
    nameCond = false;
  }

//AGE condition
if (age > 20 && age < 30) {
  ageCond = true;
}else {
  ageCond = false;
}

//HEIGHT CONDITION
if (height > 170) {
  heightCond = true;
}else{
  heightCond = false;
}

  // PET CONDITION
  if (petName[petName.length-1] === "y") {
    petCond = true;
  }else {
    petCond = false;
  }

//CHECK ALL CONDITIONS
if (nameCond && ageCond && heightCond && petCond) {
  console.log("WELCOME SPY!");
}else{
  console.log("Nothing to see here")
}
