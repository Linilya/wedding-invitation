// ==========================
// Таймер до свадьбы
// ==========================

const weddingDate = new Date("September 25, 2026 14:00:00").getTime();

function updateTimer() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    if (!days || !hours || !minutes || !seconds) return;

    if (distance <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = String(d).padStart(2, "0");
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");

}

updateTimer();
setInterval(updateTimer, 1000);


// ==========================
// Анимация появления блоков
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".fade-up").forEach(item => {
    observer.observe(item);
});


// ==========================
// Экран приветствия
// ==========================

const welcomeScreen = document.getElementById("welcomeScreen");
const greeting = document.getElementById("guestGreeting");
const button = document.getElementById("openInvite");
const input = document.getElementById("guestName");

if (welcomeScreen && button && input && greeting) {

    // блокируем прокрутку
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    setTimeout(() => {
        input.focus();
    }, 300);

    function showInvitation(name) {

        greeting.innerHTML = `
            <span class="guest-title">
                ${name}!
            </span>
        `;

        welcomeScreen.classList.add("hide");

        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";

        setTimeout(() => {
            welcomeScreen.remove();
        }, 600);

    }

    button.addEventListener("click", () => {

        let name = input.value.trim();

        if (name === "") {
            input.focus();
            return;
        }

        showInvitation(name);

    });

    input.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {
            button.click();
        }

    });

    // ==========================
    // Меняющиеся подсказки
    // ==========================

    const placeholders = [

        "Ваня и Маня",
        "Бабушка и дедушка",
        "Зайки",
        "Тётя Наташа",
        "Любимые друзья",
        "Самая лучшая сестра",
        "Лучший друг"

    ];

    let index = 0;

    input.placeholder = placeholders[0];

    setInterval(() => {

        index = (index + 1) % placeholders.length;
        input.placeholder = placeholders[index];

    }, 2500);

}
