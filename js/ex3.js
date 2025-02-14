function getFollowingDay(dayEntered) {
  
  dayEntered = dayEntered.trim().toLowerCase();
  const todayCheck = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  if (dayEntered.length !== 3 || !todayCheck.includes(dayEntered)) {
    return "Invalid input. Enter a 3 letter, day-of-the-week abbreviation."
  }
  let followingDay;
  switch(dayEntered) {
    case "mon":
      followingDay = "tue";
      break;
    case "tue":
      followingDay = "wed";
      break;
    case "wed":
      followingDay = "thu";
      break;
    case "thu":
      followingDay = "fri";
      break;
    case "fri":
      followingDay = "sat";
      break;
    case "sat":
      followingDay = "sun";
      break;
    case "sun":
      followingDay = "mon";
      break;
  }
  return `You entered: ${dayEntered}.\nThe following day is: ${followingDay}`
}

let dayEntered = prompt("Please enter a day of the week in lowercase three letter abbreviation:");
let result = getFollowingDay(dayEntered);
//This is declaring the variable result will be the getFollowingDay(today) function's returns.
alert(result);