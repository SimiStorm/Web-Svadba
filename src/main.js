/* ============================================
   MAIN.JS
   --------------------------------------------
   Tu sa spúšťa celá stránka.
   Tento súbor "poskladá" dohromady všetky
   komponenty, ktoré na stránke vidíš.

   Ako to funguje:
   - Najprv sa naimportujú funkcie
     z jednotlivých komponentov
     (appbar, timer, button)
   - Potom sa zavolajú — každá vytvorí
     svoju časť stránky a vloží ju
     do príslušného <div> v index.html

   Odkiaľ sa spúšťa:
   index.html → <script src="./src/main.js">
   ============================================ */

   

import { createAppbar } from "./appbar/appbar.js";
import { createTimer }  from "./timer/timer.js";
import { createLocation } from "./location/location.js";
import { createButton } from "./button/button.js";
import { initViewSwitcher } from "./view/view.js";

createAppbar("appbar");
createTimer("timer", "2027-06-12T15:00:00");

createButton("btn1", "RSVP",    () => alert("Ďakujeme! ❤️"));
createButton("btn2", "Program", () => alert("Program čoskoro!"));
createButton("btn3", "Galéria", () => alert("Fotky čoskoro!"));

createLocation("location", {                                  
    nazov:   "Kostol vo Vlčinciach",
    adresa:  "Vlčince, Žilina",
    mapaUrl: "https://www.google.com/maps?q=Kostol+Vl%C4%8Dince+%C5%BDilina&output=embed"
});

initViewSwitcher();