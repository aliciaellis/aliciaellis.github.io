function myFunction(x) {
  document.getElementById("navWrap").classList.toggle("change");
  var x =   document.getElementsByClassName("navexp").classList.toggle("change");
}

function validateAccount() {

  var xTemp = document.forms["myAccount"]["firstName"].value;
  var yTemp = document.forms["myAccount"]["lastName"].value;
  var zTemp = document.forms["myAccount"]["email"].value;
  var uTemp = document.forms["myAccount"]["myPwd"].value;


  if (xTemp == "") {
    alert("First name must be filled out");
    document.getElementById("firstName").style.borderColor="red";
    return false;
  }
  else if (yTemp == "") {
    alert("Last name must be filled out");
    document.getElementById("lastName").style.borderColor="red";
    return false;
  }
  else if (zTemp == "") {
    alert("Email must be filled out");
    document.getElementById("email").style.borderColor="red";
    return false;
  }
  else if (uTemp == "") {
    alert("Password must be filled out");
    document.getElementById("myPwd").style.borderColor="red";
    return false;
  }
  else{
    document.location="shipping.html";
  }

}

function validateAddress() {

  var xTemp = document.forms["myAddress"]["firstNameA"].value;
  var yTemp = document.forms["myAddress"]["lastNameA"].value;
  var zTemp = document.forms["myAddress"]["address"].value;
  var uTemp = document.forms["myAddress"]["postcode"].value;
  var aTemp = document.forms["myAddress"]["suburb"].value;

  if (xTemp == "") {
    alert("First name must be filled out");
    document.getElementById("firstNameA").style.borderColor="red";
    return false;
  }
  else if (yTemp == "") {
    alert("Last name must be filled out");
    document.getElementById("lastNameA").style.borderColor="red";
    return false;
  }
  else if (zTemp == "") {
    alert("Address must be filled out");
    document.getElementById("address").style.borderColor="red";
    return false;
  }
  else if (uTemp == "") {
    alert("Postcode must be filled out");
    document.getElementById("postcode").style.borderColor="red";
    return false;
  }
  else if (uTemp == "") {
    alert("Suburb must be filled out");
    document.getElementById("suburb").style.borderColor="red";
    return false;
  }
  else{
    document.location="Payement.html";
  }
}
function validatePayment() {

  var xTemp = document.forms["myPayment"]["CardNumber"].value;
  var yTemp = document.forms["myPayment"]["CardName"].value;
  var zTemp = document.forms["myPayment"]["Expiry"].value;
  var uTemp = document.forms["myPayment"]["cvc"].value;

  if (xTemp == "") {
    alert("Card number must be filled out");
    document.getElementById("CardNumber").style.borderColor="red";
    return false;
  }
  else if (yTemp == "") {
    alert("Card name must be filled out");
    document.getElementById("CardName").style.borderColor="red";
    return false;
  }
  else if (zTemp == "") {
    alert("Expiry must be filled out");
    document.getElementById("Expiry").style.borderColor="red";
    return false;
  }
  else if (uTemp == "") {
    alert("CVC must be filled out");
    document.getElementById("cvc").style.borderColor="red";
    return false;
  }
  else{
    document.location="onboard.html";
  }
}
