function hideNavbar() {
  document.getElementById("nav-mobile").classList.toggle("show");
}

function showSidebar() {
  document.getElementById("sidebar").classList.toggle("mobile");
}

function showContent() {
  document.getElementById("section-content").style.display = "flex";
  document.getElementById("section-alert").style.display = "none";
  document.getElementById("table-message").style.display = "none";
  document.getElementById("nav-tabs-top").style.display = "flex";
  document.getElementById("modal-show").classList.toggle("show");
  document.querySelector(".section").style.display = "block";
}
function showContentView() {
  document.getElementById("table-message").style.display = "none";
  document.getElementById("nav-view-tabs-top").style.display = "flex";
  document.getElementById("modal-showView").classList.toggle("show");
  document.getElementById("tap-content").style.display = "block";
}
function showCampo() {
  document.querySelector(".sub-main").style.display = "block";
  document.getElementById("nav-tabs-bottom").classList.toggle("show");
  document.getElementById("table-campo").classList.toggle("show");
  document.getElementById("campo-alert").classList.toggle("hide");
}
function showModal() {
  document.getElementById("modal-show").classList.toggle("show");
}
function hideModal() {
  document.getElementById("modal-show").classList.toggle("show");
}

function hideModalView() {
  document.getElementById("modal-showView").classList.toggle("show");
}

function exitModal() {
  document.getElementById("modal-show").classList.toggle("hide");
}

function showView() {
  document.getElementById("modal-showView").classList.toggle("show");
}

function openAside() {
  document.getElementById("asideView").classList.toggle("show");
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
