const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

tabItems.forEach(item => item.addEventListener("click", () => {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
  tabContentItems.forEach((item) => item.classList.remove("show"));
  item.classList.add("tab-border");
  document.querySelector(`#${item.id}-content`).classList.add("show");
}))
