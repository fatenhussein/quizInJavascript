const questions = [
  {
    question: "What does HTML stand for?",
    optionA: "Home Tool Markup Language",
    optionB: "Hyperlinks and Text Markup Language",
    optionC: "Hyper Text Markup Language",
    optionD: "Home Text Markup Language",
    correctOption: "C",
  },

  {
    question: "What is CSS used for?",
    optionA: "Styling and layout of web pages",
    optionB: "Adding interactivity to web pages",
    optionC: "Server-side scripting",
    optionD: "Creating and manipulating databases",
    correctOption: "A",
  },

  {
    question: "What is JavaScript?",
    optionA: "A programming language used for web development",
    optionB: "A markup language used for creating web pages",
    optionC: "A database management system",
    optionD: "None of the above",
    correctOption: "A",
  },

  {
    question: "What is a database?",
    optionA: "A collection of web pages",
    optionB: "A collection of programming instructions",
    optionC: "A collection of data organized in a specific way",
    optionD: "A type of programming language",
    correctOption: "C",
  },

  {
    question: "What is a variable in programming?",
    optionA: "A value that cannot be changed",
    optionB: "A keyword that denotes a specific data type",
    optionC: "A container for storing data values",
    optionD: "A function that returns a value",
    correctOption: "C",
  },

  {
    question: "What is a loop in programming?",
    optionA: "A way to execute a block of code repeatedly",
    optionB: "A way to declare a variable",
    optionC: "A way to create a function",
    optionD: "A way to import external code libraries",
    correctOption: "A",
  },

  {
    question: "What is the DOM in web development?",
    optionA: "A type of programming language",
    optionB: "A way to declare a variable",
    optionC: "A way to create an object",
    optionD: "A programming interface for web pages",
    correctOption: "D",
  },

  {
    question: "What is a function in programming?",
    optionA: "A way to declare a variable",
    optionB: "A way to execute a block of code",
    optionC: "A way to import external code libraries",
    optionD: "A way to create an object",
    correctOption: "B",
  },

  {
    question: "What is Git?",
    optionA: "A programming language",
    optionB: "A code repository hosting service",
    optionC: "A version control system",
    optionD: "A database management system",
    correctOption: "C",
  },

  {
    question: "What is an API?",
    optionA: "A graphical user interface",
    optionB: "A programming language",
    optionC: "A set of protocols and tools for building software",
    optionD: "A type of database",
    correctOption: "C",
  },

  {
    question: "Which of the following is not a JavaScript data type?",
    optionA: "Number",
    optionB: "Boolean",
    optionC: "String",
    optionD: "Class",
    correctOption: "D",
  },

  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    optionA: "var",
    optionB: "let",
    optionC: "const",
    optionD: "all of the above",
    correctOption: "D",
  },

  {
    question: "Which of the following is not a JavaScript loop?",
    optionA: "for",
    optionB: "while",
    optionC: "loop",
    optionD: "do...while",
    correctOption: "C",
  },

  {
    question: "Which of the following is not a JavaScript comparison operator?",
    optionA: "==",
    optionB: "===",
    optionC: "!=",
    optionD: "><",
    correctOption: "D",
  },

  {
    question:
      "Which of the following is not a valid JavaScript function declaration?",
    optionA: "function myFunction() {}",
    optionB: "let myFunction = function() {}",
    optionC: "const myFunction = () => {}",
    optionD: "function = () => {}",
    correctOption: "D",
  },

  {
    question:
      "Which of the following is used to make a function return a value in JavaScript?",
    optionA: "break",
    optionB: "return",
    optionC: "continue",
    optionD: "exit",
    correctOption: "B",
  },

  {
    question:
      "Which of the following is used to add an element to an array in JavaScript?",
    optionA: "push()",
    optionB: "append()",
    optionC: "add()",
    optionD: "insert()",
    correctOption: "A",
  },

  {
    question:
      "Which of the following is used to remove an element from an array in JavaScript?",
    optionA: "remove()",
    optionB: "splice()",
    optionC: "slice()",
    optionD: "cut()",
    correctOption: "B",
  },

  {
    question:
      "Which of the following is used to convert a string to a number in JavaScript?",
    optionA: "toNumber()",
    optionB: "parseInt()",
    optionC: "parseFloat()",
    optionD: "Both B and C",
    correctOption: "D",
  },

  {
    question: "What is responsive web design?",
    optionA: "A way to create websites that adapt to different screen sizes",
    optionB: "A way to create websites that are optimized for search engines",
    optionC: "A way to create websites that load quickly",
    optionD:
      "A way to create websites that are accessible to people with disabilities",
    correctOption: "A",
  },

  {
    question: "What is the default value for the margin property in CSS?",
    optionA: "0px",
    optionB: "1px",
    optionC: "2px",
    optionD: "5px",
    correctOption: "A",
  },

  {
    question:
      "Which of the following is a valid way to specify a color in CSS?",
    optionA: "rgb(256, 0, 0)",
    optionB: "#000",
    optionC: "hsl(0, 100%, 50%)",
    optionD: "all of the above",
    correctOption: "D",
  },

  {
    question: " What does the CSS property 'text-transform' do?",
    optionA: "changes the font of the text",
    optionB: "changes the size of the text",
    optionC: "changes the case of the text",
    optionD: "changes the color of the text",
    correctOption: "C",
  },

  {
    question: " Which of the following is NOT a valid CSS selector?",
    optionA: "element",
    optionB: "calss",
    optionC: "id",
    optionD: "property",
    correctOption: "D",
  },

  {
    question: "What does the CSS property 'background-image' do?",
    optionA: "adds a border to an element",
    optionB: "changes the background color of an element",
    optionC: "adds an image as the background of an element",
    optionD: "changes the font of the text inside an element",
    correctOption: "C",
  },

  {
    question: "What does the CSS property 'opacity' do?",
    optionA: "changes the color of an element",
    optionB: "changes the size of an element",
    optionC: "changes the transparency of an element",
    optionD: "changes the position of an element",
    correctOption: "C",
  },

  {
    question: "What is the default value for the display property in CSS?",
    optionA: "none",
    optionB: "block",
    optionC: "inline",
    optionD: "flex",
    correctOption: "B",
  },

  {
    question:
      "Which of the following is a valid way to set the height of an element in CSS?",
    optionA: "width: 100px;",
    optionB: "height: 50px;",
    optionC: "size: 25px;",
    optionD: "length: 75px;",
    correctOption: "B",
  },

  {
    question:
      "Which of the following CSS properties is used to specify the font family of an element?",
    optionA: "font-size",
    optionB: "font-color",
    optionC: "font-family",
    optionD: "font-style",
    correctOption: "C",
  },

  {
    question:
      "Which of the following is a valid way to select all elements with the class 'example' in CSS?",
    optionA: "#example",
    optionB: ".example",
    optionC: "*example",
    optionD: "example",
    correctOption: "B",
  },
];

let quiz = document.querySelector(".quiz");
let Question = document.querySelector("#qustion");
let answerA = document.querySelector("#option-one-label");
let answerB = document.querySelector("#option-two-label");
let answerC = document.querySelector("#option-three-label");
let answerD = document.querySelector("#option-four-label");
let showbtn = document.querySelector("#reprot");
const answerElements = document.querySelectorAll(".answer");

let newQustions = [];
let currentQuiz = 0;
let score = 0;
let btn = document.getElementById("btn");

///array of 10 random questionsz
const genrateRandom = () => {
  for (let i = 0; i < 10; i++) {
    let idx = Math.floor(Math.random() * questions.length);

    newQustions.push(questions[idx]);

    questions.splice(idx, 1);
  }
  console.log(questions);
  console.log(newQustions);
  return newQustions;
};
//timer
let min = 1;
let seconds = 31;

const minutesHolder = document.querySelector(".min");
const secondsHolder = document.querySelector(".sec");

const timer = setInterval(() => {
  --seconds;

  if (seconds < 0 && min > 0) {
    min -= 1;
    seconds = 59;
  }

  if (min === 0 && seconds < 0) {
    // next
    min = 1;
    seconds = 31;

    next();
  }

  //console.log(${min}:${seconds.toString().padStart(2, '0')});
  minutesHolder.innerText = min;
  secondsHolder.innerText = seconds.toString().padStart(2, "0");
  //
}, 1000);

let randomqustions = genrateRandom();
let correctAnsewrsArray = [];
let wrongAnsewrsArray = [];
///next btn
const btnclick = btn.addEventListener("click", (e) => {
  const answer = getSelected();

  if (answer) {
    if (answer === randomqustions[currentQuiz].correctOption) {
      score++;
      correctAnsewrsArray.push(randomqustions[currentQuiz]);
      console.log(correctAnsewrsArray);
    } else {
      wrongAnsewrsArray.push(randomqustions[currentQuiz]);
      console.log(wrongAnsewrsArray);
    }

    next(e);
  }
  localStorage.setItem("score", score);
  localStorage.setItem("correct", JSON.stringify(correctAnsewrsArray));
  localStorage.setItem("wrong", JSON.stringify(wrongAnsewrsArray));
});

//next qestion
function next(e) {
  const answer = getSelected();

  currentQuiz++;
  if (currentQuiz < randomqustions.length) loadQuiz();
  else {
    quiz.innerHTML = `
          <h1>Your score is ${score}/${randomqustions.length}</h1>
          <button onclick="history.go(-1)">Try Again</button>

          <button  onclick="report()">Show Report</button>


              `;
  }

  e.preventDefault();
  //console.log(getSelected());
  //alert("hi");
}

/////
let btnshow = document.createElement("button");

function report() {
  window.location = "report.html";
}

//////////////// remove check
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

////////////////////user input
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });

  return answer;
};

////////////////new q
const loadQuiz = () => {
  min = 1;
  seconds = 31;
  deselectAnswers();
  const currentQuizData = randomqustions[currentQuiz];
  Question.innerHTML = currentQuizData.question;
  answerA.innerHTML = currentQuizData.optionA;
  answerB.innerHTML = currentQuizData.optionB;
  answerC.innerHTML = currentQuizData.optionC;
  answerD.innerHTML = currentQuizData.optionD;
  console.log(currentQuizData);
};
loadQuiz();
