
  alert("Hello");
console.log("Hello! Welcome to my website. I am Mrinalini a UX/UI designer.")
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}