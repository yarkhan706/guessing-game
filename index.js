let total_guess = 3;
document.getElementById("guess-no.").innerHTML = total_guess;
let answer = Math.floor(Math.random() * 10 + 1);


document.getElementById("mybtn").onclick = function () {
  let guess = document.getElementById("text-box").value;
  guess = Number(guess);
  if (guess == answer) {
    document.getElementById(
      "result"
    ).innerHTML = `Your guess is correct.Number was ${answer}`;
    total_guess = 3;
    document.getElementById("guess-no.").innerHTML = total_guess;
    answer = Math.floor(Math.random() * 10 + 1);
  } else if (guess == 0) {
    document.getElementById("result").innerHTML = `PLEASE ENTER A NUMBER(1-10)`;
  } else if (guess > answer) {
    document.getElementById(
      "result"
    ).innerHTML = `The answer is less than ${guess}`;
    total_guess--;
    document.getElementById("guess-no.").innerHTML = total_guess;
    if (total_guess == 0) {
      document.getElementById(
        "result"
      ).innerHTML = `GAME OVER...REFRESHED PAGE TO START NEW OR TRY TO GUESS THE CORRECT NUMBER.`;
    }
  } else if (guess < answer) {
    document.getElementById(
      "result"
    ).innerHTML = `The answer is greater than ${guess}`;
    total_guess--;
    document.getElementById("guess-no.").innerHTML = total_guess;
    if (total_guess == 0) {
      document.getElementById(
        "result"
      ).innerHTML = `GAME OVER...REFRESHED PAGE TO START NEW OR TRY TO GUESS THE CORRECT NUMBER.`;
    }
  }
};
