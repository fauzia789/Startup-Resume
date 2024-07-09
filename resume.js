document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const clearButton = document.getElementById('clean-input');
  const resultList = document.getElementById('list'); // UL element to display results
  const resumeSections = document.querySelectorAll('h2, h3, h4, li'); // All elements to search through
  let searchResults = []; // Array to store matching sections

  // Function to filter and display matching elements based on search input
  function filterList() {
      const searchTerm = searchInput.value.trim().toLowerCase();

      // Clear previous results
      resultList.innerHTML = '';
      searchResults = [];

      // Loop through all resume sections
      resumeSections.forEach(section => {
          const textContent = section.textContent.trim().toLowerCase();
          
          // Check if the section contains the search term
          if (textContent.includes(searchTerm)) {
              // Create a new element with marked search term
              const markedContent = markSearchTerm(section.cloneNode(true), searchTerm);
              searchResults.push({ element: markedContent, original: section }); // Store matching section and original element
          }
      });

      displayResults(); // Display the filtered results
  }

  // Function to mark search term within a section
  function markSearchTerm(element, searchTerm) {
      // Regex to find search term globally and case insensitively
      const regex = new RegExp(searchTerm, 'gi');
      element.innerHTML = element.innerHTML.replace(regex, match => `<mark>${match}</mark>`);
      return element;
  }

  // Function to display filtered results
  function displayResults() {
      // Clear previous results
      resultList.innerHTML = '';

      // Display each matching section
      searchResults.forEach((result, index) => {
          const li = document.createElement('li');
          li.innerHTML = result.element.innerHTML;
          li.addEventListener('click', () => scrollToSection(result.original)); // Bind original element to scrollToSection
          resultList.appendChild(li);
      });
  }

  // Function to scroll to section and highlight
  function scrollToSection(originalElement) {
      // Remove previous highlight
      const highlightedElements = document.querySelectorAll('.highlighted');
      highlightedElements.forEach(el => el.classList.remove('highlighted'));

      // Highlight clicked section
      originalElement.classList.add('highlighted');

      // Scroll to highlighted section
      originalElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Event listener for search button
  searchButton.addEventListener('click', filterList);

  // Event listener for clear button
  clearButton.addEventListener('click', function() {
      searchInput.value = ''; // Clear search input
      resultList.innerHTML = ''; // Clear result list
      const highlightedElements = document.querySelectorAll('.highlighted');
      highlightedElements.forEach(el => el.classList.remove('highlighted')); // Remove highlight from previous results
  });

  // Real-time filtering on input change
  searchInput.addEventListener('input', filterList);
});
