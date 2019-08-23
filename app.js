function scrollTo(id_name) {
  var element = document.getElementById(id_name);
  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  });
}

function openNav() {
  document.getElementById("alt-nav").style.width = "100%";
}

function closeNav() {
  document.getElementById("alt-nav").style.width = "0%";
}
