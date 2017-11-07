const search = document.querySelector('#search');
const searchIcon = document.querySelector('#search-icon');

function getAllLinks() {
  return document.querySelectorAll('a');
}

search.oninput = () => {
  const searchText = search.value;
  const links = getAllLinks();
  links.forEach(link => {
    if(!link.href.includes(searchText) && !link.text.includes(searchText)) {
      link.classList.add('hidden');
    } else {
      link.classList.remove('hidden');
    }
  })
};

searchIcon.onclick = () => {
  search.value = '';
  search.dispatchEvent(new Event('input'));
  search.dispatchEvent(new Event('blur'));
}