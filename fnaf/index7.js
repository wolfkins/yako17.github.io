function myFunction1 (num) {
  alert("You called 'myFunction1()', with the argument: " + num);
}

function myFunction2 (num) {
  alert("You called 'myFunction2()', with the argument: " + num);
}



function myFunction (button) {
  var x = button.id;
  switch (x) {
      case '1':
          myFunction1(x);
          break;
      case '2':
          myFunction2(x);
          break;
      default:
          return false;
  }
}