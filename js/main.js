const search = document.querySelector('#search');
const searchIcon = document.querySelector('#search-icon');

function getAllLinks() {
  return document.querySelectorAll('a');
}

search.oninput = () => {
  const searchText = search.value.toLowerCase();
  const links = getAllLinks();
  links.forEach(link => {
    if(hasText(link, searchText)) {
      link.classList.remove('hidden');
    } else {
      link.classList.add('hidden');
    }
  })
};

function hasText(link, searchText) {
    return !link.href.toLowerCase().includes(searchText) && !link.text.toLowerCase().includes(searchText)
}

searchIcon.onclick = () => {
  search.value = '';
  search.dispatchEvent(new Event('input'));
  search.dispatchEvent(new Event('blur'));
}