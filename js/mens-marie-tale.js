"use strict"

(function() {
    // Alle kendte audio element IDs for dine sider
    const possibleAudioIds = ['voiceAudioStart', 'voiceAudioQuiz', 'voiceAudioSpil'];
  
    function playFirstAvailableAudio() {
      for (const id of possibleAudioIds) {
        const audio = document.getElementById(id);
        if (audio) {
          audio.currentTime = 0;
          audio.play().catch(error => {
            console.error(`Fejl ved automatisk afspilning (${id}):`, error);
            // evt. fallback til play-knap kan tilføjes her
          });
          break; // Når den har fundet og prøvet at spille en lyd, stopper den
        }
      }
    }
  
    document.addEventListener("DOMContentLoaded", playFirstAvailableAudio);
    window.addEventListener("pageshow", playFirstAvailableAudio);
  })();

  
  