// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output:process.stdout
// });

// const questions =[{
//     question: "How long does it take for the Planet to complete an orbit ?",
//     answer: "365 days"
// },
// {
//     question: "what is 2 + 2?",
//     answer: "4"
// },
// {
//     question: "what is the color of the sky?",
//     answer :"blue"
// },
// {
//     question: " Is black a color?",
//     answer: "no"
// },
// {
//     question: "Where do you store your actions in Redux?",
//     answer:"store"
// }

// ];

// let questionTimer;
// let quizTimer;
// const questionTimeLimit = 10;
// const quizTimeLimit = 50 * 1000;

// let currentQuestionIndex = 0;
// let totalScore = 0;

// function startQuiz (){
//     console.log("Welcome to the quiz!");

//     //
//     quizTimer = setTimeout(()=>{
//         console.log('\n Quiz time is up!');
//         console.log(`your total score is ${totalScore}/${question.length}.`);
//         rl.close();
//     }, quizTimeLimit);

//     askQuestion();
// }


// function askQuestion(){
//     if ( currentQuestionIndex >= questions.length){
//         console.log('Quiz complete!');
//         clearTimeout(quizTimer);
//         console.log(`Your total score is ${totalScore} /${questions.length}.`);
//         rl.close();
//         return;
//     } 
// }

// const question = questions[currentQuestionIndex].question;
// const correctAnswer = questions[currentQuestionIndex].answer;
// console.log(`\mQuestion ${currentQuestionIndex + 1}: ${question}`);

//  // Start the question timer
//  let timeLeft = questionTimeLimit;
//  process.stdout.write(`You have ${timeLeft} seconds to answer. `);

//  questionTimer = setInterval(() => {
//    timeLeft--;
//    process.stdout.clearLine(); // Clear the current line
//    process.stdout.cursorTo(0); // Move cursor to the beginning of the line
//    process.stdout.write(`Time left: ${timeLeft}s`); // Update the time left
//    if (timeLeft <= 0) {
//      clearInterval(questionTimer);
//      console.log('\n\nTime is up for this question!');
//      console.log(`The correct answer was: ${correctAnswer}`);
//      currentQuestionIndex++;
//      askQuestion(); // Move to the next question
//    }
//  }, 1000);

//  // Function to validate user input
//  function handleAnswer(answer) {
//    answer = answer.trim();
//    if (answer === '') {
//      console.log('Input cannot be empty. Please enter your answer.');
//      rl.question('Your answer: ', handleAnswer); // Prompt again for valid input
//      return;
//    }

//    // Stop the timer if the user answers in time
//    clearInterval(questionTimer);

//    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
//      console.log('Correct! Continue to the next question.');
//      totalScore++; // Increment score for a correct answer
//    } else {
//      console.log(`Wrong answer! The correct answer was: ${correctAnswer}`);
//    }

//    currentQuestionIndex++;
//    askQuestion(); // Move to the next question
//  }

//  // Read user input
//  rl.question('\nYour answer: ', handleAnswer);


// // Start the quiz
// startQuiz();

