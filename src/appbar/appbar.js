/* ============================================
   APPBAR.JS
   --------------------------------------------
   Tu sa vytvára horný panel stránky.
   Ten pruh úplne hore s menami
   "Simona & Samuel" a odkazmi
   Domov / Program / Miesto / RSVP / Galéria.

   Ako to funguje:
   - main.js zavolá createAppbar("appbar")
   - Funkcia nájde <div id="appbar"> v index.html
   - Do neho vloží HTML, ktoré vidíš nižšie
     v template stringu (medzi ` a `)

   DÔLEŽITÉ — odkazy prepínajú "karty" (views):
   Každý odkaz má atribút data-view="xxx".
   To hovorí JavaScriptu (view.js), ktorú
   <main id="view-xxx"> má zobraziť po kliku.
   Appbar sám zostáva vždy hore, len obsah
   pod ním sa mení.

   Vzhľad panelu (farby, rozloženie)
   je v appbar.css.
   ============================================ */




export function createAppbar(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`createAppbar: #${containerId} neexistuje`);
        return;
    }

    container.innerHTML = `
        <header class="appbar">
            <div class="appbar__brand">
                <span class="appbar__names">Simona <span class="appbar__amp">&amp;</span> Samuel</span>
                <span class="appbar__heart">❤</span>
            </div>
            <nav class="appbar__nav">
                <a href="#" class="appbar__link" data-view="home">Domov</a>
                <a href="#" class="appbar__link" data-view="program">Program</a>
                <a href="#" class="appbar__link" data-view="location">Miesto</a>
                <a href="#" class="appbar__link" data-view="rsvp">RSVP</a>
                <a href="#" class="appbar__link" data-view="galeria">Galéria</a>
            </nav>
        </header>
    `;
}