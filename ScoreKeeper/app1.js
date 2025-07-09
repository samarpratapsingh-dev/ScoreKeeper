// alert("Hello");

const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");

// When we click on player1, we want to take whatever the current score is for player1 & add 1 to it. Then update this span to have that new Score. So we need to keep track of whatever the current score is. We would have a Variable do that. We need Variables to keep track of scores for both players.
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;

// We need to make sure if anybody gets to 'winningScore' in our case, we are done, that's the end. We need to keep track of that 'winningScore' like we are & then we need to keep track of whether anybody has gotten to that 'winningScore'. OR we are still playing game or not. That's just a 'yes', 'no'. A Boolean. So let's make a Boolean called 'isGameOver'. If anyone hits the 'winningScore', we would set 'isGameOver' to 'true'.
let isGameOver = false;

// So it starts at Zero (0), if we click, we add one to it, & then we update that Display.
p1Button.addEventListener("click", function () {
  //   alert("clicked");

  if (!isGameOver) {
    p1Score += 1;

    // We are preventing us from continuing to click & add to the score.
    if (p1Score === winningScore) {
      isGameOver = true;

      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    // We set 'isGameOver' to true, is so that if you click again, none of the code would run. We can't increment any further.

    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;

    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }

    p2Display.textContent = p2Score;
  }
});

// When we select, when we make a change over here, we want to make sure that our new 'winning score' is whatever the value is in the 'select' Element. But, also we need to reset the game. We need to select the 'select' Element from the HTML file. When the value in 'select' changes, we do want something to be triggered. We need to figure out how to get the Value out, & Update the 'winning score'. The 'select' Value would be a String, but we need it to be a Number. So we need to turn it into a number first. We need to reset the Display of scores for both players.

winningScoreSelect.addEventListener("change", function () {
  // alert("change!");
  winningScore = parseInt(this.value); // That's how we take a String & get a Number out of it. This would update the 'winningScore' Variable.

  // Below, we are executing 'reset', because this is the Callback. We are passing an Anonymous Function as a Callback, then we execute 'reset' inside.
  reset();
});

// Below, we are passing a reference. We are not executing 'reset'. Here, we are passing 'reset' as the callback.
resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;

  //   We also need to update the Score Display.
  p1Display.textContent = 0;
  p2Display.textContent = 0;

  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}

// A CSS Framework called Bulma. We don't have anything with the class of winner or loser currently in the DOM.

// We can disable the Buttons so that when you do score & you win, you can't continue to click. We should always indicate that the Button is disabled & there is an attribute called Disabled that we can set. Bulma has built-in styles for Disabled Buttons. But upon a Reset, we still need to un-disable.
