/* =========================================
   ENTER SCREEN
========================================= */

const enterScreen = document.getElementById("enter-screen");
const music = document.getElementById("music");
const musicButton = document.getElementById("music-button");

let musicPlaying = false;

enterScreen.addEventListener("click", async () => {

    enterScreen.classList.add("hidden");

    try {
        await music.play();

        musicPlaying = true;

        musicButton.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

    } catch (error) {
        console.log("Music could not autoplay.");
    }

});


/* =========================================
   MUSIC BUTTON
========================================= */

musicButton.addEventListener("click", async () => {

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

            console.log("Music could not play.");

        }

    }

});


/* =========================================
   YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   FAKE VIEW COUNTER
========================================= */

const viewsElement = document.getElementById("views");

let views = localStorage.getItem("anaisha_views");

if (!views) {
    views = Math.floor(Math.random() * 30) + 1;
} else {
    views = Number(views) + 1;
}

localStorage.setItem("anaisha_views", views);

viewsElement.textContent = views;


/* =========================================
   FLOATING PARTICLES
========================================= */

const particlesContainer =
    document.getElementById("particles");

function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    const size =
        Math.random() * 3 + 1;

    const left =
        Math.random() * 100;

    const duration =
        Math.random() * 10 + 8;

    const delay =
        Math.random() * 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${left}%`;

    particle.style.animationDuration =
        `${duration}s`;

    particle.style.animationDelay =
        `${delay}s`;

    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, (duration + delay) * 1000);

}


/* Create particles */

for (let i = 0; i < 35; i++) {
    createParticle();
}


/* Keep creating them */

setInterval(() => {
    createParticle();
}, 700);


/* =========================================
   CARD MOUSE GLOW
========================================= */

const card =
    document.querySelector(".profile-card");

document.addEventListener("mousemove", (event) => {

    const rect =
        card.getBoundingClientRect();

    const x =
        event.clientX - rect.left;

    const y =
        event.clientY - rect.top;

    card.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(255,255,255,0.08),
            rgba(10,10,14,0.68) 35%
        )
    `;

});


document.addEventListener("mouseleave", () => {

    card.style.background =
        "rgba(10,10,14,0.68)";

});
