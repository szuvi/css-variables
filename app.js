let inputs = document.querySelectorAll("input");
let img = document.querySelector("img");
inputs.forEach(input => {
  input.addEventListener("change", changeStyle);
  input.addEventListener("mousemove", changeStyle);
});

function changeStyle(event) {
  let prop = event.target.name;
  let val = event.target.value;
  let suffix = event.target.dataset.suffix || "";
  document.documentElement.style.setProperty(`--${prop}`, `${val}${suffix}`);
}
