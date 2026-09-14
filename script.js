/* =========================
   ELEMENTS
========================= */

const enterScreen = document.getElementById("enter-screen");
const music = document.getElementById("music");
const musicButton = document.getElementById("music-button");
const particles = document.getElementById("particles");

let musicPlaying = false;


/* =========================
   ENTER SCREEN
========================= */

enterScreen.addEventListener("click", async () => {

    enterScreen.classList.add("hidden");

    try {
        await music.play();

        musicPlaying = true;

        musicButton.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

    } catch (error) {
        console.log("Music could not start:", error);
    }

});


/* =========================
   MUSIC BUTTON
========================= */

musicButton.addEventListener("click", async (event) => {

    event.stopPropagation();

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';

    } else {

        try {

            await music.play();

            musicPlaying = true;

            musicButton.innerHTML =
                '<i class="fa-solid fa-volume-high"></i>';

        } catch (error) {

            console.log("Music could not start:", error);

        }

    }

});


/* =========================
   PARTICLES
========================= */

function createParticles() {

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (8 + Math.random() * 12) + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particle.style.opacity =
            0.15 + Math.random() * 0.35;

        const size =
            1 + Math.random() * 2;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particles.appendChild(particle);
    }

}

createParticles();


/* =========================
   DISCORD CONNECTION
========================= */

const params =
    new URLSearchParams(window.location.search);

if (params.get("discord") === "connected") {

    const button =
        document.getElementById("discord-button");

    const text =
        document.getElementById("discord-text");

    const status =
        document.getElementById("discord-status");

    text.textContent = "its.anaisha ♡";

    status.style.display = "block";

    button.classList.add("connected");

    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );

}


/* =========================
   VIEW COUNTER
========================= */

/*
   Simple local counter.

   Each browser keeps its own count.
   This does NOT create a global public
   view counter yet.
*/

let views =
    Number(localStorage.getItem("anaisha_views") || 0);

views++;

localStorage.setItem(
    "anaisha_views",
    views
);

document.getElementById("views").textContent =
    views;


/* =========================
   YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   CARD MOUSE EFFECT
========================= */

const card =
    document.querySelector(".profile-card");

document.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 700) return;

    const x =
        (event.clientX / window.innerWidth - 0.5) * 4;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 4;

    card.style.transform =
        `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;

});


document.addEventListener("mouseleave", () => {

    card.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";

});
