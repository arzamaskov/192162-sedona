var link = document.querySelector(".search-form-btn");
var searchForm = document.querySelector(".search-form");

link.addEventListener("click", function(event) {
  event.preventDefault();
  if (searchForm.classList.contains("search-form-visible")) {
    searchForm.classList.add("search-form-invisible");
    searchForm.classList.remove("search-form-visible");
  } else {
    searchForm.classList.add("search-form-visible");
    searchForm.classList.remove("search-form-invisible");
  };
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (searchForm.classList.contains("search-form-visible")) {
      searchForm.classList.add("search-form-invisible");
      searchForm.classList.remove("search-form-visible");
    }
  }
});
