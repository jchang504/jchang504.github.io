$(document).ready(function() {
  console.log('localStorage contains:');
  for (var i = 0; i < localStorage.length; i++) {
    console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
});
