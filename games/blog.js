function sendMail(){
    var params={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    mobile:document.getElementById("mobile").value,
    message:document.getElementById("message").value,
}
emailjs.send("service_77qz6io","template_7f2gbis",params).then(function(res){
    alert("Email sent Successfully");

})
}