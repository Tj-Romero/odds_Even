document.addEventListener("DOMContentLoaded", () => {
    // state
    let numberBank = [];
    let oddNumbers = [];
    let evenNumbers = [];
  
  // function to add a number to the 'numberBank' array after validating it.
  // it checks if the input is a number and not an empty string.
  function addNumberToBank(number) {
      if (!isNaN(number) && number !== "") {
        // parse the number to an integer and add it to the numberBank array.
        numberBank.push(parseInt(number));
      }
  }
  // function to sort a single number from the 'numberBank' array.
  function sortOneNumber() {
      if (numberBank.length > 0) {
        // remove the first number from the array and store it in 'number'.
        let number = numberBank.shift();
        // call sortNumber to sort the number into odd or even.
        sortNumber(number);
      }
  }
  // function to sort all numbers from the 'numberBank' array.
  function sortAllNumbers() {
      // foop until the 'numberBank' array is empty.
      while (numberBank.length > 0) {
        // remove the first number from the array and store it in 'number'.
        let number = numberBank.shift();
        // call sortNumber to sort the number into odd or even.
        sortNumber(number);
      }
  }
  // function to sort a number into odd or even and add it to the respective array.
  function sortNumber(number) {
      // check if the number is even.
      if (number % 2 === 0) {
        // add the number to the 'evenNumbers' array if it is even.
        evenNumbers.push(number);
      } else {
        // add the number to the 'oddNumbers' array if it is odd.
        oddNumbers.push(number);
      }
  }
    // update display
    function updateDisplay() {
      document.querySelector("#numberBank output").textContent =
        numberBank.join(", ");
      document.querySelector("#odds output").textContent = oddNumbers.join(", ");
      document.querySelector("#evens output").textContent =
        evenNumbers.join(", ");
    }
    // event listeners
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      let number = this.elements["number"].value;
      addNumberToBank(number);
      updateDisplay();
      this.reset(); // clear form
    });
    document.getElementById("sortOne").addEventListener("click", function () {
      sortOneNumber();
      updateDisplay();
    });
  
    document.getElementById("sortAll").addEventListener("click", function () {
      sortAllNumbers();
      updateDisplay();
    });
  });
  