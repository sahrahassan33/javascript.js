//if
//if else 
//if else if 
// switch case default 

let age=20;

if(age >=18 && age <=60) {
  console.log("you can watch the movie in Cinema")
} else if (age > 60)
{console.log ('You can watch the movie in Cinema, if you pay')

}
// conde snippet 

switch (age) {
  case 18:
    console.log("You can watch the movie in Cinema, please pay");
    break;
  case 60:
    console.log("You can watch the movie in Cinema, don't pay");

  default:
    console.log("You cannot watch the movie in Cinema, you are a minor");
    break;

}

