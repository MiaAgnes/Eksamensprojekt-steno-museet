"use strict"

function playAudio1() {
    const voiceAudio = document.getElementById('voiceAudio1');
    
    if (voiceAudio.paused || voiceAudio.currentTime === 0) {
      voiceAudio.currentTime = 0;
      voiceAudio.play().catch(error => {
        console.error("Fejl ved automatisk afspilning (start):", error);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", playAudio1);
  window.addEventListener("pageshow", playAudio1);

  function playAudio2() {
    const voiceAudio = document.getElementById('voiceAudio2');
    
    if (voiceAudio.paused || voiceAudio.currentTime === 0) {
      voiceAudio.currentTime = 0;
      voiceAudio.play().catch(error => {
        console.error("Fejl ved automatisk afspilning (quiz):", error);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", playAudio2);
  window.addEventListener("pageshow", playAudio2);