function simpleCalculation() {
  let num1Entered = prompt("Please enter the first integer:");
  let num2Entered = prompt("Please enter the second integer:");

  if (!isNaN(num1Entered) && num1Entered.trim() !== "" && !isNaN(num2Entered) && num2Entered.trim() !== "") {
    let num1 = parseInt(num1Entered);
    let num2 = parseInt(num2Entered);
    let result1 = num1 + num2;
    let result2 = num1 - num2;
    let result3 = num1 * num2;
    let result4 = num1 / num2;
    let result5 = num1 % num2;

    // Display results
    let result = `Addition: ${result1} \n Subtraction: ${result2} \n Multiplication: ${result3} \n Division: ${result4} \n Modulus: ${result5}`;
    alert(result);
  } else {
    alert("Invalid input. Please enter an integer.");
  }
}

// Call the function
simpleCalculation();