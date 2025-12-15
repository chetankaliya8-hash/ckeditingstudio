console.log("CK Editing Studio Website Loaded");
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
});
function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let msg = document.getElementById("msg").value;

  let url = "https://wa.me/919313548926?text="
    + "Name: " + name + "%0A"
    + "Message: " + msg;

  window.open(url, "_blank");
}

