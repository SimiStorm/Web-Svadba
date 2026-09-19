/* ============================================
   BUTTON.JS
   --------------------------------------------
   Tu sa vytvára tlačidlo.
   Teda to klikacie kolečko, čo vidíš
   na stránke (napr. "RSVP", "Program",
   "Galéria").

   Ako to funguje:
   - main.js zavolá createButton("btn1", "RSVP", ...)
   - Funkcia nájde <div id="btn1"> v index.html
   - Vytvorí nové <button>, dá mu text
     a pridá mu reakciu na klik
   - Vloží ho do toho div-u

   Vzhľad tlačidla (farba, tvar, tieň)
   je v button.css.
   ============================================ */



export function createButton(containerId, text, onClick, variant = "primary") {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`createButton: #${containerId} neexistuje`);
        return;
    }

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `button button--${variant}`;
    btn.textContent = text;
    if (onClick) btn.addEventListener("click", onClick);

    container.append(btn);
    return btn;
}