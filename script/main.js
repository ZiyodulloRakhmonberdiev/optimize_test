// multi languages
function editLang(event, langName) {
  var lang, tabLangs;

  tabLangs = document.getElementsByClassName("header__lang-item");
  for (lang = 0; lang < tabLangs.length; lang++) {
    tabLangs[lang].className = tabLangs[lang].className.replace(" active", "");
  }

  document.getElementById(langName).style.display = "block";
  event.currentTarget.className += " active";
}

// dropdown on the header
const dropdown = document.querySelector(".dropdown");
const input = document.querySelector(".dropdown-header-select");
const listOfOptions = document.querySelectorAll(".option");
const articleDropdown = document.querySelector(".article__dropdown");
const articleInput = document.querySelector(".dropdown-article-select");
const articleListOfOptions = document.querySelectorAll(".article__option");
const body = document.body;
let article = false;
const toggleDropdown = (event) => {
  event.stopPropagation();
  dropdown.classList.toggle("opened");
};
const toggleArticleDropdown = (event) => {
  event.stopPropagation();
  articleDropdown.classList.toggle("opened");
};
const selectOption = (event) => {
  input.value = event.currentTarget.textContent;
};
const selectArticleOption = (event) => {
  articleInput.value = event.currentTarget.textContent;
};

const closeDropdownFromOutside = () => {
  if (dropdown.classList.contains("opened")) {
    dropdown.classList.remove("opened");
  }
  if (articleDropdown.classList.contains("opened")) {
    articleDropdown.classList.remove("opened");
  }
};
// Event Listeners
body.addEventListener("click", closeDropdownFromOutside);
// options selection
listOfOptions.forEach((option) => {
  option.addEventListener("click", selectOption);
});
articleListOfOptions.forEach((articleOption) => {
  articleOption.addEventListener("click", selectArticleOption);
});
// dropdown toggle
dropdown.addEventListener("click", toggleDropdown);
articleDropdown.addEventListener("click", toggleArticleDropdown);

// tabs
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
