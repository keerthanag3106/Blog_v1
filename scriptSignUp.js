let eye_icon_password=document.querySelector(".eye")
let paswrd=document.querySelector(".pass__wrd")
let eye_icon_confirmpassword=document.querySelector(".eyee")
let confirmPaswrd=document.querySelector(".pass__wrdd")
// let email=document.querySelector(".mail")


let showPwd=false;
let showConfirmPwd=false;



eye_icon_password.addEventListener("click",()=>{
    console.log("clicked "+showPwd+"password");
    showPwd=!showPwd;
    if(!showPwd){
        paswrd.type="password";
        eye_icon_password.src="./assets/eye.png";
    }
    else{
        paswrd.type="text";
        eye_icon_password.src="./assets/eye_closed.png";
    }
})


eye_icon_confirmpassword.addEventListener("click",()=>{
    console.log("clicked "+showConfirmPwd+"confirm");
    showConfirmPwd=!showConfirmPwd;
    if(!showConfirmPwd){
        confirmPaswrd.type="password";
        eye_icon_confirmpassword.src="./assets/eye.png";
    }
    else{
        confirmPaswrd.type="text";
        eye_icon_confirmpassword.src="./assets/eye_closed.png";
    }
})



let submit_signUp=document.querySelector("subSignButton");
function changeScreen(event){
    event.preventDefault();
    alert("Credentials saved succesfully, Please Login")
    location.replace("loginPage.html");    
}
