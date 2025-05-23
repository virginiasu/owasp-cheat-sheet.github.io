// Sidebar search/filter
const searchBox = document.getElementById('searchBox');
const cheatSheetList = document.getElementById('cheatSheetList');

// Search functionality
searchBox.addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  Array.from(cheatSheetList.children).forEach(li => {
    const text = li.textContent.toLowerCase();
    li.style.display = text.includes(filter) ? '' : 'none';
  });
});

// Highlight active navigation item
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.sidebar a');
  
  navLinks.forEach(link => {
    // Get the href path and remove any trailing slashes
    const linkPath = link.getAttribute('href').replace(/\/$/, '');
    // Get the current path and remove any trailing slashes
    const currentPathClean = currentPath.replace(/\/$/, '');
    
    // Check if the current path ends with the link path
    if (currentPathClean.endsWith(linkPath)) {
      link.classList.add('active');
      // Also highlight the parent li element
      link.parentElement.classList.add('active');
    }
  });
}); 