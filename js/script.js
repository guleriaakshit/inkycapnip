document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");
  const playButton = document.getElementById("playButton");

  playButton.addEventListener("click", function () {
    video.play();
    playButton.style.display = "none"; // Hide play button after clicking
  });

  video.addEventListener("pause", function () {
    playButton.style.display = "flex"; // Show play button if video is paused
  });
});
