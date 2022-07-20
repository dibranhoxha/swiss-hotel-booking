function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

const home_select_location_input = document.querySelector(
  "input.home-location-select"
);
const dropdown_menu = document.querySelector("#locationautocomplete-list");
const dropdown_menu_items = document.querySelectorAll(
  "#locationautocomplete-list div"
);
const helper_div = document.querySelector("#right_div");
home_select_location_input.addEventListener("focus", () => {
  dropdown_menu.style.display = "block";
  helper_div.style.display = "block";
});

// home_select_location_input.addEventListener("blur", () => {

// });

window.addEventListener("click", function (e) {
  if (
    !home_select_location_input.contains(e.target) &&
    !dropdown_menu.contains(e.target)
  ) {
    dropdown_menu.style.display = "none";
    helper_div.style.display = "none";
  }
});


addEventListenerList(dropdown_menu_items, "click", (e) => {
  home_select_location_input.value = e.target.textContent;
  dropdown_menu.style.display = "none";
  helper_div.style.display = "none";
});
