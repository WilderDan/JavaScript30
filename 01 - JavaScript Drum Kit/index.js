const sounds = document.querySelectorAll("audio");
const keys = document.querySelectorAll(".key");

sounds.forEach((audio) => {
  audio.addEventListener("ended", () => {
    const key = document.querySelector(
      `div[data-key="${audio.getAttribute("data-key")}"`
    );

    key.classList.remove("playing");
  });
});

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const audio = document.querySelector(
      `audio[data-key="${key.getAttribute("data-key")}"]`
    );

    key.classList.add("playing");
    audio.play();
  });
});

window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`div[data-key="${e.code}"]`);

  if (audio && key) {
    key.classList.add("playing");
    audio.play();
  }
});
