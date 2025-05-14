"use strict"

let currentPlanet = '';

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  if(screenId === "actionScreen")
  {
    updateChoices();
  }  
}

const planetInfo = {
  'bloodmoon': {
    title: 'Blodmånen',
    description: 'Blodmånen markerer starten på Susis cyklus (dag 1–7). Her har hun menstruation og kan føle sig træt og følsom. Hjælp hende med at vælge det, der gør hende glad og komfortabel i denne fase!',
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
    description: 'Spireplaneten markerer dagene efter Susis menstruation (dag 8–11). Hun begynder at få mere energi og føle sig lettere tilpas. Hjælp hende med at vælge det, der støtter hendes spirende humør og lyst til at komme i gang igen!',
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
    description: 'Power Boost Planeten markerer dagene, hvor Susis energi topper (dag 12–13). Hun føler sig stærk, udadvendt og klar på det hele! Hjælp hende med at vælge det, der matcher hendes power og drive i denne fase.',
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
    description: 'Ægløsningsplaneten markerer midten af Susis cyklus (dag 14–15). Hun føler sig energisk, glad og ekstra sprudlende. Hjælp hende med at vælge det, der får hende til at skinne endnu mere i denne fase!',
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
    description: 'PMS-øen markerer dagene op til Susis menstruation (dag 16–25). Hun kan føle sig irritabel, træt eller trist, men kan have lyst til lækkert mad, lidt kærlig omsorg og lidt stille tid. Hjælp hende med at vælge det, der kan løfte hendes humør i denne fase!',
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
    description: 'Skyggeplaneten markerer de sidste dage i Susis cyklus (dag 26–28). Hun føler sig tung, træt og har brug for at trække sig lidt tilbage. Hjælp hende med at vælge det, der giver ro og tryghed i denne fase.',
    image: '../images/shadow-planet.webp',
    answers: [
      { text: "Varmepude", value: "varmepude", image: "../images/varmepude.webp" },
      { text: "Hund der gør", value: "hund", image: "../images/dog.webp" },
      { text: "Slappe af", value: "afslapning", image: "../images/pude.webp" }
    ],
    correctAnswer: ["varmepude", "afslapning"]
  }
};

let indexCounter = 0;

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

  if (currentPlanet === 'bloodmoon') {
    if (choice === 'chokolade' || choice === 'te') {
      feedbackHeader = 'Susi blev glad!';
      feedbackMessage = 'På Blodmånen har Susi mest lyst til chokolade og te – det trøster og varmer. Hun er træt og har brug for ro, så en tur må vente til senere i cyklussen.';
    } else {
      feedbackHeader = 'Susi blev sur!';
      feedbackMessage = 'På Blodmånen har Susi mest lyst til chokolade og te – det trøster og varmer. Hun er træt og har brug for ro, så en tur må vente til senere i cyklussen.';
    }
  } else if (currentPlanet === 'spireplaneten') {
    if (choice === 'bowling' || choice === 'snakke') {
      feedbackHeader = 'Susi blev glad!';
      feedbackMessage = 'På Spireplaneten elsker Susi at lege og grine med sine venner. Hun vil slet ikke sove, for der er alt for meget sjov at lave!';
    } else {
      feedbackHeader = 'Susi blev sur!';
      feedbackMessage = 'På Spireplaneten elsker Susi at lege og grine med sine venner. Hun vil slet ikke sove, for der er alt for meget sjov at lave!';
    }
  } else if (currentPlanet === 'powerboost') {
    if (choice === 'walk') {
      feedbackHeader = 'Susi blev glad!';
      feedbackMessage = 'På Powerboost-planeten får Susi masser af energi! Hun vil hellere gå og bevæge sig, end at sidde stille og se tv.';
    } else {
      feedbackHeader = 'Susi blev sur!';
      feedbackMessage = 'På Powerboost-planeten får Susi masser af energi! Hun vil hellere gå og bevæge sig, end at sidde stille og se tv.';
    }
  } else if (currentPlanet === 'aegloesning') {
    if (choice === 'kys' || choice === 'bowling') {
      feedbackHeader = 'Susi blev glad!';
      feedbackMessage = 'På Ægløsnings Planeten Susi fuld af energi og lidt flirtende. Hun vil hellere bowle, lege og måske give et lille kys end at sidde stille og slappe af.';
    } else {
      feedbackHeader = 'Susi blev sur!';
      feedbackMessage = 'På Ægløsnings Planeten Susi fuld af energi og lidt flirtende. Hun vil hellere bowle, lege og måske give et lille kys end at sidde stille og slappe af.';
    }
  } else if (currentPlanet === 'pms') {
    if (choice === 'burger' || choice === 'alene') {
      feedbackHeader = 'Susi blev glad!';
      feedbackMessage = 'På PMS Øen har Susi mest lyst til en kæmpe burger og lidt alene-tid. Hun gider ikke triste TikTok-videoer, men vil bare hygge sig i fred.';
    } else {
      feedbackHeader = 'Susi blev sur!';
      feedbackMessage = 'På PMS Øen har Susi mest lyst til en kæmpe burger og lidt alene-tid. Hun gider ikke triste TikTok-videoer, men vil bare hygge sig i fred.';
    }
  } else if (currentPlanet === 'skygge') {
    if (choice === 'varmepude' || choice === 'afslapning') {
      feedbackHeader = 'Susi blev glad!';
      feedbackMessage = 'På Skygge Planeten vil Susi bare slappe af med en varmepude og ro omkring sig. Ingen hunde der gør, tak!';
    } else {
      feedbackHeader = 'Susi blev sur!';
      feedbackMessage = 'På Skygge Planeten vil Susi bare slappe af med en varmepude og ro omkring sig. Ingen hunde der gør, tak!';
    }
  } else {
    feedbackHeader = 'Vælg en planet først!';
  }

  if (correctAnswers.includes(choice)) {
    susiVideoSource.src = '../images/susi-glad.webm';
  } else {
    susiVideoSource.src = '../images/susi-sur.webm';
  }

  console.log("Video source is now:", susiVideoSource.src);
  susiVideo.load(); 
  susiVideo.onloadeddata = () => {
    susiVideo.play();
  };

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
    button.innerHTML = choice.text

    const image = document.createElement("img");
    image.src = choice.image;
    image.alt = choice.text;
    image.className = "choice-image";

    button.appendChild(image);
    button.onclick = () => handleChoice(choice.value);
    actionButtons.appendChild(button);
  });
};

function returnToPlanets() {
  const planets = document.querySelectorAll('.planet');
  planets.forEach(p => {
    if (p.dataset.planet === currentPlanet) {
      p.classList.add('done');
      p.onclick = null;
    }
  });

  
  const susiVideoSource = document.getElementById('susiVideoSource');
  const susiVideo = document.getElementById('susiVideo');
  susiVideoSource.src = '../images/susi-neutral.webm';
  susiVideo.load();
  susiVideo.play();

  showScreen('planetScreen');
}