let intervalId;

function correct(subject){
   document.querySelector(`header`).innerHTML = "CORRECT";
    document.querySelector(`#${subject} h1`).classList.toggle("success-text", true);
    document.querySelector(`#${subject} h1`).classList.toggle("error-text", false);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      let color = "#28a745";
      if (counter++ % 2) {
        color = "#1DE9B6";
      }
      document.querySelector(`#${subject}`).style["background-color"] = color;
    }, 500);
}
function incorrect(subject){
   document.querySelector(`header`).innerHTML = "INCORRECT";
    document.querySelector(`#${subject} h1`).classList.toggle("success-text", false);
    document.querySelector(`#${subject} h1`).classList.toggle("error-text", true);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      let color = "#FF3D00";
      if (counter++ % 2) {
        color = "#BF360C";
      }
      document.querySelector(`#${subject}`).style["background-color"] = color;
    }, 500);
}








function submitMathAns() {
  const answer = parseInt(document.querySelector("#math input").value);
  if (answer === 4) {
    // correct
    correct("math");
  } else {
    // incorrect
    incorrect("math");
  }
}

function submitEnglishAns() {
  const answer = document.querySelector("#english input[name='webdev']:checked")
    .value;
  if (answer === "website") {
    // correct
    correct("english");
  } else {
    // incorrect
    incorrect("english")
  }
}

function submitScienceAns() {
  const answer = document.querySelector("#science input").value;
  if (answer.toLowerCase() === "blue") {
    // correct
    correct("science")
  } else {
    // incorrect
   incorrect("science") 
  }
}