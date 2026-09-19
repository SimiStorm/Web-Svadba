/* ============================================
   LOCATION.JS
   --------------------------------------------
   Tu sa vytvára sekcia "Miesto" — teda blok
   s informáciami o mieste svadby (kostol)
   a s mini mapou z Google Maps.

   Ako sa používa:
   main.js → createLocation("location", {
       nazov:   "Kostol sv. ...",
       adresa:  "Vlčince, Žilina",
       mapaUrl: "https://www.google.com/maps?q=..."
   })

   To vloží HTML do <div id="location"></div>
   v index.html.

   Vzhľad je v location.css.
   ============================================ */

export function createLocation(containerId, options) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`createLocation: #${containerId} neexistuje`);
        return;
    }

    const {
        nazov   = "Miesto svadby",
        adresa  = "",
        mapaUrl = ""
    } = options || {};

    container.innerHTML = `
        <section class="location" id="miesto">
            <p class="location__label">Kde sa zoberieme</p>
            <h2 class="location__title">${nazov}</h2>
            <p class="location__address">${adresa}</p>

            <div class="location__map">
                <iframe
                    src="${mapaUrl}"
                    width="100%"
                    height="360"
                    style="border:0;"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Mapa miesta svadby">
                </iframe>
            </div>

            <a class="location__link"
               href="${mapaUrl}"
               target="_blank"
               rel="noopener">
                Otvoriť v Google Maps →
            </a>
        </section>
    `;
}