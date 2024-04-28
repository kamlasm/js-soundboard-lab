
/*-------------------------------- Constants --------------------------------*/

const soundsArray = ["work_it", "harder", "make_it", "better", "do_it", "faster", "makes_us", "stronger", "more_than", "ever", "hour", "after", "our", "work_is", "never", "over"];

/*-------------------------------- Variables --------------------------------*/

let clickedSound;
let randomSound;
let currentIndex = 0;
let intervalId;

/*------------------------ Cached Element References ------------------------*/

const playerDiv = document.querySelector("#player");
const randomizeButton = document.querySelector("#randomizer");
const audioPlayer = document.querySelector("audio");
const playSongButton = document.querySelector("#play-song");

/*-------------------------------- Functions --------------------------------*/

const playSound = (event) => {
    clickedSound = event.target.id;
    audioPlayer.src = `sounds/${clickedSound}.wav`;
    audioPlayer.play();
}

const randomizeSound = () => {
    const index = Math.floor(Math.random() * soundsArray.length);
    const randomSound = soundsArray[index];
    audioPlayer.src = `sounds/${randomSound}.wav`;
    audioPlayer.play();

    const randomSoundElement = document.getElementById(randomSound);
    randomSoundElement.style.background = "black";
    randomizeButton.addEventListener("mouseleave", () => {
        randomSoundElement.removeAttribute("style");
    })
}

const setIntervalId = () => {
    intervalId = setInterval(playSong, 1000);
}

const playSong = () => {

    if (currentIndex > soundsArray.length -1) {
        clearInterval(intervalId);

    } else {
        let currentSound = soundsArray[currentIndex];
        audioPlayer.src = `sounds/${currentSound}.wav`;
        audioPlayer.play();
        currentIndex++;
    }
}

/*----------------------------- Event Listeners -----------------------------*/

playerDiv.addEventListener("click", playSound);
randomizeButton.addEventListener("click", randomizeSound);
playSongButton.addEventListener("click", setIntervalId);