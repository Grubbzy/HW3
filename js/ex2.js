function getNameAndCollegeStatus() {
  let nameEntered = prompt("Please enter your first and last name: ");
  let stringCheck = String(nameEntered).trim();
  if (stringCheck === "") {
    alert(`You entered no input.`);
  }
  {const regex = /^[a-zA-Z\s]*$/;
  if (!regex.test(stringCheck)) {
    alert(`You entered ${stringCheck} which has special characters and/or numbers in it.`);
  }}
  //This is a function I found in js that stands for regular expression. Depending on how you modify the constraints you are able to allow just numbers, just letters, just special letters, etc. for however you would like the user input to be checked. I also put the regex constraint within curly brackets to ensure that the next use of regex will be a different constraint for the numerical input.
  let collegeUnits = prompt("Please enter how many college units you have completed: ");
  let numberCheck = collegeUnits.trim();
  if (numberCheck === "") {
    alert(`You entered no input.`);
  }
  {const regex = /^[0-9\s]*$/;
  if (!regex.test(numberCheck)) {
    alert(`Your input is invalid.`);
  }}
  if (collegeUnits >= 0 && collegeUnits <= 30) {
    let gradeStanding = "freshman"
    console.log(`Hello ${nameEntered}.\n Your grade standing is ${gradeStanding}.`
    )
  }
  else if (collegeUnits >= 31 && collegeUnits <= 60) {
    let gradeStanding = "sophomore"
    console.log(`Hello ${nameEntered}. \n Your grade standing is ${gradeStanding}.`
    )
  }
  else if (collegeUnits >= 61 && collegeUnits <=90) {
    let gradeStanding = "junior"
    console.log(`Hello ${nameEntered}. \n Your grade standing is ${gradeStanding}.`
    )
  }
  else if (collegeUnits >= 91) {
   let gradeStanding = "senior"
    console.log(`Hello ${nameEntered}. \n
      Your grade standing is ${gradeStanding}.`
    )
  }
}

getNameAndCollegeStatus();