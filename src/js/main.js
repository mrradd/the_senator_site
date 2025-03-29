const rad_nav_setup = () => {
  document.getElementById("test").innerHTML = rad_nav_bar;
  document.getElementById("home_btn").onclick = () => { rad_button_navigate_onclick("src/pages/interests.html") };
}

