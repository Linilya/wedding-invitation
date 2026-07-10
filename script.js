// ==========================
// Таймер до свадьбы
// ==========================

const weddingDate = new Date("September 25, 2026 14:00:00").getTime();

function updateTimer() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

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

// Запрещаем прокрутку до открытия приглашения
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

setTimeout(() => {
    welcomeScreen.remove();
}, 600);

    // Возвращаем прокрутку
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

}
    greeting.innerHTML = `
        <span class="guest-title">${name}!</span>
    `;

    guestForm.classList.add("hidden");

    setTimeout(() => {
        guestForm.style.display = "none";
    }, 500);

    // Возвращаем прокрутку
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

}

button.addEventListener("click", (e) => {

    e.preventDefault();

    const name = input.value.trim();

   if (name === "") {

    input.focus();
    input.placeholder = "Введите имя";

    return;

}
    input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        button.click();
    }

});

    showInvitation(name);

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
