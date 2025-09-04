const checkbox = document.body.querySelectorAll(".mode-subset")
const rows = document.body.querySelectorAll(".row")
const mainBox = document.body.querySelector(".mode")

function everyonesStatus() {
  const allActive = Array.from(rows).every((row) => row.dataset.active === "true")
  mainBox.dataset.isActive = allActive ? "true" : "false"
}

checkbox.forEach((box) => {
  box.addEventListener("click", (e) => {
    const newRow = e.target.closest(".row")
    if (!newRow) return
    newRow.dataset.active = newRow.dataset.active === "true" ? "false" : "true"
    everyonesStatus()
  })
})

mainBox.addEventListener("click", () => {
  const shouldActive = mainBox.dataset.isActive !== "true"
  rows.forEach((row) => {
    row.dataset.active = shouldActive ? "true" : "false"
  })
  mainBox.dataset.isActive = shouldActive ? "true" : "false"
})

rows.forEach((row) => {
  row.addEventListener("mouseover", () => {
    if (row.previousElementSibling) {
      row.previousElementSibling.style.borderBottom = "none";
    }
    row.style.borderBottom = "none";
  });

  row.addEventListener("mouseleave", () => {
    if (row.previousElementSibling) {
      row.previousElementSibling.style.borderBottom = "1px solid rgba(28, 28, 28, 0.2)";
    }
    row.style.borderBottom = "1px solid rgba(28, 28, 28, 0.2)";
  });
});