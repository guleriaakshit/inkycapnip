document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("autoPlayVideo");

  if (!video) {
    console.error("Video element not found!");
    return;
  }

  // Start video muted (autoplay is allowed when muted)
  video.muted = true;
  video.play().then(() => {
    video.muted = false; // Unmute after playback starts
  }).catch(error => {
    console.error("Autoplay failed:", error);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play().then(() => {
          video.muted = false; // Ensure unmuted playback
        });
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(video);
});