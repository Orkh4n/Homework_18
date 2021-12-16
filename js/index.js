function ox_login(){
   let username = document.getElementById("ox_name").value
   let surname = document.getElementById("ox_surname").value
   let year = parseInt(document.getElementById("ox_year").value)
if(username === "Orxan" && surname === "Eliyev" && year === 1990){
    ox_write.innerHTML="welcome "+ username + " " + surname 
}else{
    ox_write.innerHTML="Melumatlar yalnisdir"
}
}
