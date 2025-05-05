// expose.js
window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const image = document.querySelector("#expose img");
  const audio = document.querySelector('#expose audio');
  const audioImage = document.querySelector('#volume-controls img');
  const volumeSlider = document.getElementById('volume');
  const playButton = document.querySelector('#expose button');

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    if (hornSelect.value === "air-horn") {
      image.src = `assets/images/air-horn.svg`;
      image.alt = "Air Horn";
      audio.src = `assets/audio/air-horn.mp3`;
    } else if (hornSelect.value === 'car-horn') {
      image.src = `assets/images/car-horn.svg`;
      image.alt = "Car Horn";
      audio.src = `assets/audio/car-horn.mp3`;
    } else {
      image.src = `assets/images/party-horn.svg`;
      image.alt = "Party Horn";
      audio.src = `assets/audio/party-horn.mp3`;
    }
  });


  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });


  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);
    if (volume === 0) {
      audioImage.src = `assets/icons/volume-level-0.svg`;
    } else if (volume < 33) {
      audioImage.src = `assets/icons/volume-level-1.svg`;
    } else if (volume < 67) {
      audioImage.src = `assets/icons/volume-level-2.svg`;
    } else {
      audioImage.src = `assets/icons/volume-level-3.svg`;
    }
    audio.volume = volume/100;
  });
}