let numberPicked = prompt("Please enter a number from 1-100:");
if (numberPicked >= 1 && numberPicked <= 100) {
  alert(`Thank you! You entered ${numberPicked}, a valid number.`)
}
else {
  alert(`Sorry, ${numberPicked} is not a valid entry.`)
} 