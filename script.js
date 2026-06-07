const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Utility function to create delayed promises
function delayed(value, delay, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback(value));
    }, delay);
  });
}

button.addEventListener("click", () => {
  let num = Number(input.value);

  new Promise((resolve) => {
    setTimeout(() => {
      output.innerText = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then((val) => {
      return delayed(val, 2000, (n) => {
        const res = n * 2;
        output.innerText = `Result: ${res}`;
        return res;
      });
    })
    .then((val) => {
      return delayed(val, 1000, (n) => {
        const res = n - 3;
        output.innerText = `Result: ${res}`;
        return res;
      });
    })
    .then((val) => {
      return delayed(val, 1000, (n) => {
        const res = n / 2;
        output.innerText = `Result: ${res}`;
        return res;
      });
    })
    .then((val) => {
      return delayed(val, 1000, (n) => {
        const res = n + 10;
        output.innerText = `Final Result: ${res}`;
        return res;
      });
    });
});