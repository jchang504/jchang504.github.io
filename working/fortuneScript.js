var fortunes = [
//Proverbs
"People are just as happy as they make up their minds to be.",
"Knowledge helps you make a living; wisdom helps you make a life.",
"Everybody is ignorant, only on different subjects.",
"A day of worry is more exhausting than a week of work.",
"Experience is the name everyone gives to their mistakes.",
"A true friend is someone who is there for you when he'd rather be anywhere else.",
"Either you can or you can't. Either way you are right.",
"The virtue lies in the struggle, not in the prize.",
"One way to learn more is not to hide your ignorance.",
"An eye for an eye makes the whole world blind.",
"For he who always does his best, his best will better grow.",
"He who never makes mistakes never did anything worthy.",
"A dream is just a dream. A goal is a dream with a plan and a deadline.",
"Flying is simple. Not hitting the ground is hard.",
"Doing what you love is freedom. Loving what you do is happiness.",
"Nobody ever drowned in his own sweat.",
"Don't stop dreaming; otherwise sleep will get awfully boring.",
"Whistle while you work.",
"A single kind word will keep one warm for years.",
"Peace begins with a smile.",
// Predictions
"Your dearest dream is coming true.",
"Your luck is about to change.",
"This could be an almost perfect day. Enjoy it.",
"Soon life will become more interesting.",
"Take advantage of an upcoming opportunity.",
"Many possibilities are open to you - work a little harder.",
"Perhaps you've been focusing too much on that one thing.",
"A secret admirer will soon send you a sign of affection.",
"A chance meeting with someone from the past is in store.",
"Friends long absent are coming back to you.",
"You will be called upon to help a friend in trouble.",
"You will be recognized and honored as a community leader.",
"Your talents will be recognized and suitably rewarded.",
"You will be unusually successful in business.",
"You have an important new business development shaping up.",
"You will be singled out for promotion.",
"You are going on well with your business."
];

function changeNumbers() {
  newNumbers = []
  for (var i = 0; i < 6; i++)
  {
    newNumbers[i] = Math.floor(Math.random() * 100);
  }
  document.getElementById("fortune-numbers").innerHTML = "Lucky Numbers: " + newNumbers.join(" ");
}

function changeFortune() {
  document.getElementById("fortune-message").innerHTML = fortunes[Math.floor(Math.random() * fortunes.length)];
  changeNumbers();
  document.getElementById("flip").style.display = "inline";
}

function flip() {
  message = document.getElementById("fortune-message");
  numbers = document.getElementById("fortune-numbers");
  if (message.style.display == "table-cell") {
    message.style.display = "none";
    numbers.style.display = "table-cell";
  }
  else {
    numbers.style.display = "none";
    message.style.display = "table-cell";
  }
  if (!e) var e = window.event;
  e.cancelBubble = true;
  if (e.stopPropagation) e.stopPropagation();
}
