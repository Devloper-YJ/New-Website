
function check(){

var email=document.getElementById("mail").Value;
var Pass=document.getElementById("mail").Value;

    if(email =("yuvraj.chudasama@gmail.com")){
        console.log(Pass);
        console.log(email);
        return false;
    }

error.textContent("Wrong Mail ID");

return false;

}
function validate(){
var em=document.getElementById("mail").Value;
// var pas=document.getElementById("password").Value;
// var rpas=document.getElementById("repassword").Value;
// var name=document.getElementById("name").Value;
// var mobile=document.getElementById("mob").Value;
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regex.test('em')){

        alert("Valid");
        
  return false;

    }
    else{

        alert("InValid");
    }
    return false;
}