
/* ===== ENGLISH ↔ TELUGU 3D FLIP ===== */

(function () {
  const title = document.getElementById("ajjaramTitleText");
  if (!title) return;

  let isTelugu = false;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  setInterval(() => {

    if (reduceMotion) {
      isTelugu = !isTelugu;
      title.textContent = isTelugu
        ? "అజ్జరం బ్రాస్ సోర్సెస్"
        : "AJJARAM BRASS SOURCES";
      title.classList.toggle("telugu-font", isTelugu);
      return;
    }

    title.classList.remove("flip-start");
    title.classList.add("flip-out");

    setTimeout(() => {
      isTelugu = !isTelugu;

      title.textContent = isTelugu
        ? "అజ్జరం బ్రాస్ సోర్సెస్"
        : "AJJARAM BRASS SOURCES";

      title.classList.toggle("telugu-font", isTelugu);

      title.classList.remove("flip-out");
      title.classList.add("flip-start");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          title.classList.remove("flip-start");
        });
      });

    }, 550);

  }, 3000);
})();
