"use strict"

let currentPlanet = '';

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function choosePlanet(planet) {
  currentPlanet = planet;

  let title = '';
  let description = '';
  if (planet === 'blodmaane') {
    title = 'Blodmånen';
    description = 'Starten på Susis cyklus. Hun har menstruation og føler sig træt.';
  } else if (planet === 'solen') {
    title = 'Solen';
    description = 'Susi er energisk og i godt humør.';
  }

  document.getElementById('planetTitle').textContent = title;
  document.getElementById('planetDescription').textContent = description;

  showScreen('planetInfoScreen');
}

function handleChoice(choice) {
  let feedback = '';

  if (currentPlanet === 'blodmaane') {
    if (choice === 'chokolade' || choice === 'te') {
      feedback = 'Godt valg! Susi elsker chokolade og te.';
    } else {
      feedback = 'Ups! Susi gider ikke gå en tur lige nu.';
    }
  } else if (currentPlanet === 'solen') {
    if (choice === 'gaatur') {
      feedback = 'Perfekt! Susi elsker en gåtur i solen.';
    } else {
      feedback = 'Hmm… det var ikke lige det, hun havde lyst til nu.';
    }
  }

  document.getElementById('feedbackMessage').textContent = feedback;
  showScreen('feedbackScreen');
}

function returnToPlanets() {
  const planets = document.querySelectorAll('.planet');
  planets.forEach(p => {
    if (p.textContent.replace(/\s/g, '').toLowerCase() === currentPlanet) {
      p.classList.add('done');
      p.onclick = null;
    }
  });

  showScreen('planetScreen');
}