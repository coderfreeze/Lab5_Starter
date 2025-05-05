// explore.js

window.addEventListener('DOMContentLoaded', init);

function changeImage() {
  const image = document.querySelector('#explore img');
  if (!window.speechSynthesis.speaking) {
    image.src = `assets/images/smiling.png`;
  } else {
    setTimeout(changeImage, 100);
  }
}

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  const textArea = document.getElementById('text-to-speak');
  const image = document.querySelector('#explore img');
  const synth = window.speechSynthesis;

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', (event) => {
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
  
    synth.speak(utterThis);
    image.src = `assets/images/smiling-open.png`;
    changeImage();
  });
}