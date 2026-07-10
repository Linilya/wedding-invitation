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
const guestForm = document.getElementById("guestForm");

const inviteText = document.getElementById("inviteText");

const greeting = document.getElementById("guestGreeting");

const button = document.getElementById("openInvite");

function showInvitation(name){

    greeting.innerHTML = `
<span class="guest-title">
    ${name}!
</span>
`;

    guestForm.classList.add("hidden");

    setTimeout(()=>{

        guestForm.style.display="none";

    },500);

}

button.addEventListener("click", (e) => {

    e.preventDefault();
    const name=document.getElementById("guestName").value.trim();

    if(name===""){

        alert("Введите имя");

        return;

    }


    showInvitation(name);

});

document.querySelector(".hero").scrollIntoView({
    behavior:"smooth"
});
const placeholders = [
    "Ваня и Маня",
    "Бабушка и дедушка",
    "Лучшая подруга",
    "Зайка",
    "Самая лучшая сестра на свете",
    "Семья Ивановых",
    "Тётя Наташа",
    "Любимые друзья"
];

const input = document.getElementById("guestName");

let index = 0;

setInterval(() => {

    input.placeholder = placeholders[index];

    index = (index + 1) % placeholders.length;

}, 2500);

input.placeholder = placeholders[0];
