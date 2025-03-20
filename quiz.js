//assign buttons to JavaScript for easier typing:
const startQuiz = document.getElementById("startQuiz");
const nextButton = document.getElementById("nextButton");
//add event listener for start button
startQuiz.addEventListener("click", newQuestion);

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

//create original array containing all possible questions
let questions = [
"Who wrote 'Frankenstein'?",
"Which colour is most associated with Halloween?",
"What phobia do you suffer from if you have an intense fear of Halloween?",
"Which animal is considered a symbol of Halloween because of its association with witches?",
"In which country did the tradition of carving pumpkins originate?",
"What candy was originally called Chicken Feed?",
"In the movie Hocus Pocus, what do the witches plan to steal from the children of Salem?",
"Which classic horror film features the line: 'Here’s Johnny!'?",
"What is the name of the ghost in Ghostbusters who haunts the Sedgewick Hotel?",
"In the Halloween tradition of 'trick-or-treat', what is a common 'trick' people may perform with houses?",
"What vegetable was originally used before pumpkins to carve jack-o’-lanterns?"
];

//create new, empty set for questions that have been asked (set is not the same as array)
let askedQuestions = new Set();
//set score (needs to be set before function so that it doesn't reset every time)
let score = 0;

//for image
const mainImage = document.getElementById("mainPhoto");

//create function to select unique random questions (only display ones that haven't already been asked)
function newQuestion() {
  //add event listener for next button
nextButton.addEventListener("click", newQuestion);
  //add text to 'next' button
document.getElementById("nextButton").innerHTML = "Next";
  //hide start button, show next button
startQuiz.style.visibility = "hidden";
nextButton.style.visibility = "visible";
  //delete answer information for previous questions
document.getElementById("answerParagraph").innerHTML = null;
document.getElementById("myQuestion").innerHTML = null;
  //assign a random question to questionChoice
  let questionChoice = questions[Math.floor(Math.random() * questions.length)];
  //if the random question has already been asked (and so is now within the askedQuestions set)...
if (askedQuestions.has(questionChoice)) {
    //start again
    newQuestion();
} 
else {
    //display unique chosen question
    document.getElementById("myQuestion").innerHTML = questionChoice;
    //add question to asked questions
    askedQuestions.add(questionChoice);

    //if else statements to display correct image done here so they should show up earlier

    if (questionChoice === "Who wrote 'Frankenstein'?") {
      //display relevant image
    mainImage.src =
        "https://www.dropbox.com/scl/fi/10bj45krorbdpozp7bu1t/frankensteinImage.jpg?rlkey=cv1stppcdjtfujvezejub01pt&st=7pb3hvgp&raw=1";
    } 
    else if (
    questionChoice === "Which colour is most associated with Halloween?"
    ) {
    mainImage.src =
        "https://www.dropbox.com/scl/fi/8t0tiaylkadvbf8fywscm/colours.png?rlkey=yiswhc946inrcwced5q0p1vzo&st=5ds2impc&raw=1";
    } 
    else if (
    questionChoice ===
    "What phobia do you suffer from if you have an intense fear of Halloween?"
    ) {
    mainImage.src =
        "https://www.dropbox.com/scl/fi/3u139rdwj74uz0aytjws5/fear.png?rlkey=fpkj6k84sejt27ut02lh54rfo&st=pt5396og&raw=1";
    } 
    else if (
    questionChoice ===
    "Which animal is considered a symbol of Halloween because of its association with witches?"
    ) {
    mainImage.src =
        "https://www.dropbox.com/scl/fi/7yuxinlyjedw9xxc2zqne/witch.jpg?rlkey=iwx6dot51baa1bg2eeyfe8m43&st=26w4hetf&raw=1";
    } 
    else if (
    questionChoice ===
    "In which country did the tradition of carving pumpkins originate?"
    ) {
    mainImage.src =
        "https://www.dropbox.com/scl/fi/6b28jdz135fwqc1pt8s9n/pumpkins.jpg?rlkey=81455wdr19qzbh3ub9wj3ok9c&st=cc7ttbuz&raw=1";
    } 
    else if (
    questionChoice === "What candy was originally called Chicken Feed?"
    ) {
    mainImage.src =
        "https://www.dropbox.com/scl/fi/iywwe1vh58cpie9dd7ag0/chickens.jpg?rlkey=svd83eu9xupszjwrhmb8z3gas&st=9vifku72&raw=1";
    } 
    else if (
    questionChoice ===
    "In the movie Hocus Pocus, what do the witches plan to steal from the children of Salem?"
    ) {
    mainImage.src =
        "https://www.dropbox.com/scl/fi/osthhafveapj33pr96dko/hocusPocus.jpg?rlkey=i20nc6bje2ci58vk7u35l0xqk&st=4rbz0hyq&raw=1";
    } 
    else if (
    questionChoice ===
    "Which classic horror film features the line: 'Here’s Johnny!'?"
    ) {
    mainImage.src =
        "https://www.dropbox.com/scl/fi/xpg4zq4qq1flddr7qf9o9/film.jpg?rlkey=maotmlxuk7bkxm8gunz6jt3uh&st=3ozrqy0e&raw=1";
    } 
    else if (
    questionChoice ===
    "What is the name of the ghost in Ghostbusters who haunts the Sedgewick Hotel?"
    ) {
    mainImage.src =
        "https://www.dropbox.com/scl/fi/c1sa1do05cjuxaljnfs54/ghostbusters.jpg?rlkey=3wf70j55brp8kym7ilm9bu6d1&st=cj45c3on&raw=1";
    } 
    else if (
    questionChoice ===
    "In the Halloween tradition of 'trick-or-treat', what is a common 'trick' people may perform with houses?"
    ) {
    mainImage.src =
        "https://www.dropbox.com/scl/fi/zjppnvrflfiv1ywp6hetd/trickOrTreat.jpg?rlkey=12zuf2m5eiysr6o6j3znc5236&st=auer9ufa&raw=1";
    } 
    else {
    mainImage.src =
        "https://www.dropbox.com/scl/fi/ydsk43ee1wjulzoqv65ba/vegetables.jpg?rlkey=rwpckwmgy2gpn0hqnpentaebv&st=l71f46n4&raw=1";
    }

    //set timer for prompt
    const timer = setTimeout(answerQuestion, 3000);
    //create function for prompt so that it works with setTimeout
    function answerQuestion() {
      //create prompt
    const promptAnswer = prompt(questionChoice);
    let userAnswer = promptAnswer.toLowerCase();
      //declare constants for answers
    const yes = "That's right!";
    const no = "Not quite!";

      //determine which question has been asked and set variables
    if (questionChoice === "Who wrote 'Frankenstein'?") {
        let questionSolution = "Mary Shelley wrote 'Frankenstein'.";
        let correctAnswer = "mary shelley";

        //display relevant answer paragraph
        if (userAnswer === correctAnswer) {
        document.getElementById("answerParagraph").innerHTML =
            yes + " " + questionSolution;
          //increase scores
        score++;
        } 
        else {
        document.getElementById("answerParagraph").innerHTML =
            no + " " + questionSolution;
        }
    } 
    else if (
        questionChoice === "Which colour is most associated with Halloween?"
    ) {
        let questionSolution =
        "Orange is the colour most associated with Halloween.";
        let correctAnswer = "orange";
        if (userAnswer === correctAnswer) {
        document.getElementById("answerParagraph").innerHTML =
            yes + " " + questionSolution;
        score++;
        } 
        else {
        document.getElementById("answerParagraph").innerHTML =
            no + " " + questionSolution;
        }
    } 
    else if (
        questionChoice ===
        "What phobia do you suffer from if you have an intense fear of Halloween?"
    ) {
        // New question condition
        let questionSolution = "Samhainophobia is the fear of Halloween.";
        let correctAnswer = "samhainophobia";
        if (userAnswer === correctAnswer) {
        document.getElementById("answerParagraph").innerHTML =
            yes + " " + questionSolution;
        score++;
        } 
        else {
        document.getElementById("answerParagraph").innerHTML =
            no + " " + questionSolution;
        }
    } 
    else if (
        questionChoice ===
        "Which animal is considered a symbol of Halloween because of its association with witches?"
    ) {
        // New question condition
        let questionSolution =
        "The animal most associated with Halloween is a black cat.";
        let correctAnswer = "black cat";
        if (userAnswer === correctAnswer) {
        document.getElementById("answerParagraph").innerHTML =
            yes + " " + questionSolution;
        score++;
        } 
        else {
        document.getElementById("answerParagraph").innerHTML =
            no + " " + questionSolution;
        }
    } 
    else if (
        questionChoice ===
        "In which country did the tradition of carving pumpkins originate?"
    ) {
        // New question condition
        let questionSolution =
        "The tradition of pumpkin carving originated in Ireland.";
        let correctAnswer = "ireland";
        if (userAnswer === correctAnswer) {
        document.getElementById("answerParagraph").innerHTML =
            yes + " " + questionSolution;
        score++;
        } 
        else {
        document.getElementById("answerParagraph").innerHTML =
            no + " " + questionSolution;
        }
    } 
    else if (
        questionChoice === "What candy was originally called Chicken Feed?"
    ) {
        // New question condition
        let questionSolution = "Candy Corn was originally called Chicken Feed.";
        let correctAnswer = "candy corn";
        if (userAnswer === correctAnswer) {
        document.getElementById("answerParagraph").innerHTML =
            yes + " " + questionSolution;
        score++;
        } 
        else {
        document.getElementById("answerParagraph").innerHTML =
            no + " " + questionSolution;
        }
    } 
    else if (
        questionChoice ===
        "In the movie Hocus Pocus, what do the witches plan to steal from the children of Salem?"
    ) {
        // New question condition
        let questionSolution = "The witches plan to steal their life force.";
        let correctAnswer = "their life force";
        if (userAnswer === correctAnswer) {
        document.getElementById("answerParagraph").innerHTML =
            yes + " " + questionSolution;
        score++;
        } 
        else {
        document.getElementById("answerParagraph").innerHTML =
            no + " " + questionSolution;
        }
    } 
    else if (
        questionChoice ===
        "Which classic horror film features the line: 'Here’s Johnny!'?"
    ) {
        // New question condition
        let questionSolution =
        "The Shining is famous for the line 'Here's Johnny'.";
        let correctAnswer = "the shining";
        if (userAnswer === correctAnswer) {
        document.getElementById("answerParagraph").innerHTML =
            yes + " " + questionSolution;
        score++;
        } 
        else {
        document.getElementById("answerParagraph").innerHTML =
            no + " " + questionSolution;
        }
    } 
    else if (
        questionChoice ===
        "What is the name of the ghost in Ghostbusters who haunts the Sedgewick Hotel?"
    ) {
        // New question condition
        let questionSolution = "The name of this ghost is Slimer.";
        let correctAnswer = "slimer";
        if (userAnswer === correctAnswer) {
        document.getElementById("answerParagraph").innerHTML =
            yes + " " + questionSolution;
        score++;
        } 
        else {
        document.getElementById("answerParagraph").innerHTML =
            no + " " + questionSolution;
        }
    } 
    else if (
        questionChoice ===
        "In the Halloween tradition of 'trick-or-treat', what is a common 'trick' people may perform with houses?"
    ) {
        let questionSolution =
        "A common trick with houses is to throw toilet paper over them.";
        let correctAnswer = "toilet papering";
        if (userAnswer === correctAnswer) {
        document.getElementById("answerParagraph").innerHTML =
            yes + " " + questionSolution;
        score++;
        } 
        else {
        document.getElementById("answerParagraph").innerHTML =
            no + " " + questionSolution;
        }
    } 
    else if (
        questionChoice ===
        "What vegetable was originally used before pumpkins to carve jack-o’-lanterns?"
    ) {
        let questionSolution =
        "Turnips were originally used to carve jack-o’-lanterns.";
        let correctAnswer = "turnip";
        if (userAnswer === correctAnswer) {
        document.getElementById("answerParagraph").innerHTML =
            yes + " " + questionSolution;
        score++;
        } 
        else {
        document.getElementById("answerParagraph").innerHTML =
            no + " " + questionSolution;
        }
    }

    //if all questions have been asked
    if (askedQuestions.size === questions.length) {
        // Updated to check the correct number of questions
        //change button text
        document.getElementById("nextButton").innerHTML = "Finish";
        //remove this current function from button
        nextButton.removeEventListener("click", newQuestion);
        //add end function
        nextButton.addEventListener("click", endFunction);
    }
    //create end function
    function endFunction() {
        //display score
        document.getElementById("myQuestion").innerHTML =
        "You got" + " " + score + " " + "questions right.";

        //clear answer paragraph
        document.getElementById("answerParagraph").innerHTML = null;
        //change button to 'play again' button
        nextButton.style.visibility = "hidden";
        nextButton.removeEventListener("click", endFunction);

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
        //start quiz function again
        newQuestion();
        }
    }
    }
}
}