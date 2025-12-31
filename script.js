const ring = document.querySelector(".progress-ring");
let holdTimer;
let progress = 0;

const startHold = () => {
  holdTimer = setInterval(() => {
    progress += 3; // speed of filling
    ring.style.background = `conic-gradient(#ff77e9 ${progress}deg, rgba(255,255,255,0.15) ${progress}deg)`;

    // When full (360deg), go to next page
    if (progress >= 360) {
      clearInterval(holdTimer);
      window.location.href = "next.html"; // 👉 Redirect to next screen
    }
  }, 20); // update speed
};

const endHold = () => {
  clearInterval(holdTimer);
  progress = 0; // reset progress
  ring.style.background = `conic-gradient(#ff77e9 0deg, rgba(255,255,255,0.15) 0deg)`;
};

// Desktop events
ring.addEventListener("mousedown", startHold);
ring.addEventListener("mouseup", endHold);
ring.addEventListener("mouseleave", endHold);

// Mobile events
ring.addEventListener("touchstart", startHold);
ring.addEventListener("touchend", endHold);
