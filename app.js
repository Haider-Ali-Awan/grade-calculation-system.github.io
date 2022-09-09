// document.write("2"+" saad")

// alert("thank u For Submitting The Form")

// console.log("ye hai j.s ki pehli class")



// var firstname = "Haider Ali";


// console.log(firstname)




// var firstName = "Haider "

// var centerName = "Ali "


// var lastName = "Awan "


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

var a = parseInt (document.getElementById("bookone").value);
var b = parseInt (document.getElementById("booktwo").value);
var c = parseInt (document.getElementById("bookthree").value);
var d = parseInt (document.getElementById("bookfour").value);
var e = parseInt (document.getElementById("bookfive").value);



if (a > 100 || b>100  || c>100  || d>100 || e>100){
    alert("Please Enter Correct marks");


}

else{
    var obtain = a+b+c+d+e;
    document.getElementById("obtain").innerHTML=obtain
    var per = obtain/500*100;
    document.getElementById("per").innerHTML=per

}

if (a >= 35 && b >= 35  && c >= 35  && d >= 35 && e >= 35) {
    document.getElementById("remarks").innerHTML="pass";
}


else{
    document.getElementById("remarks").innerHTML="Fail";
}





if (per >= 80) {
    document.getElementById("grade").textContent="A+";
}


else if (per >= 70) {
    document.getElementById("grade").textContent="A";
}




else if (per >= 60) {
    document.getElementById("grade").textContent="B";
}






else if (per >= 50) {
    document.getElementById("grade").textContent="C";
}








else if (per >= 40) {
    document.getElementById("grade").textContent="D";
}










else if (per >= 35) {
    document.getElementById("grade").textContent="E";
}



else{
    document.getElementById("grade").textContent="F";
}








return false;
    

}