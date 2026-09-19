/* ============================================
   TIMER.JS
   --------------------------------------------
   Tu sa vytvára ODPOČET do svadby.
   Tie 4 políčka s číslami, ktoré sa každú
   sekundu menia (dni / hodiny / minúty / sekundy).

   Ako to funguje:
   - main.js zavolá createTimer("timer", "2027-06-12T15:00:00")
   - Funkcia nájde <div id="timer"> v index.html
   - Vloží doň HTML (medzi ` a ` nižšie)
   - Potom spustí startCountdown(), ktorý
     každú sekundu prepočíta, koľko času
     ešte zostáva do dátumu svadby

   Dátum svadby sa odovzdáva z main.js
   (aby sa dal ľahko zmeniť na jednom mieste).

   Vzhľad odpočtu (farby, veľkosti) je v timer.css.
   ============================================ */



export function createTimer(containerId, weddingDate) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`createTimer: #${containerId} neexistuje`);
        return;
    }

    container.innerHTML = `
        <section class="timer">
            <p class="timer__label">Do svadby zostáva</p>
            <div class="timer__grid">
                <div class="timer__box">
                    <span class="timer__number" id="timer-days">--</span>
                    <span class="timer__unit">dní</span>
                </div>
                <div class="timer__box">
                    <span class="timer__number" id="timer-hours">--</span>
                    <span class="timer__unit">hodín</span>
                </div>
                <div class="timer__box">
                    <span class="timer__number" id="timer-minutes">--</span>
                    <span class="timer__unit">minút</span>
                </div>
                <div class="timer__box">
                    <span class="timer__number" id="timer-seconds">--</span>
                    <span class="timer__unit">sekúnd</span>
                </div>
            </div>
            <p class="timer__date">12. jún 2027 o 15:00</p>
        </section>
    `;

    startCountdown(weddingDate);
}

function startCountdown(weddingDate) {
    const target = new Date(weddingDate).getTime();

    function update() {
        const now = new Date().getTime();
        const diff = target - now;

        if (diff <= 0) {
            document.getElementById("timer-days").textContent = "0";
            document.getElementById("timer-hours").textContent = "00";
            document.getElementById("timer-minutes").textContent = "00";
            document.getElementById("timer-seconds").textContent = "00";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("timer-days").textContent = days;
        document.getElementById("timer-hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("timer-minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("timer-seconds").textContent = String(seconds).padStart(2, "0");
    }

    update();
    setInterval(update, 1000);
}