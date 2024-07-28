document.getElementById('schedule-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const jsonFormData = JSON.stringify(Object.fromEntries(formData.entries()));

    fetch('/schedule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonFormData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('form-result').innerText = data;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('form-result').innerText = 'Form submission failed';
    });
});

// Function to create and append additional child fields
function addAdditionalChild() {
    const container = document.getElementById('additional-children-container');

    // Create a new div for the additional child fields
    const childDiv = document.createElement('div');
    childDiv.className = 'form-group';

    // Generate a unique ID for the new set of fields
    const childId = `child-${Date.now()}`;

    // Add fields for the additional child with a "Remove" button
    childDiv.innerHTML = `
        <div id="${childId}">
            <h3>Additional Child Information</h3>
            <div class="form-group">
                <label for="child-first-name">Child's First Name:</label>
                <input type="text" name="child-first-name" required>
            </div>
            <div class="form-group">
                <label for="child-last-name">Child's Last Name:</label>
                <input type="text" name="child-last-name" required>
            </div>
            <div class="form-group">
                <label for="child-gender">Child's Gender:</label>
                <input type="text" name="child-gender" required>
            </div>
            <div class="form-group">
                <label for="child-birthday">Child's Birthday:</label>
                <input type="date" name="child-birthday" required>
            </div>
            <div class="form-group">
                <label for="desired-start-date">Desired Start Date:</label>
                <input type="date" name="desired-start-date" required>
            </div>
            <button type="button" class="remove-child-btn">Remove</button>
        </div>
    `;

    container.appendChild(childDiv);

    // Add event listener to the "Remove" button
    childDiv.querySelector('.remove-child-btn').addEventListener('click', () => {
        container.removeChild(childDiv);
    });
}

// Add event listener to the "Add Additional Child" button
document.getElementById('add-child-btn').addEventListener('click', addAdditionalChild);
