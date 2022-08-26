function hideNavbar() {
  document.getElementById("nav-mobile").classList.toggle("show");
}

function showSidebar() {
  document.getElementById("sidebar").classList.toggle("mobile");
}

function showContent() {
  document.getElementById("section-content").style.display = "flex";
  document.getElementById("section-alert").style.display = "none";
  document.getElementById("nav-tabs-top").style.display = "flex";
  document.getElementById("modal-show").classList.toggle("show");
  document.querySelector(".section").style.display = "block";
}

function showModal() {
  document.getElementById("modal-show").classList.toggle("show");
}
function hideModal() {
  document.getElementById("modal-show").classList.toggle("show");
}

function exitModal() {
  document.getElementById("modal-show").classList.toggle("hide");
}

function showCampo() {
  document.querySelector(".sub-main").style.display = "block";
  document.getElementById("nav-tabs-bottom").classList.toggle("show");
  document.getElementById("table-campo").classList.toggle("show");
  document.getElementById("campo-alert").classList.toggle("hide");
}
