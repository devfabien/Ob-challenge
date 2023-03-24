const questions = [
  {
    id:1,
    question: "Which is not a programming language in the following technologies:",
    multipleChoices: ["Kotlin", "PHP", "Node js", "C","None of the above"],
    answer: "Node js"
  },
  {
    id:2,
    question: "Does Javascript use compiler or interpretor",
    multipleChoices: ["interpreter", "compiler","both"],
    answer: "both"
  },
  {
    id:3,
    question: "What is PHP in full?",
    multipleChoices: ["HyperText pre-processor", "Personal Home Pages"],
    answer: "HyperText pre-processor"
  },
  {
    id:4,
    question: "what is the mostly used programming language for backend development",
    multipleChoices: ["C#", "Python", "Javascript", "java"],
    answer: "Javascript"
  }
];
const readline = require('readline');
function getRandomQuestion(questions) {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
}

function presentQuestion(question) {
  console.log(question.question);
  question.multipleChoices.forEach((choice, index) => {
    console.log(`${index + 1}. ${choice}`);
  });
}
  
function handleAnswer(question, answer, score) {
  if (question.answer === question.multipleChoices[answer]) {
    score++;
    console.log(`\nCorrect! Current score: ${score *5}\n`);
  } else {
    console.log("\nIncorrect.\n");
  }
  return score;
}
 
function runQuiz(questions) {
  let score = 0;
  let remainingQuestions = [...questions];

  const generator = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function handleInput(answer) {
    const index = parseInt(answer) - 1;
    score = handleAnswer(remainingQuestion, index, score);
    remainingQuestions = remainingQuestions.filter(p => p !== remainingQuestion);

    if (remainingQuestions.length === 0) {
      generator.close();
      console.log(`You got ${score *5}/${questions.length *5} thank you`);
    } else {
      remainingQuestion = getRandomQuestion(remainingQuestions);
      presentQuestion(remainingQuestion);
      generator.question('\nEnter the number of your answer: ', handleInput);
    }
  }

  let remainingQuestion = getRandomQuestion(remainingQuestions);
  presentQuestion(remainingQuestion);
  generator.question('\nEnter the number of your answer: ', handleInput);
}

runQuiz(questions);