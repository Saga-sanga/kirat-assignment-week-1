function displayTime() {
  console.log(new Date().toLocaleTimeString('it-IT'));
  setTimeout(displayTime, 1000);
}

displayTime();
