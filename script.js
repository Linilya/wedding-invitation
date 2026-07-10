// Дата свадьбы
const weddingDate = new Date("September 25, 2026 14:00:00").getTime();

function updateTimer() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}

updateTimer();
setInterval(updateTimer, 1000);
/* ---------- Появление блоков ---------- */

/* ---------- Появление элементов ---------- */

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade-up").forEach(item=>{
    observer.observe(item);
});
// ==========================
// Экран приветствия
// ==========================

const welcomeScreen = document.getElementById("welcomeScreen");
const input = document.getElementById("guestName");
const button = document.getElementById("openInvite");
const greeting = document.getElementById("guestGreeting");

// Пока экран открыт — сайт нельзя прокручивать
document.body.style.overflow = "hidden";

// Сразу ставим курсор
setTimeout(() => {
    input.focus();
}, 300);

// Красивые подсказки

const placeholders = [

    "Ваня и Маня",
    "Бабушка и дедушка",
    "Любимые друзья",
    "Тётя Наташа",
    "Самая лучшая сестра",
    "Лучший друг"

];

let index = 0;

input.placeholder = placeholders[0];

setInterval(() => {

    index = (index + 1) % placeholders.length;
    input.placeholder = placeholders[index];

},2500);


// Открываем приглашение

function openInvitation(){

    const name = input.value.trim();

    if(name===""){

        input.focus();

        return;

    }

    greeting.innerHTML = `${name}!`;

    document.body.style.overflow = "";

    welcomeScreen.classList.add("hide");

    setTimeout(()=>{

        welcomeScreen.remove();

    },600);

}

button.addEventListener("click",openInvitation);

input.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        openInvitation();

    }

});
