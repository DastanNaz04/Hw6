const tracks = [
    { title: "Трек 1", src: "track1.mp3" },
    { title: "Трек 2", src: "track2.mp3" },
    { title: "Трек 3", src: "track3.mp3" },
];

let currentTrack = 0;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const trackTitle = document.getElementById("track-title");
const trackList = document.getElementById("track-list");

// Функция для обновления трека
function updateTrack() {
    audio.src = tracks[currentTrack].src;
    trackTitle.textContent = tracks[currentTrack].title;
    audio.load();
}

// Функция для воспроизведения/паузы
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸️ Пауза";
    } else {
        audio.pause();
        playBtn.textContent = "▶️ Воспроизвести";
    }
}

// Функция для перехода к следующему треку
function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    updateTrack();
    audio.play();
    playBtn.textContent = "⏸️ Пауза";
}

// Заполнение списка треков
tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = track.title;
    li.addEventListener("click", () => {
        currentTrack = index;
        updateTrack();
        audio.play();
        playBtn.textContent = "⏸️ Пауза";
    });
    trackList.appendChild(li);
});

// Обработчики событий
playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextTrack);

// Инициализация
updateTrack();
