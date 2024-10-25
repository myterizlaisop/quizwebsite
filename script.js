let questions = [
  {
    numb: 1,
    questions: "What is the name of the main character in 'Naruto'?",
    answer: "Naruto Uzumaki",
    options: [
      "Sasuke Uchiha",
      "Naruto Uzumaki",
      "Sakura Haruno",
      "Kakashi Hatake",
    ],
  },
  {
    numb: 2,
    questions:
      "In 'One Piece,' what is the name of Luffy's pirate crew's ship?",
    answer: "Going Merry",
    options: ["Thousand Sunny", "Going Merry", "Red Force", "Sea Train"],
  },
  {
    numb: 3,
    questions:
      "What is the primary ability of the protagonist in 'My Hero Academia'?",
    answer: "One For All",
    options: ["Quirkless", "One For All", "All For One", "Explosion"],
  },
  {
    numb: 4,
    questions: "Which studio produced the anime 'Spirited Away'?",
    answer: "Studio Ghibli",
    options: ["Studio Ghibli", "Madhouse", "Bones", "MAPPA"],
  },
  {
    numb: 5,
    questions:
      "In 'Attack on Titan,' what is the name of the wall protecting humanity from Titans?",
    answer: "Wall Maria",
    options: ["Wall Rose", "Wall Maria", "Wall Sina", "Wall Eden"],
  },
];

const startBtn = document.querySelector(".start-btn");
const dialog = document.querySelector(".dialog");
const exitBtn = document.querySelector(".exit-btn");
const dialogOverlay = document.querySelector(".dialog-overlay");
const continueBtn = document.querySelector("continue-btn");
const quizBox = document.querySelector(".quiz-card");
const preLoader = document.querySelector("#preloader");
const body = document.querySelector(".body");
const container = document.querySelector(".container");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgainBtn");

setTimeout(() => {
  preLoader.classList.add("hidden");
}, 1000);

if (startBtn) {
  startBtn.addEventListener("click", () => {
    dialog.classList.add("shown");
  });

  exitBtn.addEventListener("click", () => {
    dialog.classList.remove("shown");
  });

  dialogOverlay.addEventListener("click", () => {
    dialog.classList.remove("shown");
  });

  continueBtn.addEventListener("click", () => {
    quiz - card.classList.add("shown");

    showQuestions(0);
    questionCounter(1);
    headerScore();
  });
};
  tryAgainBtn.onclick = () => {
    console.log("HII");
    container.style.opacity = "1";
    nextBtn.classList.remove('active')
    resultBox.classList.remove("active");

     questionCount = 0;
     questionNumb = 1;
       userScore = 0;
        headerScore();
        showQuestions(questionCount);
         questionCounter(questionNumb);
  };

let questionCount = 0;
let questionNumb = 1;
const nextBtn = document.querySelector(".next-btn");
let index = 0;
nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.remove("active");
  } else {
    console.log("Асуулт дууслаа");
    showResultBox();
  }
  if (questions[index].numb == questions.length) {
    container.style.opacity = "0";
  }
};

let correctAnswer = questions[index].answer;
let userScore = 0;
function showQuestions(index = 0) {
  let correctAnswer = questions[index].answer;
  const optionList = document.querySelector(".option-list");
  let allOptions = optionList.children.length;
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].questions}`;
  optionList.innerHTML = "";
  for (let i = 0; i < questions[index].options.length; i++) {
    const option = document.createElement("div");
    option.classList.add("option");
    option.innerHTML = questions[index].options[i];
    option.addEventListener("click", () => {
      if (questions[index].options[i] == correctAnswer) {
        console.log("hello");
        option.classList.add("correct");
        userScore += 1;
        headerScore();
      } else {
        option.classList.add("incorrect");
        console.log("hi");
        for (let i = 0; i < allOptions; i++) {
          if (optionList.children[i].textContent == correctAnswer) {
            optionList.children[i].setAttribute("class", "option correct");
          }
        }
      }

      for (let i = 0; i < allOptions; i++) {
        console.log(i);
        optionList.children[i].classList.add("disabled");
      }
      nextBtn.classList.add("active");
    });
    optionList.appendChild(option);
  }

  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length - 1; i++) {
    option[i].setAttribute("onlick", "optionSelected(this)");
  }
}
showQuestions();
function questionCounter(index) {
  const questionTotal = document.querySelector(".Questions");
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `Оноо: ${userScore} / ${questions.length}`;
}
function showResultBox() {
  container.style.opacity = "0";
  resultBox.classList.add("active");
  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");
  let progressStartValue = -1;
  let progressEndValue = (userScore / questions.length) * 100;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#c40094 ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, .1)0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  });
}
showQuestions();
