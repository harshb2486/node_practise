function countdown(callback) {
    setTimeout(() => {
        callback("countdown finished");
  }, 2000);
}

countdown((val) => {
    console.log("callback executed with value:", val);
});