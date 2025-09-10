let savedpass = null;
const maxtry = 3;
let curtry = 1;

const newpassinp = document.getElementById("newpass");

const savebtn = document.getElementById("savepass");

const checkpassinp = document.getElementById("checkpass");

const checkbtn = document.getElementById("checkbtn");

const result = document.getElementById("result");

savebtn.addEventListener("click" ,  function() {
    if (newpassinp.value.trim()=== "") {
      result.textContent = "You must enter a new password"
      result.style.color = "red";
    } else {
      savedpass = newpassinp.value;
      result.textContent = "New Password is saved succesfully!";
      result.style.color = "green";
      newpassinp.value = "";
      curtry = 0;
    };
});

checkbtn.addEventListener("click", function() {

  if (savedpass == null){
    result.textContent = "You must enter a new password first"
  } else {
    if (checkpassinp.value.trim() ==="") {
      result.textContent = "you must enter the password";
      result.style.color = "red";
    } else {
        if (curtry >= maxtry) {
          result.textContent = "You tried too many wrong passwords!!!";
          result.style.color = "red";
          location.replace("blocked.html");
          
        }
        else {
          if (checkpassinp.value.trim() ===savedpass) {
            result.textContent = "You entered the psassword correct!";
            result.style.color = "green";
            checkpassinp.value = "";
            curtry = 0;
          } else {
            result.textContent = "You entered the password wrong please try again";
            result.style.color = "red";
            checkpassinp.value = "";
            curtry = curtry +1
        }
      }
    }
  }
})