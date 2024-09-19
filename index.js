const readline = require('readline');

// Create readline interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define questions and answers
const questions = [
  {
    question: 'What is the capital of France?',
    answer: 'Paris'
  },
  {
    question: 'What is 2 + 2?',
    answer: '4'
  },
  {
    question: 'What is the color of the sky?',
    answer: 'blue'
  },
  {
    question: 'How many continents are there?',
    answer: '7'
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    answer: 'Harper Lee'
  }
];

// Variables for timers
let questionTimer;
let quizTimer;
const questionTimeLimit = 10; // seconds
const quizTimeLimit = 30; // seconds

let currentQuestionIndex = 0;
let totalScore = 0; // Variable to track total score

// Function to start the quiz
function startQuiz() {
  console.log('Welcome to the quiz!');
  
  // Start the quiz timer
  quizTimer = setTimeout(() => {
    console.log('\nQuiz time is up!');
    console.log(`Your total score is ${totalScore}/${questions.length}.`);
    rl.close();
  }, quizTimeLimit * 1000);
  
  // Ask the first question
  askQuestion();
}

// Function to ask a question
function askQuestion() {
  if (currentQuestionIndex >= questions.length) {
    console.log('Quiz complete!');
    clearTimeout(quizTimer);
    console.log(`Your total score is ${totalScore}/${questions.length}.`);
    rl.close();
    return;
  }

  const question = questions[currentQuestionIndex].question;
  const correctAnswer = questions[currentQuestionIndex].answer;
  console.log(`\nQuestion ${currentQuestionIndex + 1}: ${question}`);
  
  // Start the question timer
  let timeLeft = questionTimeLimit;
  process.stdout.write(`You have ${timeLeft} seconds to answer. `);

  questionTimer = setInterval(() => {
    timeLeft--;
    process.stdout.clearLine(); // Clear the current line
    process.stdout.cursorTo(0); // Move cursor to the beginning of the line
    process.stdout.write(`Time left: ${timeLeft}s`); // Update the time left
    if (timeLeft <= 0) {
      clearInterval(questionTimer);
      console.log('\n\nTime is up for this question!');
      console.log(`The correct answer was: ${correctAnswer}`);
      currentQuestionIndex++;
      askQuestion(); // Move to the next question
    }
  }, 1000);

  // Function to validate user input
  function handleAnswer(answer) {
    answer = answer.trim();
    if (answer === '') {
      console.log('Input cannot be empty. Please enter your answer.');
      rl.question('Your answer: ', handleAnswer); // Prompt again for valid input
      return;
    }

    // Stop the timer if the user answers in time
    clearInterval(questionTimer);

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      console.log('Correct! Continue to the next question.');
      totalScore++; // Increment score for a correct answer
    } else {
      console.log(`Wrong answer! The correct answer was: ${correctAnswer}`);
    }

    currentQuestionIndex++;
    askQuestion(); // Move to the next question
  }

  // Read user input
  rl.question('\nYour answer: ', handleAnswer);
}

// Start the quiz
startQuiz();



