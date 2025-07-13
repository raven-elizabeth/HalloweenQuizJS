//using settimeout to alert user to exact answer requirements
const timeout = setTimeout(warnUser, 1000);
function warnUser() {
  const notify = alert("Be aware! The answers you provide will only be accepted as correct if they match the exact wording that is stored by this program.");
}

//assign variables for easier typing:
const startQuiz = document.getElementById("startQuiz");
const submitButton = document.getElementById("submitButton");
let userInput = document.getElementById("userInput");

//add event listeners
startQuiz.addEventListener("click", newQuestion);

//add text to 'next' button
document.getElementById("submitButton").innerHTML = "Submit";

//onmouseover function
function spiders() {
  document.getElementById("spider1").style.visibility = "visible";
  document.getElementById("spider2").style.visibility = "visible";
}

//onmouseout function
function reset() {
  document.getElementById("spider1").style.visibility = "hidden";
  document.getElementById("spider2").style.visibility = "hidden";
}

// Get the audio element by ID
const backgroundMusic = document.getElementById("backgroundMusic");

// Play the audio when the quiz starts
startQuiz.addEventListener("click", playMusic);
function playMusic() {
  backgroundMusic.play(); // Play the audio
}

//create object (dictionary) containing all possible questions and their corresponding data
let questions = {
  "Who wrote 'Frankenstein'?": {
    "img": "https://www.dropbox.com/scl/fi/10bj45krorbdpozp7bu1t/frankensteinImage.jpg?rlkey=cv1stppcdjtfujvezejub01pt&st=7pb3hvgp&raw=1",
    "ans": "mary shelley",
    "msg": "Mary Shelley wrote 'Frankenstein'."
  },
  "Which colour is most associated with Halloween?": {
    "img": "https://www.dropbox.com/scl/fi/8t0tiaylkadvbf8fywscm/colours.png?rlkey=yiswhc946inrcwced5q0p1vzo&st=5ds2impc&raw=1",
    "ans": "orange",
    "msg": "Orange is the colour most associated with Halloween."
  },
  "What phobia do you suffer from if you have an intense fear of Halloween?": {
    "img": "https://www.dropbox.com/scl/fi/3u139rdwj74uz0aytjws5/fear.png?rlkey=fpkj6k84sejt27ut02lh54rfo&st=pt5396og&raw=1",
    "ans": "samhainophobia",
    "msg": "Samhainophobia is the fear of Halloween."
  },
  "Which animal & its colour is considered a symbol of Halloween because of its association with witches?": {
    "img": "https://www.dropbox.com/scl/fi/7yuxinlyjedw9xxc2zqne/witch.jpg?rlkey=iwx6dot51baa1bg2eeyfe8m43&st=26w4hetf&raw=1",
    "ans": "black cat",
    "msg": "The animal most associated with Halloween is a black cat."
  },
  "In which country did the tradition of carving pumpkins originate?": {
    "img": "https://www.dropbox.com/scl/fi/6b28jdz135fwqc1pt8s9n/pumpkins.jpg?rlkey=81455wdr19qzbh3ub9wj3ok9c&st=cc7ttbuz&raw=1",
    "ans": "ireland",
    "msg": "The tradition of pumpkin carving originated in Ireland."
  },
  "What candy was originally called Chicken Feed?": {
    "img": "https://www.dropbox.com/scl/fi/iywwe1vh58cpie9dd7ag0/chickens.jpg?rlkey=svd83eu9xupszjwrhmb8z3gas&st=9vifku72&raw=1",
    "ans": "candy corn",
    "msg": "Candy Corn was originally called Chicken Feed."
  },
  "In the movie Hocus Pocus, what do the witches plan to steal from the children of Salem?": {
    "img": "https://www.dropbox.com/scl/fi/osthhafveapj33pr96dko/hocusPocus.jpg?rlkey=i20nc6bje2ci58vk7u35l0xqk&st=4rbz0hyq&raw=1",
    "ans": "their life force",
    "msg": "The witches plan to steal their life force."
  },
  "Which classic horror film features the line: 'Here’s Johnny!'?": {
    "img": "https://www.dropbox.com/scl/fi/xpg4zq4qq1flddr7qf9o9/film.jpg?rlkey=maotmlxuk7bkxm8gunz6jt3uh&st=3ozrqy0e&raw=1",
    "ans": "the shining",
    "msg": "The Shining is famous for the line 'Here's Johnny'."
  },
  "What is the name of the ghost in Ghostbusters who haunts the Sedgewick Hotel?": {
    "img": "https://www.dropbox.com/scl/fi/c1sa1do05cjuxaljnfs54/ghostbusters.jpg?rlkey=3wf70j55brp8kym7ilm9bu6d1&st=cj45c3on&raw=1",
    "ans": "slimer",
    "msg": "The name of this ghost is Slimer"
  },
  "In the Halloween tradition of 'trick-or-treat', what is a common 'trick' people may perform with houses?": {
    "img": "https://www.dropbox.com/scl/fi/zjppnvrflfiv1ywp6hetd/trickOrTreat.jpg?rlkey=12zuf2m5eiysr6o6j3znc5236&st=auer9ufa&raw=1",
    "ans": "toilet papering",
    "msg": "A common trick with houses is to throw toilet paper over them."
  },
  "What vegetable was originally used before pumpkins to carve jack-o’-lanterns?": {
    "img": "https://www.dropbox.com/scl/fi/ydsk43ee1wjulzoqv65ba/vegetables.jpg?rlkey=rwpckwmgy2gpn0hqnpentaebv&st=l71f46n4&raw=1",
    "ans": "turnip",
    "msg": "Turnips were originally used to carve jack-o’-lanterns."
  }
}

//array of all questions
let allQuestions = Object.keys(questions)

//create new, empty set for questions that have been asked (set is not the same as array)
let askedQuestions = new Set();
//set score (needs to be set before function so that it doesn't reset every time)
let score = 0;

//for image
const mainImage = document.getElementById("mainPhoto");

//create function to select unique random questions (only display ones that haven't already been asked)
function newQuestion() {
  //reset submit button
  submitButton.removeEventListener("click", newQuestion);
  submitButton.addEventListener("click", answerQuestion);
  submitButton.innerHTML = "Submit";
  
  //reset input
  userInput.value = "";
  
  //delete answer information for previous questions
  document.getElementById("answerParagraph").innerHTML = null;
  document.getElementById("myQuestion").innerHTML = null;
  userInput.innerHTML = null;
  
  //hide start button, show next button
  startQuiz.style.visibility = "hidden";
  userInput.style.visibility = "visible";
  submitButton.style.visibility = "visible";
  
  //assign a random question to questionChoice
  if (askedQuestions.size != allQuestions.length) {
    let questionChoice;
    do {
      questionChoice = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    } while (askedQuestions.has(questionChoice));
    
    //add questions to asked set
    askedQuestions.add(questionChoice)
    
    //display unique chosen question
    document.getElementById("myQuestion").innerHTML = questionChoice;
    //display correct image
    mainImage.src = questions[questionChoice]["img"]
    
    //check if last question
    if (askedQuestions.size === allQuestions.length) {
      //change button text
      submitButton.innerHTML = "Finish";
    }
  }
}

function answerQuestion() { 
  let userAnswer = userInput.value.toLowerCase().trim();

  //declare constants for answers
  const yes = "That's right!";
  const no = "Not quite!";
      
  //set variables dependent on which question has been asked
  //trim() required here to remove whitespace that may be added to HTML element so text matches one of the stored questions
  let questionChoice = document.getElementById("myQuestion").innerText.trim();
  let questionSolution = questions[questionChoice]["msg"];
  let correctAnswer = questions[questionChoice]["ans"];
      
  //display relevant answer paragraph
  if (userAnswer === correctAnswer) {
    document.getElementById("answerParagraph").innerHTML = yes + " " + questionSolution;
    //increase scores & add question to set
    score++;
  } 
  else {
    document.getElementById("answerParagraph").innerHTML = no + " " + questionSolution;
  }
  //hide input form
  userInput.style.visibility = "hidden";
  
  //modify submit button
  submitButton.removeEventListener("click", answerQuestion);
  
  //if last question...
  if (askedQuestions.size === allQuestions.length) {
    submitButton.addEventListener("click", endQuiz);
    submitButton.innerHTML = "See score";
  }
  else {
    submitButton.addEventListener("click", newQuestion);
    submitButton.innerHTML = "Next";
  }
}
 
//create end function
function endQuiz() {
  //display score
  document.getElementById("myQuestion").innerHTML = "You got" + " " + score + "/" + allQuestions.length + "questions right.";

  //clear answer paragraph
  document.getElementById("answerParagraph").innerHTML = null;
  //change button to 'play again' button
  submitButton.style.visibility = "hidden";
  userInput.style.visibility = "hidden";
  submitButton.removeEventListener("click", endQuiz);

  //create new element
  const newButton = document.createElement("button");
  //create text to add to new element
  const buttonText = document.createTextNode("Play again?");
  //assign the text to the element
  newButton.appendChild(buttonText);
  //send new button element to beneath div 'bottom'
  document.getElementById("bottom").appendChild(newButton);
  //assign a class for css styling to element
  newButton.classList.add("bigButton");
  //add event listener to the element
  newButton.addEventListener("click", playAgain);
  //play music again
  newButton.addEventListener("click", playMusic);

  // Stop the audio when the quiz ends
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0; // Reset the audio to the start
  
  function playAgain() {
    //clear askedQuestions set so quiz can begin again
    askedQuestions.clear();
    //remove new element
    newButton.remove();
    //reset score (don't use let)
    score = 0;
    //reset next button
    submitButton.innerHTML = "Submit";
    submitButton.addEventListener("click", newQuestion);
    //start quiz function again
    newQuestion();
  }
}