document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const clearButton = document.getElementById('clean-input');
    const resultList = document.getElementById('list'); // UL element to display results
    const resumeContent = document.querySelector('body'); // All content to search through
    let searchResults = []; // Array to store matching sections

    // Function to filter and display matching elements based on search input
    function filterList() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Clear previous results
        resultList.innerHTML = '';
        searchResults = [];

        // Loop through all elements in the resume content
        const allElements = resumeContent.querySelectorAll('*');
        allElements.forEach(element => {
            if (element.children.length === 0) { // Only check leaf nodes (elements without children)
                const textContent = element.textContent.trim().toLowerCase();
                
                // Check if the element contains the search term
                if (textContent.includes(searchTerm)) {
                    // Create a new element with marked search term
                    const markedContent = markSearchTerm(element.cloneNode(true), searchTerm);
                    searchResults.push({ element: markedContent, original: element }); // Store matching element and original element
                }
            }
        });

        displayResults(); // Display the filtered results
    }

    // Function to mark search term within an element
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

        // Display each matching element
        searchResults.forEach((result, index) => {
            const li = document.createElement('li');
            li.innerHTML = result.element.innerHTML;
            li.addEventListener('click', () => handleResultClick(result.original)); // Bind original element to handleResultClick
            resultList.appendChild(li);
        });
    }

    // Function to handle result click, clear results, highlight section and scroll to it
    function handleResultClick(originalElement) {
        // Clear result list
        resultList.innerHTML = '';

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
