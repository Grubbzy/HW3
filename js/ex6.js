function multiplicationTable(){
  let numberEntered = parseInt(prompt("Enter a number:"));
  if (isNaN(numberEntered)) {
    alert("Invalid input. Please enter a valid number.");
    return;
  }
  let output = `Multiplication Table for ${numberEntered}:\n`;
  for (let i = 0; i <= 10; i++) {
    output += `${numberEntered} x ${i} = ${numberEntered * i}\n`;
  }
  alert(output);
}
multiplicationTable();