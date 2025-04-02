const messages = [
    { text: "You make my heart flutter like a butterfly, soft and effortless. Being with you feels like floating in a dream I never want to wake up from.", music: "music/music1.mp3", image: "https://i.pinimg.com/474x/cc/d8/30/ccd830c9a0d40b72a4f09f4cc49cf9df.jpg" },
    { text: "Love is like butterflies, it’s delicate, beautiful, and impossible to control. Every time I see you, I feel them dancing inside me.", music: "music/music2.mp3", image: "https://i.pinimg.com/474x/39/3d/36/393d36b5ac246a46ccf29464ed4227b0.jpg" },
    { text: "No matter where life takes us, I’ll always be right here, holding you close. You are my home, my peace, and my greatest love.", music: "music/music3.mp3", image: "https://i.pinimg.com/474x/7c/be/90/7cbe905becd9096ab5d41d068af2e3e5.jpg" },
    { text: "Loving you isn’t just a feeling, it’s a promise. I would cross any distance, endure any storm, and face anything just to be with you", music: "music/music4.mp3", image: "https://i.pinimg.com/474x/cc/65/1a/cc651a1480a8b9496b6d2e74ab2e4059.jpg" },
    { text: "Love isn’t about finding someone perfect; it’s about coming together, growing, and making something beautiful, just like we do every single day.", music: "music/music5.mp3", image: "https://i.pinimg.com/474x/39/3d/36/393d36b5ac246a46ccf29464ed4227b0.jpg" }
];

let currentIndex = 0;
let audio = document.getElementById("backgroundMusic");
let progressBar = document.getElementById("musicProgress");
let currentTimeDisplay = document.getElementById("currentTime");
let totalTimeDisplay = document.getElementById("totalTime");
let imageElement = document.getElementById("displayImage");

document.getElementById("generateMessage").addEventListener("click", function() {
    let selectedMessage = messages[currentIndex];

    
    document.getElementById("messageDisplay").innerText = selectedMessage.text;

  
    audio.src = selectedMessage.music;
    audio.play();

    
    imageElement.src = selectedMessage.image;
    imageElement.style.display = "block";

  
    progressBar.value = 0;

   
    currentIndex++;
    if (currentIndex >= messages.length) {
        currentIndex = 0;
    }
});


audio.addEventListener("timeupdate", function() {
    if (audio.duration) {
        progressBar.max = audio.duration;
        progressBar.value = audio.currentTime;
        currentTimeDisplay.innerText = formatTime(audio.currentTime);
        totalTimeDisplay.innerText = formatTime(audio.duration);
    }
});


progressBar.addEventListener("input", function() {
    audio.currentTime = progressBar.value;
});


function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}
