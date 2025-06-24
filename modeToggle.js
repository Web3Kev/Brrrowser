
const modeToggle = document.querySelector('.slider');

// Function to update mode icon and body class
function setMode(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        
    }
}

// Add event listener to the mode toggle
modeToggle.addEventListener('click', function() {

    //check elsewhere in your code the state of dark mode  with this line
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    //set mode
    setMode(!isDarkMode);

    //save prefered mode
    localStorage.setItem('theme', !isDarkMode ? 'dark-mode' : 'light-mode');
});

// Check if user has a saved preference in localStorage
const currentTheme = localStorage.getItem('theme');

if (currentTheme) 
{
    setMode(currentTheme === 'dark-mode');
} 
else 
{
    // Apply system preference if no user preference was stored
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setMode(prefersDarkMode);
}


