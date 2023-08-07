
// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."

var remainingfuel=parseFloat(prompt("Enter is your remaining fuel in the car in liters"));
var carfuel=0.25;
//if condition for fuelchecking

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
//Percentage of all the subject marks

let allsubjectmarks=subject1marks+subject2marks+subject3marks;
let percentage=(allsubjectmarks/Totalmarks)*100;
//Calculating Grades

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
//Showing the results as alert funtion
alert (`Percentage: ${percentage.toFixed(2)}`);
alert (`Grade: ${grade}`)
alert (`Remarks: ${remarks}`)


// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).

const literalArr=["cofee",true,1,null,undefined];

const stringArr=["abc","bcc","kkk"];

var numberArr=[1,2,3,4,5,6,7,8,78,35];

const boolArr=[false,true,false];

let mixedArr=[1,"abc",true,null,undefined,"red"];

var qualificationArr=["Master in Computer Sciene","Bachelor of education","Master of Physics"];

//Results for qualification array

document.writeln(`=>Ghazal's qualification is: ${qualificationArr[0]}`);
document.write("<br>");

document.write(`=>Awais's qualification is: ${qualificationArr[1]}`);
document.write("<br>");
document.write(`=>'s qualification is: ${qualificationArr[2]}`);


// 5)Write a program to store phone manufacturers in an array.

var phonemanufacturers=['Apple','Samsung','LG','Nokia crporation','OPPO','VIVO'];
document.write('<h2>Phone Manufacturers:</h2>');

//making list for manufaturers

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

var FIFO=[];

//Push elements into the array
FIFO.push("Orange");
FIFO.push("Apple");
FIFO.push("Banana");
FIFO.push("Grapes");


document.write('<h3>First in Fist out appraoch</h3>');
document.write(`The elements in array after pushing:${FIFO}`)
//Removing Fist element from the array
var elem1=FIFO.shift();

document.write("<br>");
document.write(`Removing First emlent the array is: ${FIFO}` );
//Removing Second element from the array
var elem2=FIFO.shift();

document.write("<br>");
document.write(`Removing Second emlent the array is: ${FIFO}` );

FIFO.push("Appricot");
FIFO.push("Pinapple")

//Adding two more elements in the array on the top of array
document.write("<br>");
document.write(`Again after adding the elements in the array is: ${FIFO}` );


//Removing two more element from the array from the top
var elem3=FIFO.shift();
var elem4=FIFO.shift();

document.write("<br>");
document.write(`Removing two more emlents from the array is: ${FIFO}` );
//Removed elements from thd array
document.write("<br>");
document.write(`Dequed elements: ${elem1}  ${elem2} ${elem3} ${elem4}` );




// 9)// Implement the LIFO (Last In First Out) approach using arrays.

var LIFO = [];

// Push elements onto the LIFO stack/array
LIFO.push("Orange");
LIFO.push("Apple");
LIFO.push("Banana");
LIFO.push("Grapes");

document.write('<h3>Last in First out approach</h3>');
document.write(`The elements in array after pushing: ${LIFO}`);

// Remove and retrieve the last element using pop function
var elem1 = LIFO.pop();
document.write("<br>");
document.write(`Removing Last element, the array is: ${LIFO}`);

// Remove and retrieve the second-to-last element using pop function
var elem2 = LIFO.pop();
document.write("<br>");
document.write(`Removing Second-to-last element, the array is: ${LIFO}`);

// Push more elements onto the LIFO array
LIFO.push("Apricot");
LIFO.push("Pineapple");

document.write("<br>");
document.write(`Again after adding elements, the array is: ${LIFO}`);

// Remove and retrieve two more elements (pop)
var elem3 = LIFO.pop();
var elem4 = LIFO.pop();

document.write("<br>");
document.write(`Removing two more elements from the array: ${LIFO}`);
document.write("<br>");
document.write(`Popped elements: ${elem1} ${elem2} ${elem3} ${elem4}`);



// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.

var array=["hanger","banana","apple","ice","sugar"];
var userinput=prompt( "search by user input");
//includes function for checking that item is in the array or not

if(array.includes(userinput)){
    alert("Item is in the list");
}
    else{
alert("Item is not in the list");
    }







// 11)Write a program to identify the largest number in the given array.

var array1=[30,49,61,34,80,46,21,50,90];
var largestnumber=[0];

//loop for cheking the largest number in the array

for(i=0; i<array1.length; i++){
if(array1[i]>largestnumber){
    largestnumber=array1[i];
} 
} 
document.write('<h2>Largest number in array is:</h2>'); 
document.write(largestnumber);



// 12)Write a program to identify the smallest number in the given array.
var array2=[30,49,61,34,80,46,21,50,90];
var smallestnumber=[80];

//For loop for checking the smallest number in the array


for(i=0; i<array2.length; i++){
if(array2[i]<smallestnumber){
    smallestnumber=array2[i];
} 
} 
document.write('<h2>Smallest number in array is:</h2>'); 
document.write(smallestnumber);
document.write("<br>");

// 13)Write a program to print multiples of 5 ranging from 1 to 100.
document.write("<br>")
document.write("<h3> Multiples of 5:  </h3> ");

//For loop for creating multiples of 5 from 1 t 100

for (let i=1; i<=100; i++){

    if(i%5==0)
    {
    document.write(i+" ")
    }
}



// Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.


var number1=parseFloat(prompt("Enter the first number"));
var number2=parseFloat(prompt("Enter the second number"));
//Adding two numners

var sum=number1+number2;
document.write("<h3>Addition,subtraction,multiplication,division & modulus</h3>")
document.write("Sum of the entered two numbers is:"+ sum);



// 14)Repeat task1 for subtraction, multiplication, division & modulus.

//Subtraction of two numbers

var sub=number1-number2;
document.write("<br>");
document.write("The subtraction of two number is:"  + sub);

//multiplication of two numbers


var multiplication=number1*number2;
document.write("<br>");
document.write("The multiplication of two number is:"  + multiplication);


// Division of two numbers

var division=number1/number2;
document.write("<br>");
document.write("The division of two number is:"  + division);

//Modulus of two numbers

var modulus=number1%number2;
document.write("<br>");
document.write("The modulus of two number is:"  + modulus);

//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."
var city=prompt("Plaese enter the city").toUpperCase();

if (city=="KARACHI")
{
    alert("Welcome to the city of lights");
}
else{
    alert("Welcome to the entered city");
}
// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."

const gender = prompt("Enter your gender:").trim().toLowerCase();

//Condition for checking male or female
if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Gender not recognized.");
}
//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."

var signal=prompt("Write the color").toLowerCase();


switch(signal){


    case "red":
    alert("Must stop");
    break;

    case "yellow":
        alert("Ready to move");
        break;

        case "green":
            alert("Move now");
            break;

            default:
            alert("Enter the correct color");
            break;

    }