/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  //take the string, remove the delimiter and turn it into an int
  let message = "";
  time = time.split(":");
  time = time[0] + time[1];
  time = parseInt(time);
  //Great! Now set & return message based on time :)
  time < 1200
    ? (message = "Good Morning")
    : time < 1700
    ? (message = "Good Afternoon")
    : time < 2400
    ? (message = "Good Evening")
    : (message = "Call Doc Brown, You're Outta Time!");
  return message;
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}
