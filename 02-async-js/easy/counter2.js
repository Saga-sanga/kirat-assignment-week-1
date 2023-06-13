function counter(start, end) {
  let counter = start;
  function increment() {
    let id;
    if (counter <= end) {
      console.log(counter);
      id = setTimeout(increment, 1000);
    } else {
      clearTimeout(id);
    }
    counter++;
  }
  increment();
}

counter(0, 30);
