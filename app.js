// document.write("2"+" saad")

// alert("thank u For Submitting The Form")

// console.log("ye hai j.s ki pehli class")



// var firstname = "Haider Ali";


// console.log(firstname)




// var firstName = "Haider "

// var centerName = "Ali "










// document.write (firstName + centerName + lastName)









// var num1 = 10

// var num2 = 10

// var num3 = 5



// document.write(num1+num3-num2)




// var num1 = 15 
// var num2 = 20 
// var num3 = 25 
// var num4 = 15

// var total = num1*num4+num2-num3


// document.write(total)























// var a = 5

// var b = ++a + ++a + a++ + ++a + a++ + a++
//          6  + 7   + 7   + 9   + 9   + 10


// document.write(b)
























// var a = 5

// var b = 10

// var c = --b + ++a + a++ - b-- + b++ + ++b + a++
//         9   +  6  +  6  - 9   + 8   + 10  + 7 



// document.write(c)














// var a = 12

// var b = 15

// var c = -5

// var d = 20



// var result = b + b++ + ++b - d + d++ + c-- + ++a - --a + a++ + c++ + 30 - 10
//             15 + 15  +17   - 20 + 20 + -5  +  13 -  12 +  12  + -4  + 30 - 10


// document.write(result)







// var hint = "Haider Ali"

// var hint2 = "20"

// var hint3 = "033440200219"

// var userName = prompt("What is Your Name?",hint)

// var userAge = prompt("what is Your Age?",hint2)

// var userContact = prompt("What is your Contact number?",hint3)


// document.write("userName is "+ hint+ "<hr>")
// document.write("userAge is "+ hint2+ "<hr>")
// document.write("userContact is "+ hint3+ "<hr>")









// var myNum = 5
// var userNum = parseInt(prompt("Enter Your Number")) 

// document.write(myNum+userNum)



// if ------------ eles


// = assign Value

// == equal

// > Greater

// < Less


// >= Greater equal

// <= less equal

// && AND


// | |  OR 



// var SabziLaoo = prompt ("Enter Sabzi")

// if (SabziLaoo == "aalo") {
//     document.write("Han aalo Le ao")

// }

// else{

//     document.write(SabziLaoo+" hi Le ao")


// }










// var mathMarks = prompt("Enter Your Math Marks")

// if (mathMarks >= 40) {
//   document.getElementById('math-result').innerHTML = "pass"
  
// }    

// else if (mathMarks < 40) {
//      document.getElementById('math-result').innerHTML = "fail";

// }


// var urduMarks = prompt("Enter Your Math Marks")

// if (urduMarks >= 40) {
//   document.getElementById('urdu-result').innerHTML = "pass"
  
// }    

// else if (urduMarks < 40) {
//      document.getElementById('urdu-result').innerHTML = "fail";

// }


// var englishMarks = prompt("Enter Your Math Marks")

// if (englishMarks >= 40) {
//   document.getElementById('english-result').innerHTML = "pass"
  
// }    

// else if (englishMarks < 40) {
//      document.getElementById('english-result').innerHTML = "fail";

// }



function calculate (){

var computer = document.getElementById("bookone").value;
var english = document.getElementById("booktwo").value;
var urdu = document.getElementById("bookthree").value;
var math = document.getElementById("bookfour").value;
var physics = document.getElementById("bookfive").value;


if(computer == ""
    || english == ""
    || urdu == ""
    || math == ""
    || physics == ""
    ){
        alert("plese fill all fields")
    }else if(
        computer > 100
        ||
        english > 100
        ||
        urdu > 100
        ||
        math > 100
        ||
        physics > 100
        ||
        computer < 0
        ||
        english < 0
        ||
        math < 0
        ||
        physics < 0
        ||
        urdu < 0){


        alert("Invalid input : marks can not be greater than 100 and less than 0!")

    }else{

        var totalMarks = 500;
        var grade = "";
        var totalObtainMarks =parseInt(computer) + parseInt(english) + parseInt(urdu) + parseInt(math) + parseInt(physics);
        var percentage = totalObtainMarks /500*100;
    

        if(percentage >= 80){
            grade = "A+";
        }

        else if(percentage >= 70){
            grade = "A"
        }
        else if(percentage >= 60){
            grade = "B"
        }
        else if(percentage >= 50){
            grade = "C"
        }
        else if(percentage >= 40){
            grade = "D"
        }
        else if(percentage >= 35){
            grade = "D"
        }
        else{
            grade = "Fail";
        }


        // setting values in html elements

        document.getElementById("grade").innerHTML = grade;
        document.getElementById("obtain").innerHTML = totalObtainMarks;
        document.getElementById("per").innerHTML=percentage.toFixed(2);


        if(computer >= 35){
            document.getElementById("computer").innerHTML = "pass"

        }else{
            document.getElementById("computer").innerHTML = "fail"

        }

        if(english >= 35){
            document.getElementById("english").innerHTML = "pass"

        }else{
            document.getElementById("english").innerHTML = "fail"

        }

        if(urdu >= 35){
            document.getElementById("urdu").innerHTML = "pass"

        }else{
            document.getElementById("urdu").innerHTML = "fail"

        }

        if(math >= 35){
            document.getElementById("math").innerHTML = "pass"

        }else{
            document.getElementById("math").innerHTML = "fail"

        }

        if(physics >= 35){
            document.getElementById("physics").innerHTML = "pass"

        }else{
            document.getElementById("physics").innerHTML = "fail"

        }

        


        


    }

}