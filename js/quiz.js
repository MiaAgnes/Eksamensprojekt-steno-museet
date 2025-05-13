"use strict"

const questions = [
    {
        question: "Hvor lang tid varer menstruationscyklussen typisk?",
        answers: ["4 dage", "7 dage", "14 dage", "28 dage"],
        correct: 3,
        feedback: "Menstruationscyklussen varer typisk 28 dage, men det kan variere fra person til person.",
        image: "../images/kalender.webp"
    },
    {
        question: "Hvorfor får man menstruation?",
        answers: ["Fordi man er syg", "Det er tilfældigt", "Kroppen gør sig klar til graviditet", "Kroppen skiller sig af med affald"],
        correct: 2,
        feedback: "Menstruation er en del af kroppens cyklus, hvor den forbereder sig på en potentiel graviditet.",
        image: "../images/test.webp"
    },
    {
        question: "Kan man gå i svømmehallen, når man har menstruation?",
        answers: ["Nej, det stopper ikke", "Ja, hvis man bruger tampon eller menstruationskop", "Kun hvis vandet er koldt", "Nej, det er farligt"],
        correct: 1,
        feedback: "Man kan sagtens svømme med menstruation, så længe man bruger tampon eller menstruationskop.",
        image: "../images/tampon.webp"
    },
    {
        question: "Er det normalt at få ondt i maven under menstruation?",
        answers: ["Nej, det betyder der er noget galt", "Ja, mange oplever det", "Kun voksne får ondt", "Det er en myte"],
        correct: 1,
        feedback: "Det er normalt at opleve mavesmerter under menstruation på grund af muskelkramper i livmoderen.",
        image: "../images/panodil.webp"
    },
    {
        question: "Hvad er p-piller?",
        answers: ["Smertestillende", "Sovepiller", "Prævention", "Det findes ikke"],
        correct: 2,
        feedback: "P-piller er en form for prævention, som beskytter mod graviditet.",
        image: "../images/p-piller.webp"
    },
    {
        question: "Hvad skal man gøre, hvis man bløder igennem i skolen?",
        answers: ["Gå hjem uden at sige noget", "Grine det væk", "Tale med en voksen eller ven og skifte bind/tøj", "Gemme sig resten af dagen"],
        correct: 2,
        feedback: "Hvis man bløder igennem, skal man tale med en voksen og få hjælp til at skifte.",
        image: "../images/bind.webp"
    },
    {
        question: "Hvor i kroppen sidder livmoderen?",
        answers: ["I maven", "I halsen", "I brystet", "I hjernen"],
        correct: 0,
        feedback: "Livmoderen sidder i underlivet, ikke i maven, men tæt på.",
        image: "../images/livmoder.webp"

    },
    {
        question: "Hvorfor kan nogen føle sig mere kede af det eller vrede før deres menstruation?",
        answers: ["Fordi de vil have opmærksomhed", "Det sker pga. hormonændringer i kroppen", "Fordi de ikke har spist nok", "Det er kun for sjov"],
        correct: 1,
        feedback: "Hormonelle ændringer før menstruation kan påvirke humøret.",
        image: "../images/phone.webp"
    },
    {
        question: "Hvorfor er det en god idé, at drenge lærer om menstruation?",
        answers: ["Fordi de også får det", "For at kunne drille pigerne", "Fordi man bliver voksen af det", "Så de bedre kan forstå og støtte venner og klassekammerater"],
        correct: 3,
        feedback: "Jo mere drenge ved om menstruation, jo bedre kan de støtte deres venner.",
        image: "../images/mens-kop.webp"
    },
    {
        question: "Hvad er det vigtigste at huske om menstruation?",
        answers: ["At skjule det så godt som muligt", "At det er ulækkert", "At det er naturligt og ikke noget man skal skamme sig over", "At det altid gør ondt"],
        correct: 2,
        feedback: "Menstruation er en naturlig del af kroppens cyklus og ikke noget at skamme sig over.",
        image: "../images/mens-trus.webp"
    }
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
const feedbackInfo = document.getElementById("feedback-info");
const questionImage = document.querySelectorAll(".question-image")
const finalScore = document.getElementById("final-score");

document.getElementById("next-button").onclick = nextQuestion;
document.getElementById("restart-button").onclick = restartQuiz;

function showQuestion() {
    quizSection.classList.add("visible");
    feedbackSection.classList.remove("visible");
    resultSection.classList.remove("visible");

    const q = questions[current];
    questionNumber.textContent = `Spørgsmål ${current + 1} / ${questions.length}`;
    questionText.textContent = q.question;

    questionImage.forEach((image) =>{
        image.src = q.image;
    });

    answerOptions.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.className = "answer-button";
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index);
        answerOptions.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const q = questions[current];
    quizSection.classList.remove("visible");
    feedbackSection.classList.add("visible");
    feedbackMessage.textContent = selectedIndex === q.correct ? "Rigtigt!" : "Forkert!";
    feedbackInfo.textContent = q.feedback;
    if (selectedIndex === q.correct) score++;
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
window.onload = showQuestion;