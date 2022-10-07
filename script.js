const button1 = document.getElementById("button1");
let audio1 = new Audio();
audio1.src = "./asset/spell.wav";

const audioCtx = new AudioContext();
console.log(audioCtx);

/* button1.addEventListener("click", () => {
  audio1.play();
  audio1.addEventListener("playing", () => {
    console.log("audio started");
  });
  audio1.addEventListener("ended", () => {
    console.log("audio ended");
  });
});
 */
const button2 = document.getElementById("button2");

button2.addEventListener("click", playSound);

function playSound() {
  const oscillator = audioCtx.createOscillator();
  oscillator.connect(audioCtx.destination);
  oscillator.type = "triangle";
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
  }, 1000);
}
