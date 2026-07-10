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

function showInvitation(name, plus){

    greeting.innerHTML = `Дорогой(ая) <strong>${name}${plus ? " +1" : ""}</strong>!`;

    guestForm.classList.add("hidden");

    setTimeout(()=>{

        guestForm.style.display="none";

    },500);

}

button.addEventListener("click",()=>{

    const name=document.getElementById("guestName").value.trim();

    if(name===""){

        alert("Введите имя");

        return;

    }

    const plus=document.getElementById("plusOne").checked;

    localStorage.setItem("guestName",name);

    localStorage.setItem("guestPlus",plus);

    showInvitation(name,plus);

});

window.addEventListener("load",()=>{

    const name=localStorage.getItem("guestName");

    if(!name)return;

    const plus=localStorage.getItem("guestPlus")==="true";

    showInvitation(name,plus);

});
