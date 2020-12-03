function myFunction() {
    var x = document.getElementById("select").selectedIndex;
    var y = document.getElementById("select").options;
    alert("Index: " + y[x].index + " is " + y[x].text);
  }