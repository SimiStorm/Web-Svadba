/* ============================================
   VIEW.JS
   --------------------------------------------
   Prepínanie medzi "kartami" (views) stránky.
   Vždy je viditeľná len jedna.
   Appbar zostáva navrchu vždy rovnaký.

   Ako sa používa:
   main.js → initViewSwitcher()

   Krok za krokom:
   1. Nájde všetky odkazy s atribútom data-view
      (odkazy v appbare).
   2. Nájde všetky views (elementy s triedou .view).
   3. Po kliku na odkaz:
      - skryje všetky views (pridá .hidden)
      - zobrazí ten, na ktorý sa kliklo
      - skroluje na vrch stránky
   ============================================ */


   
export function initViewSwitcher() {
    const links = document.querySelectorAll("[data-view]");
    const views = document.querySelectorAll(".view");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = "view-" + link.dataset.view;
            const target = document.getElementById(targetId);

            if (!target) return;

            // Skry všetky views
            views.forEach(v => v.classList.add("hidden"));

            // Zobraz ten, na ktorý sa kliklo
            target.classList.remove("hidden");

            // Skroluj na vrch
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
}