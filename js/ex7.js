function nextSecond(){
  let hours = parseInt(prompt("Enter hours (0-23):"));
  let minutes = parseInt(prompt("Enter minutes (0-59):"));
  let seconds = parseInt(prompt("Enter seconds (0-59):"));
  if (
    isNaN(hours)||hours < 0||hours > 23||isNaN(minutes)||minutes < 0||minutes > 59||isNaN(seconds)||seconds < 0||seconds > 59
  ) {
    alert("Invalid input. Please enter correct values (ie. hours[0-23], minutes[0-59], seconds[0-59]");
    return;
  }
  let timeEntered = `${timeFormat(hours)}h${timeFormat(minutes)}m${timeFormat(seconds)}s`;
  alert(`Time entered: ${timeEntered}`);
  seconds += 1;
  if (seconds > 59) {
    seconds = 0;
    minutes += 1;
    if (minutes > 59) {
      minutes = 0;
      hours += 1;
      if (hours > 23) {
        hours = 0;
      }
    }
  }
  let nextTime = `${timeFormat(hours)}h${timeFormat(minutes)}m${timeFormat(seconds)}s`;
  alert(`One second later: ${nextTime}`);
}
function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}
//Through some videos online I learned that you can use a question mark as another way to do if-else operations.
//This opens the door for some super lean code and gives so many options. This is the how the results would be formatted into hh:mm:ss.
nextSecond();