// Q no 1
var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shiirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];
  
    console.log(itemsArray);
  
    var array1 = (itemsArray[0].price * itemsArray[0].quantity);
    var array2 = (itemsArray[1].price * itemsArray[1].quantity);
    var array3 = (itemsArray[2].price * itemsArray[2].quantity);
    var array4 = (itemsArray[3].price * itemsArray[3].quantity);
  
    console.log(array1);
    console.log(array2);
    console.log(array3);
    console.log(array4);
  
//   Q no 2
  
  var person = {
    firstName: "taha",
    lastName: "ali",
    email: "taha@gmail.com",
    password: "*******",
    age: 26,
    gender: "male",
    city: "karachi",
    country: "pakistan"
  }
  var person5=prompt("enter first name")
  var person4=prompt("enter last name")
  var person2 = prompt("Enter Age");
  var person3 = prompt("Enter City")

    if (person2  == person.age && person3== person.city && person4==person.lastName&&person5==person.firstName) {
  alert ("valid")
    }
    else{
      alert("invalid")
    }
  
//   Q no 3
  
  function Plan(name, age, dob, year){
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.year = year;
  }
  var plan1 = new Plan("kashif", 26, "jan", 1990);
  var plan2 = new Plan("taha", 24, "oct", 1998);
  console.log(plan1, plan2);
  
  
//   Q no 4
  
  function Person(name, gender, address, education, profession){
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;  
  }
  
  function good(){
    var personName = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;
  
  
    const Person = new Area(personName, 24, address, education, profession);
    console.log(myArea);
  }