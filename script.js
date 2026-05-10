<script>
// SHOW POPUP ON LOAD
window.onload = function() {
    if (!localStorage.getItem("popupShown")) {
        document.getElementById("welcomePopup").style.display = "block";
    }
}

// CLOSE POPUP
function closePopup() {
    document.getElementById("welcomePopup").style.display = "none";
    localStorage.setItem("popupShown", "true");
}

function scrollToSection(id){
 document.getElementById(id).scrollIntoView();
}

function submitBooking(e){
 e.preventDefault();
 alert("Booking saved (connect to database next)");
}

function buyTicket(){
 alert("Ticket system coming soon");
}

function login(e){
 e.preventDefault();
 let user = document.getElementById("username").value;
 let pass = document.getElementById("password").value;

 if(user === "admin" && pass === "1234"){
  document.getElementById("dashboard").classList.remove("hidden");
  alert("Login successful");
 } else {
  alert("Invalid login");
 }
}

function logout(){
 document.getElementById("dashboard").classList.add("hidden");
}
</script>

