function playSound(key) {
  const audio = document.querySelector(
    `audio[data-key="${key.getAttribute("data-key")}"]`
  );

  if (!key || !audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function handleKeyDown(e) {
  const key = document.querySelector(`div[data-key="${e.code}"]`);
  if (key) playSound(key);
}

function handleClick(e) {
  playSound(e.currentTarget);
}

window.addEventListener("keydown", handleKeyDown);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", handleClick);
  key.addEventListener("transitionend", removeTransition);
});
