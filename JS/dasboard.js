function customizePage() {
    // Here you can add code to allow affiliate customization of the page
    // For example, change colors, fonts, etc.
    document.body.style.backgroundColor = prompt("Color de fondo:");
    document.querySelector('.dashboard').style.borderColor = prompt("Color del borde:");
}

// [OPTIONAL] Simulation of metrics of registered people
function simulateMetrics() {
    // You can add code to get and display simulated metrics
    // For example, make an AJAX request to a simulated server
    // and update the content of the element with id "metrics"
    document.getElementById('metrics').innerHTML = '<p>Métricas simuladas: 100 personas registradas</p>';
}

function toggleMenu() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = (dropdownMenu.style.display == 'block') ? 'none' : 'block';
}

function updateAvatar() {
    let avatarInput = document.getElementById('avatar-upload');
    let avatarImage = document.getElementById('avatar');

    let file = avatarInput.files[0];

    if (file) {
        let reader = new FileReader();
        reader.onloadend = (e) => {
            avatarImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function updateUserDetails() {
    let userDescription = document.getElementById('user-description').value;
    let userBalance = document.getElementById('user-balance').textContent;
    // You can send this information to the server for processing or storage

    // Example of how you can update the description on the user card
    document.getElementById('user-card-description').innerText = userDescription;
}

document.getElementById('user-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the form from being sent in a conventional way
    updateUserDetails();
});
// Call the optional function to simulate metrics after page loading
simulateMetrics();
