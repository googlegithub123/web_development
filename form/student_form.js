





function Validate() {

  var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

  var a = document.getElementById("email").value;

  var b = a.length;

  var c = b - a.indexOf(".")-1;

  if (a.match(validRegex) && c >=3  ) {

    document.getElementById("alert1").innerHTML = "";

  } else {

    document.getElementById("alert1").innerHTML = "enter the correct email id";

  }

  var x = document.getElementById("name").value;
  var regex = /^[A-Za-z]+$/;
  if (x.length<5 || !(x.match(regex))) {

    document.getElementById("alert").innerHTML = "please enter the correct name";
  } else {
    document.getElementById("alert").innerHTML = "";
  }


}
