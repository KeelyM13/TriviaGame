var panel = $("#quiz-area");

// Question set
const questions = [
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
  
  

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 30,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Submit</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#submit", function() {
  game.done();
});