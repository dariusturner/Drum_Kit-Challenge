var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length + 1; i++) {
  drums[i].addEventListener("click", handleClick);
}

function handleClick() {
  alert("I got clicked");
}
