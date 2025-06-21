document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("fontawesome");
  const searchInput = document.getElementById("searchright");

  let isExpanded = false;

  searchIcon.addEventListener("click", () => {
    if (!isExpanded) {
      searchInput.classList.add("expanded");
      searchInput.focus();
      isExpanded = true;
    } else {
      const query = searchInput.value.trim();
      if (query !== "") {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(searchUrl, 'goggle');
      }
      searchInput.classList.remove("expanded");
      isExpanded = false;
    }
  });

  searchInput.addEventListener("blur", () => {
    setTimeout(() => {
      searchInput.classList.remove("expanded");
      isExpanded = false;
    }, 150);
  });
});
