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
      description: 'Starten på Susis cyklus. Hun har menstruation og føler sig træt.'
    },
    'spireplaneten': {
      title: 'Spire Planeten',
      description: 'Susi mærker nyt håb og energi spirer frem.'
    },
    'powerboost': {
      title: 'Power Boost Planeten',
      description: 'Susi er fuld af energi og power!'
    },
    'aegloesning': {
      title: 'Ægløsnings Planeten',
      description: 'Susi er midt i sin cyklus og føler sig ovenpå.'
    },
    'pms': {
      title: 'PMS Øen',
      description: 'Susi føler sig irritabel og har brug for ekstra omsorg.'
    },
    'skygge': {
      title: 'Skygge Planeten',
      description: 'En dag hvor Susi føler sig lidt nede.'
    }
  };

  if (planetInfo[planet]) {
    document.getElementById('planetTitle').textContent = planetInfo[planet].title;
    document.getElementById('planetDescription').textContent = planetInfo[planet].description;
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