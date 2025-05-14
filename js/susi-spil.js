"use strict"

let currentPlanet = '';

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function choosePlanet(planet) {
  currentPlanet = planet;

  const planetInfo = {
    'bloodmoon': {
      title: 'Blodmånen',
      description: 'Blodmånen markerer starten på Susis cyklus (dag 1–7). Her har hun menstruation og kan føle sig træt og følsom. Hjælp hende med at vælge det, der gør hende glad og komfortabel i denne fase!',
      image: '../images/bloodmoon.webp'
    },
    'spireplaneten': {
      title: 'Spire Planeten',
      description: 'Spireplaneten markerer dagene efter Susis menstruation (dag 8–11). Hun begynder at få mere energi og føle sig lettere tilpas. Hjælp hende med at vælge det, der støtter hendes spirende humør og lyst til at komme i gang igen!',
      image: '../images/spire-planet.webp'
    },
    'powerboost': {
      title: 'Power Boost Planeten',
      description: 'Power Boost Planeten markerer dagene, hvor Susis energi topper (dag 12–13). Hun føler sig stærk, udadvendt og klar på det hele! Hjælp hende med at vælge det, der matcher hendes power og drive i denne fase.',
      image: '../images/power-boost.webp'
    },
    'aegloesning': {
      title: 'Ægløsnings Planeten',
      description: 'Ægløsningsplaneten markerer midten af Susis cyklus (dag 14–15). Hun føler sig energisk, glad og ekstra sprudlende. Hjælp hende med at vælge det, der får hende til at skinne endnu mere i denne fase!',
      image: '../images/ovulation-planet.webp'
    },
    'pms': {
      title: 'PMS Øen',
      description: 'PMS-øen markerer dagene op til Susis menstruation (dag 16–25). Hun kan føle sig irritabel, træt eller trist, men kan have lyst til lækkert mad, lidt kærlig omsorg og lidt stille tid. Hjælp hende med at vælge det, der kan løfte hendes humør i denne fase!',
      image: '../images/pms-island.webp'
    },
    'skygge': {
      title: 'Skygge Planeten',
      description: 'Skyggeplaneten markerer de sidste dage i Susis cyklus (dag 26–28). Hun føler sig tung, træt og har brug for at trække sig lidt tilbage. Hjælp hende med at vælge det, der giver ro og tryghed i denne fase.',
      image: '../images/shadow-planet.webp'
    }
  };

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
  let feedback = '';

  // Feedback afhænger af planet og valg
  if (currentPlanet === 'bloodmoon') {
    if (choice === 'chokolade' || choice === 'te') {
      feedback = 'Godt valg! Susi elsker chokolade og te under menstruationen.';
    } else {
      feedback = 'Ups! Susi gider ikke gå en tur lige nu.';
    }
  } 
  else if (currentPlanet === 'spireplaneten') {
    if (choice === 'gaatur') {
      feedback = 'Perfekt! Susi nyder en frisk gåtur i den spirende energi.';
    } else {
      feedback = 'Hmm… det var ikke lige det, hun havde lyst til.';
    }
  }
  else if (currentPlanet === 'powerboost') {
    if (choice === 'gaatur') {
      feedback = 'Ja tak! Susi er sprængfyldt af energi og vil gerne ud!';
    } else {
      feedback = 'Det er fint, men hun vil hellere bevæge sig.';
    }
  }
  else if (currentPlanet === 'aegloesning') {
    if (choice === 'chokolade') {
      feedback = 'Yes! Chokolade topper lige humøret i dag.';
    } else {
      feedback = 'Det går, men chokolade havde været bedre.';
    }
  }
  else if (currentPlanet === 'pms') {
    if (choice === 'te') {
      feedback = 'Godt valg! Susi har brug for noget beroligende.';
    } else {
      feedback = 'Det hjælper ikke helt på PMS\'en.';
    }
  }
  else if (currentPlanet === 'skygge') {
    if (choice === 'te' || choice === 'chokolade') {
      feedback = 'Det hjælper lidt på humøret.';
    } else {
      feedback = 'En gåtur er for meget i dag.';
    }
  } 
  else {
    feedback = 'Vælg en planet først!';
  }

  document.getElementById('feedbackMessage').textContent = feedback;
  showScreen('feedbackScreen');
}

function returnToPlanets() {
  const planets = document.querySelectorAll('.planet');
  planets.forEach(p => {
    if (p.dataset.planet === currentPlanet) {
      p.classList.add('done');
      p.onclick = null;
    }
  });

  showScreen('planetScreen');
}