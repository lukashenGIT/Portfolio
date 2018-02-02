/* ------------ Go "About Me" ------------ */
function aboutMe(){
  window.location.href = "about.html";
};


/* ----------- ONLOAD ---------- */
window.addEventListener("load", function(){

  /* ------------ FADE PAGE ------------ */
  window.addEventListener("beforeunload", function(){
    document.body.classList.add("animate-out");
  })

  /* ------------ MOVING BG ------------ */
  function launch_moving_bg(){
    bg = document.getElementById("bg-image");

    var friction = .5; /* movement friction, higher => more movement */

    const windowWidth = window.innerWidth / friction;
    const windowHeight = window.innerHeight / friction;

    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;

      bg.style.transform = `scale(1.05) translate(-${mouseX}%, -${mouseY}%)`;
    });
  };




  /* -------------- "MAIN" -------------- */
  launch_moving_bg();
});
