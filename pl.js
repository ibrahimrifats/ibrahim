        // Counter variable
        let visitorCount = 1000;

        // Function to increment the counter
        function incrementCounter() {
            visitorCount++;
            updateCounterDisplay();
        }

        // Function to update the counter display in the navbar
        function updateCounterDisplay() {
            document.getElementById('visitor-count').innerText = `Visitors: ${visitorCount}`;
        }

        // Increment the counter when the page is loaded
        window.onload = function () {
            incrementCounter();
        };
