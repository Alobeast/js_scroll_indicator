const scrollIndicator = document.querySelector("#scroll-indicator")
const totalScrollHeight = document.body.scrollHeight - window.innerHeight;

function updateScrollIndicator() {
  let scrollPercentage = (window.scrollY / totalScrollHeight) * 100;
  scrollIndicator.style.width = scrollPercentage + "%";
}

window.addEventListener("scroll", updateScrollIndicator);
