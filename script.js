
window.addEventListener("load", () => {
  // Wait 2.1s to give time for fadeOut to complete
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 100);
});
let menu = document.querySelector(".menu");
function opens() {
  document.querySelector("ul").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("yh");
}

function fadeInTextFromHTML(containerId, delay = 50) {
  const container = document.getElementById(containerId);
  const text = container.textContent;
  container.innerHTML = ""; // Clear it for rebuild

  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("fade-letter");
    container.appendChild(span);

    setTimeout(() => {
      span.style.opacity = 1;
    }, delay * index);
  });
}

// Usage: read and animate whatever is inside the HTML element
fadeInTextFromHTML("text-container");
  




  