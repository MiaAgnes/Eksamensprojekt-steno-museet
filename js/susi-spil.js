"use strict"

let currentPlanet = '';
let currentPlanetIndex = 0;

const planetOrder = [
  'bloodmoon',
  'spireplaneten',
  'powerboost',
  'aegloesning',
  'pms',
  'skygge'
];

function showScreen(screenId) {
  // Stop cutscene-videoen, hvis vi forlader skærmen
  const cutsceneVideo = document.getElementById('cutsceneVideo');
  if (cutsceneVideo && screenId !== 'cutsceneScreen') {
    cutsceneVideo.pause();
    cutsceneVideo.currentTime = 0;
  }

  // Skift aktiv skærm
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');

  if (screenId === "actionScreen") {
    updateChoices();
  }
}

const planetInfo = {
  'bloodmoon': {
    title: 'Blodmånen',
    description: 'Blodmånen markerer starten på Susis cyklus...',
    image: '../images/blood-moon.webp',
    answers: [
      { text: "Chokolade", value: "chokolade", image: "../images/chokolade.webp" },
      { text: "Gå en tur", value: "walk", image: "../images/walk.webp" },
      { text: "Te", value: "te", image: "../images/te.webp" }
    ],
    correctAnswer: ["chokolade", "te"]
  },
  'spireplaneten': {
    title: 'Spire Planeten',
    description: 'Spireplaneten markerer dagene efter Susis menstruation...',
    image: '../images/spire-planet.webp',
    answers: [
      { text: "Bowling", value: "bowling", image: "../images/bowling.webp" },
      { text: "Snakke", value: "snakke", image: "../images/bla.webp" },
      { text: "Sove", value: "sove", image: "../images/seng.webp" }
    ],
    correctAnswer: ["bowling", "snakke"]
  },
  'powerboost': {
    title: 'Power Boost Planeten',
    description: 'Power Boost Planeten markerer dagene...',
    image: '../images/power-boost.webp',
    answers: [
      { text: "Gaming", value: "gaming", image: "../images/computer.webp" },
      { text: "Gå en tur", value: "walk", image: "../images/walk.webp" },
      { text: "Se serie", value: "serie", image: "../images/tv.webp" }
    ],
    correctAnswer: ["walk"]
  },
  'aegloesning': {
    title: 'Ægløsnings Planeten',
    description: 'Ægløsningsplaneten markerer midten af Susis cyklus...',
    image: '../images/ovulation-planet.webp',
    answers: [
      { text: "Kys", value: "kys", image: "../images/kys.webp" },
      { text: "Bowling", value: "bowling", image: "../images/bowling.webp" },
      { text: "Slappe af", value: "afslapning", image: "../images/pude.webp" }
    ],
    correctAnswer: ["kys", "bowling"]
  },
  'pms': {
    title: 'PMS Øen',
    description: 'PMS-øen markerer dagene op til Susis menstruation...',
    image: '../images/pms-island.webp',
    answers: [
      { text: "Trist video", value: "video", image: "../images/phone.webp" },
      { text: "Burger", value: "burger", image: "../images/burger.webp" },
      { text: "Alenetid", value: "alene", image: "../images/alene.webp" }
    ],
    correctAnswer: ["burger", "alene"]
  },
  'skygge': {
    title: 'Skygge Planeten',
    description: 'Skyggeplaneten markerer de sidste dage i Susis cyklus...',
    image: '../images/shadow-planet.webp',
    answers: [
      { text: "Varmepude", value: "varmepude", image: "../images/varmepude.webp" },
      { text: "Hund der gør", value: "hund", image: "../images/dog.webp" },
      { text: "Slappe af", value: "afslapning", image: "../images/pude.webp" }
    ],
    correctAnswer: ["varmepude", "afslapning"]
  }
};

function choosePlanet(planet) {
  currentPlanet = planet;

  const questionImage = document.querySelectorAll(".question-image");

  function updateImage() {
    questionImage.forEach(image => {
      image.src = planetInfo[currentPlanet].image;
    });
  }

  if (planetInfo[planet]) {
    document.getElementById('planetTitle').textContent = planetInfo[planet].title;
    document.getElementById('planetDescription').textContent = planetInfo[planet].description;
    updateImage();
  } else {
    document.getElementById('planetTitle').textContent = 'Ukendt planet';
    document.getElementById('planetDescription').textContent = 'Der er ikke nogen beskrivelse for denne planet.';
  }

  const planetElement = document.querySelector(`.planet[data-planet="${planet}"]`);
  if (planetElement) {
    const imgElement = planetElement.querySelector('img');
    const grayImage = planetElement.getAttribute('data-gray');
    if (imgElement && grayImage) {
      imgElement.src = grayImage;
    }
    planetElement.onclick = null;
    planetElement.style.cursor = 'default';
    planetElement.classList.add('done');
  }

  showScreen('planetInfoScreen');
}

function handleChoice(choice) {
  const susiVideo = document.getElementById('susiVideo-feedback');
  const susiVideoSource = document.getElementById('susiVideoSource');
  const feedbackHeaderEl = document.getElementById('feedbackHeader');
  const feedbackMessageEl = document.getElementById('feedbackMessage');

  const correctAnswers = planetInfo[currentPlanet]?.correctAnswer || [];

  let feedbackHeader = '';
  let feedbackMessage = '';

  if (correctAnswers.includes(choice)) {
    feedbackHeader = 'Susi blev glad!';
    susiVideoSource.src = '../images/susi-glad.webm';
  } else {
    feedbackHeader = 'Susi blev sur!';
    susiVideoSource.src = '../images/susi-sur.webm';
  }

  feedbackMessage = planetInfo[currentPlanet]?.description || "";

  susiVideo.load();
  susiVideo.onloadeddata = () => susiVideo.play();

  feedbackHeaderEl.textContent = feedbackHeader;
  feedbackMessageEl.textContent = feedbackMessage;

  showScreen('feedbackScreen');
}

function updateChoices() {
  const choices = planetInfo[currentPlanet].answers;
  const actionButtons = document.getElementById('actionButtons');
  actionButtons.innerHTML = "";

  choices.forEach(choice => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.innerHTML = choice.text;

    const image = document.createElement("img");
    image.src = choice.image;
    image.alt = choice.text;
    image.className = "choice-image";

    button.appendChild(image);
    button.onclick = () => handleChoice(choice.value);
    actionButtons.appendChild(button);
  });
}

function returnToPlanets() {
  const susiVideoSource = document.getElementById('susiVideoSource');
  const susiVideo = document.getElementById('susiVideo');
  susiVideoSource.src = '../images/susi-neutral.webm';
  susiVideo.load();
  susiVideo.play();

  currentPlanetIndex++;

  updatePlanetLockState();
  updateActivePlanetHighlight();

  if (currentPlanetIndex >= planetOrder.length) {
    showScreen('cutsceneScreen');
  
    // Spil video manuelt
    const cutsceneVideo = document.getElementById('cutsceneVideo');
    if (cutsceneVideo) {
      cutsceneVideo.play();
    }
  
    // Vent samme længde som videoens varighed
    setTimeout(() => {
      window.location.href = '../html/end.html';
    }, 46000); // 20 sekunder (justér til videoens længde)
  
    return;
  }

  showScreen('planetScreen');
}

function updatePlanetLockState() {
  const allPlanets = document.querySelectorAll(".planet");

  allPlanets.forEach(planetEl => {
    const planetName = planetEl.dataset.planet;
    const planetIndex = planetOrder.indexOf(planetName);

    if (planetIndex < currentPlanetIndex) {
      planetEl.style.pointerEvents = "none";
      planetEl.style.opacity = "0.4";
    } else if (planetIndex === currentPlanetIndex) {
      planetEl.style.pointerEvents = "auto";
      planetEl.style.opacity = "1";
    } else {
      planetEl.style.pointerEvents = "none";
      planetEl.style.opacity = "0.2";
    }
  });
}

function updateActivePlanetHighlight() {
  document.querySelectorAll('.planet').forEach(p => p.classList.remove('active'));

  if (currentPlanetIndex < planetOrder.length) {
    const activePlanet = document.querySelector(`.planet[data-planet="${planetOrder[currentPlanetIndex]}"]`);
    if (activePlanet) {
      activePlanet.classList.add('active');
    }
  }
}

// Initial opstart
document.addEventListener("DOMContentLoaded", () => {
  updatePlanetLockState();
  updateActivePlanetHighlight();
});