

(function() {
  function buildQuiz() {
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answers = [];

     
      for (letter in currentQuestion.answers) {
       
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

     
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

   
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    
    const answerContainers = quizContainer.querySelectorAll(".answers");

    
    let numCorrect = 0;

   
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

     
      if (userAnswer === currentQuestion.correctAnswer) {
       
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        
        answerContainers[questionNumber].style.color = "red";
      }
    });

    
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  // variables
const myQuestions = [
  {
    question: "What is America's largest craft brewery?",
    answers: {
      a: "Yuengling",
      b: "Sam Adams",
      c: "New Belgium",
      d: "Shiner"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the fear of an empty glass?",
    answers: {
      a: "Omphalophobia",
      b: "Trypophobia",
      c: "Cenosillicaphobia",
      d: "Triskaidekaphobia"
    },
    correctAnswer: "c"
  },
  {
    question: "Who produces the most hops?",
    answers: {
      a: "Austria",
      b: "Germany",
      c: "USA",
      d: "Ireland"
    },
    correctAnswer: "b"
  },
  {
    question: "What does quaff mean?",
    answers: {
      a: "the foam on the head of naturally carbonated beer",
      b: "to drink heartily",
      c: "a large cask specifically for alcoholic beverages",
      d: "a beer drinking moron"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the name of the world's strongest beer?",
    answers: {
      a: "Hop Zombie",
      b: "Puke Fuel",
      c: "Cataclysm",
      d: "Armageddon"
    },
    correctAnswer: "d"
  }
];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
