const lightbox = document.getElementById("lightbox");

const thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach(thumb => {
  thumb.addEventListener("click", (event) => {
    //const src = thumb.getAttribute("src")?.replace(/^.*\/([^\/]*)$/, "$1");
    const src = thumb.getAttribute("src")?.replace("small", "big");
    const largeImage = lightbox.querySelector("img");
    largeImage.src = src; // Set the large image source
    lightbox.style.display = "flex"; // Show the lightbox
    document.body.classList.add("noscroll");
  });
});

lightbox.addEventListener("click", (event) => {
  lightbox.style.display = "none";
  document.body.classList.remove("noscroll");
});