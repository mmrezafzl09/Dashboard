const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sideBack = document.querySelector(".sidebar-backdrop");
const sidebar = document.querySelector(".sidebar");
const liParent = document.querySelectorAll("li.curet");
const search = document.querySelectorAll(".wrapper-input");
const isMobile = window.matchMedia("(max-width: 767px)");

liParent.forEach((li) => {
  li.addEventListener("click", () => {
    const child = li.querySelector(".child-list");

    liParent.forEach((otherLi) => {
      if (otherLi !== li) {
        otherLi.querySelector(".child-list").classList.add("hidden");
        otherLi.classList.remove("open");
      }
    });

    child.classList.toggle("hidden");
    li.classList.toggle("open");
  });
});

search.forEach((item) => {
  item.addEventListener("click", () => {
    item.querySelector("input").focus();
  });
});

menuBtn.addEventListener("click", () => {
  if (isMobile) {
    sidebar.classList.toggle("active");
    sideBack.classList.toggle("active");
    document.body.style.overflow = "hidden";
  }
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  sideBack.classList.remove("active");
});

sideBack.addEventListener("click", () => {
  sidebar.classList.remove("active");
  sideBack.classList.remove("active");
  document.body.style.overflow = "scroll";
});
