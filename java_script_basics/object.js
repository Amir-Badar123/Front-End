//////PROBLEM 1////////


//GIVEN THE OBJECT:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function () {
    console.log(this.name.length);
  }
}



//PROBLEM 2//

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  report: function () {
    alert("Name is:"+this.name+","Job is "+this.job+","age is "+this.age+");
  }

  // PROBLEM 3//

  var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastName: function () {
      console.log(this.name.split(" ")[1]);
    }
