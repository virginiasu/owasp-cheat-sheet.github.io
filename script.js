// Sidebar search/filter
const searchBox = document.getElementById('searchBox');
const cheatSheetList = document.getElementById('cheatSheetList');
searchBox.addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  Array.from(cheatSheetList.children).forEach(li => {
    const text = li.textContent.toLowerCase();
    li.style.display = text.includes(filter) ? '' : 'none';
  });
}); 