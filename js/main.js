
/*--------- Navbar --------- */

function hideNavbar() {
  document.getElementById("nav-mobile").classList.toggle("show");
}

/*--------- Sidebar --------- */

function showSidebar() {
  document.getElementById("sidebar").classList.toggle("mobile");
}

/*--------- Section 1 --------- */
function showModal() {
  document.getElementById("modal-show").classList.toggle("show");
}

function showContent() {
  document.getElementById("section-content").style.display = "flex";
  document.getElementById("section-alert").style.display = "none";
  document.getElementById("table-message").style.display = "none";
  document.getElementById("nav-tabs-top").style.display = "flex";
  document.getElementById("modal-show").classList.toggle("show");
  document.querySelector(".section").style.display = "flex";
}

function hideModal() {
  document.getElementById("modal-show").classList.toggle("show");
}

/*--------- Section 2 --------- */

function showContentView() {
  document.getElementById("table-message").style.display = "none";
  document.getElementById("nav-view-tabs-top").style.display = "flex";
  document.getElementById("modal-showView").classList.toggle("show");
  document.getElementById("tap-content").style.display = "block";
  document.getElementById("section-alert3").style.display = "none";
}

function showCampo() {
  document.querySelector(".sub-main").style.display = "block";
  document.getElementById("nav-tabs-bottom").classList.toggle("show");
  document.getElementById("table-campo").classList.toggle("show");
  document.getElementById("campo-alert").classList.toggle("hide");
}

function showView() {
  document.getElementById("modal-showView").classList.toggle("show");
}

function hideModalView() {
  document.getElementById("modal-showView").classList.toggle("show");
}

function exitModal() {
  document.getElementById("modal-show").classList.toggle("hide");
}

function openAside() {
  document.getElementById("asideView").classList.toggle("show");
}

/*----- Section 3 -----*/

function showModal3(){
  document.getElementById("modalShow3").classList.toggle("show");
}

function hideModal3(){
  document.getElementById("modalShow3").classList.toggle("show");
}

function showContent3(){
  document.getElementById("section-alert3").style.display = "none";
  document.getElementById("modalShow3").classList.toggle("show");
}

function showModalTab(){
  document.getElementById("modalTab3").classList.toggle("show");
}

function hideModalTab3(){
  document.getElementById("modalTab3").classList.toggle("show");
}

function showContentTab3(){
  document.getElementById("modalTab3").classList.toggle("show");
  document.getElementById("section3").classList.toggle("d-none");
  document.getElementById("section-alert3").classList.toggle("d-none");
}

$(".li").click(function () {
  $(".li").removeClass("active");
  $(this).addClass("active");
});

$(".nav-li").click(function () {
  $(".nav-li").removeClass("active");
  $(this).addClass("active");
});

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("section-tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("nav-li");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}
