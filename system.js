// Get a reference to the refresh icon element
const refreshIcon = document.getElementById('refresh-icon');

// Add a click event listener to the icon
refreshIcon.addEventListener('click', function () {
    // Reload the page when the icon is clicked
    location.reload();
});