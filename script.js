function submitAnswers() {
  const total = 10;
  let score = 0;

  //get user input
  const q1 = document.forms["quizForm"]["q1"].value;
  const q2 = document.forms["quizForm"]["q2"].value;
  const q3 = document.forms["quizForm"]["q3"].value;
  const q4 = document.forms["quizForm"]["q4"].value;
  const q5 = document.forms["quizForm"]["q5"].value;
  const q6 = document.forms["quizForm"]["q6"].value;
  const q7 = document.forms["quizForm"]["q7"].value;
  const q8 = document.forms["quizForm"]["q8"].value;
  const q9 = document.forms["quizForm"]["q9"].value;
  const q10 = document.forms["quizForm"]["q10"].value;

  //Validation

  for (i = 1; i <= total; i++) {
    if (eval("q" + 1) == null || eval("q" + i) == "") {
      alert("You missed question " + i);
      return false;
    }
  }

  //For the form not to default
  // return false;

  const answers = ["b", "d", "c", "b", "c", "a", "a", "b", "c", "b"];

  //Check Answers

  for (i = 1; i <= total; i++) {
    console.log(answers[i - 1]);
    console.log(eval("q" + i));

    if (eval("q" + i) == answers[i - 1]) {
      score++;
    }
  }

  // alert(`You scored ${score} out of ${total}`);

  let results = document.getElementById("results");
  results.innerHTML = `<h3>You scored <span>${score}</span> out of <span>${total}</span></h3>`;
  console.log("test");
  console.log(score);
  return false;
}
