
// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."

var remainingfuel=parseFloat(prompt("Enter is your remaining fuel in the car in liters"));
var carfuel=0.25;

if(remainingfuel<carfuel){
    alert("please refill the fuel in your car.");
}



// 2)Run this script and check whether alert messages would be displayed or not (various conditions provided).

// 3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.

let subject1marks=parseFloat(prompt("Enter marks for subject maths"));
let subject2marks=parseFloat(prompt("Enter marks for subject physics"));
let subject3marks=parseFloat(prompt("Enter marks for subject Englist"));
let Totalmarks=parseFloat(prompt("Enter the total marks"));
let grade="";
let remarks="";

let allsubjectmarks=subject1marks+subject2marks+subject3marks;
let percentage=(allsubjectmarks/Totalmarks)*100;

if(percentage<=100&&percentage>=90)
{
    grade="A";
    remarks="Excellent"
}
else if(percentage<=89&&percentage>=80){
    grade="B";
    remarks="Very good";
}
else if(percentage<=79&&percentage>=70){
    grade="C";
    remarks="Good";
}
else if(percentage<=69&&percentage>=60){
    grade="D";
    remarks="Average";
}
else if(percentage<=59&&percentage>=50){
    grade="E";
    remarks="Improvement needed";
}
else{
grade="F";
remarks="Fail";}

alert (`Percentage: ${percentage.toFixed(2)}`);
alert (`Grade: ${grade}`)
alert (`Remarks: ${remarks}`)


// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).

const literalArr=["cofee",true,1,null,undefined];
const stringArr=["abc","bcc","kkk"];
var numberArr=[1,2,3,4,5,6,7,8,78,35];
const boolArr=[false,true,false];
let mixedArr=[1,"abc",true,null,undefined,"red"];
var qualificationArr=["Master in Computer Sciene","Bachelor of education","Master of Physics"]

document.writeln(`=>Ghazal's qualification is: ${qualificationArr[0]}`);
document.write("<br>");

document.write(`=>Awais's qualification is: ${qualificationArr[1]}`);
document.write("<br>");
document.write(`=>'s qualification is: ${qualificationArr[2]}`);


// 5)Write a program to store phone manufacturers in an array.

var phonemanufacturers=['Apple','Samsung','LG','Nokia crporation','OPPO','VIVO'];
document.write('<h2>Phone Manufacturers:</h2>');
document.write('<ul>');
for (let i = 0; i < phonemanufacturers.length; i++) {
  document.write('<li>' +phonemanufacturers[i] + '</li>');
}
document.write('<br>');

// 6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.

let studentscore=[30,20,56,49,90,70,67];

studentscore.sort(function(a,b)
{

    return a-b;
});


document.write('<h2>Student scores</h2>');
document.write(studentscore);





// 7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].

const Array1= ["This", "is", "my", "cat"]
const a= Array1.join('  ');                                  
document.write('<h2>String</h2>')
document.write(a);

// 8)Implement the FIFO (First In First Out) approach using arrays.

// 9)// Implement the LIFO (Last In First Out) approach using arrays.

// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.

// 11)Write a program to identify the largest number in the given array.

// 12)Write a program to identify the smallest number in the given array.

// 13)Write a program to print multiples of 5 ranging from 1 to 100.
// Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.

// 14)Repeat task1 for subtraction, multiplication, division & modulus.

//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."

// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."

//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."
