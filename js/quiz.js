"use strict"

const questions = [
    {
      question: "Hvor lang tid varer menstruationscyklussen typisk?",
      answers: ["4 dage", "7 dage", "14 dage", "28 dage"],
      correct: 4
    },
    {
      question: "Hvorfor får man menstruation?",
      answers: ["Fordi man er syg", "Det er tilfældigt", "Kroppen gør sig klar til graviditet", "kroppen skiller sig af med affald"],
      correct: 3
    },
    {
        question: "Kan man gå i svømmehallen, når man har menstruation?",
        answers: ["Nej, det stopper ikke", "Ja, hvis man bruger tampon eller menstruationskop", "Kun hvis vandet er koldt", "Nej, det er farligt"],
        correct: 2
      },
      {
        question: "Er det normalt at få ondt i maven under menstruation?",
        answers: ["Nej, det betyder der er noget galt", "Ja, mange oplever det", "Kun voksne får ondt", "Det er en myte"],
        correct: 2
      },
      {
        question: "Hvad er p-piller?",
        answers: ["Smertestillende", "Sovepiller", "Prævention", "Det findes ikke"],
        correct: 3
      },
      {
        question: "Hvad skal man gøre, hvis man bløder igennem i skolen?",
        answers: ["Gå hjem uden at sige noget", "Grine det væk", "Tale med en voksen eller ven og skifte bind/tøj", "Gemme sig resten af dagen"],
        correct: 3
      },
      {
        question: "Hvor i kroppen sidder livmoderen?",
        answers: ["I maven", "I halsen", "I brystet", "I hjernen"],
        correct: 1
      },
      {
        question: "Hvorfor kan nogen føle sig mere kede af det eller vrede før deres menstruation??",
        answers: ["Fordi de vil have opmærksomhed", "Det sker pga. hormonændringer i kroppen", "Fordi de ikke har spist nok", "Det er kun for sjov"],
        correct: 2
      },
      {
        question: "Hvorfor er det en god idé, at drenge lærer om menstruation?",
        answers: ["Fordi de også får det", "For at kunne drille pigerne", "Fordi man bliver voksen af det", "Så de bedre kan forstå og støtte venner og klassekammerater"],
        correct: 4
      },
      {
        question: "Hvad er det vigtigste at huske om menstruation?",
        answers: ["At skjule det så godt som muligt", "At det er ulækkert", "At det er naturligt og ikke noget man skal skamme sig over", "At det altid gør ondt"],
        correct: 4
      },


    // Tilføj flere spørgsmål her...
  ];
  
  let current = 0;
  let score = 0;
  
  // HTML-elementer
  const quizSection = document.getElementById("quiz-section");
  const feedbackSection = document.getElementById("feedback-section");
  const resultSection = document.getElementById("result-section");
  
  const questionNumber = document.getElementById("question-number");
  const questionText = document.getElementById("question-text");
  const answerOptions = document.getElementById("answer-options");
  const feedbackMessage = document.getElementById("feedback-message");
  const finalScore = document.getElementById("final-score");
  
  document.getElementById("continue-button").onclick = nextQuestion;
  document.getElementById("restart-button").onclick = restartQuiz;
  
  function showQuestion() {
    quizSection.classList.add("visible");
    feedbackSection.classList.remove("visible");
    resultSection.classList.remove("visible");
  
    const q = questions[current];
    questionNumber.textContent = `Spørgsmål ${current + 1} / ${questions.length}`;
    questionText.textContent = q.question;
  
    answerOptions.innerHTML = "";
    q.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.onclick = () => checkAnswer(index === q.correct);
      answerOptions.appendChild(btn);
    });
  }
  
  function checkAnswer(isCorrect) {
    quizSection.classList.remove("visible");
    feedbackSection.classList.add("visible");
    feedbackMessage.textContent = isCorrect ? "Rigtigt!" : "Forkert!";
    if (isCorrect) score++;
  }
  
  function nextQuestion() {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    resultSection.classList.add("visible");
    feedbackSection.classList.remove("visible");
    finalScore.textContent = `Du fik ${score} ud af ${questions.length} rigtige.`;
  }
  
  function restartQuiz() {
    current = 0;
    score = 0;
    showQuestion();
  }
  
  // Start quizzen
  showQuestion();