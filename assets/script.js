// // assets/script.js
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the form from submitting

//         const fname = document.getElementById('fname').value;
//         const lname = document.getElementById('lname').value;
//         const dob = document.getElementById('DOB').value;
//         const phone = document.getElementById('phonenum').value;
//         const mail = document.getElementById('mail').value;
//         const gender = document.querySelector('input[name="gender"]:checked');
//         const dept = document.getElementById('dept').value;

//         if (!gender) {
//             alert("Please select your gender.");
//             return;
//         }

//         // Perform basic validation
//         if (phone.length !== 10 || isNaN(phone)) {
//             alert("Please enter a valid 10-digit phone number.");
//             return;
//         }

//         // Display an alert with the submitted data
//         alert(`Form Submitted! \n
//         Name: ${fname} ${lname}\n
//         Date of Birth: ${dob}\n
//         Phone Number: ${phone}\n
//         Email: ${mail}\n
//         Gender: ${gender.value}\n
//         Department: ${dept}`);

//         // Optionally submit the form after validation
//         // form.submit();
//     });
// });

document.getElementById('submitbtn').onclick=function(){

    event.preventDefault(); 


    const firstname=document.getElementById('fname').value;
    const lastname= document.getElementById('lname').value;
    const birthdate=document.getElementById('DOB').value;
    const phonenum=document.getElementById('phonenum').value;
    const email=document.getElementById('mail').value;
    const gender=document.getElementById('gender').value;
    const dept=document.getElementById('dept').value;

const phoneRegex =/^[6789]\d{9}$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!phoneRegex.test(phonenum)) {
    alert("Please enter a valid 10-digit Indian phone number starting with 7, 8, or 9.");
    return;
}
if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
}

if(!gender){
    alert("please select your gender!!");
    return;
}
if(!dept){
    alert('please select your deptartment!!');
    return;
}
// alert("Form submitted");
 document.getElementById("disp").innerHTML="Form submitted successfully!!";
}
document.getElementById("resetbtn").onclick=function(){
    document.getElementById('fname').innerHTML=" ";
     document.getElementById('lname').innerHTML=" ";
    document.getElementById('DOB').innerHTML= " ";
    document.getElementById('phonenum').innerHTML= " ";
    document.getElementById('mail').innerHTML= " ";
    document.getElementById('gender').innerHTML=" ";
    document.getElementById('dept').innerHTML=" ";

    document.getElementById("disp").innerHTML=" ";
}