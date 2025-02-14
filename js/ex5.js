function passwordVerification(){
  const realPassword = "secret";
  let attemptCount = 0;
  const maxAttempts = 3;
  while (attemptCount < maxAttempts){
    let passwordInput = prompt("Please Enter Your Password:");
    attemptCount++
    if (passwordInput === realPassword){
      alert(`You entered the correct password after ${attemptCount} attempts.`);
      return;
    } else{
      alert(`You have entered the wrong password.`)
    }
  }
  alert(`Your account is now locked! You input an incorrect password ${attemptCount} times. \nPlease come back after responding to the email in your inbox or after 24 hours.`)
}
passwordVerification();