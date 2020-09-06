function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log('Finished Function');
}

function clickHandler() {
  console.log('Click Handler');
}

//listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('Finished Execution');
