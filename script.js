/**let aqiData = [];

// Load AQI data from the JSON file
fetch('air_quality.json')
    .then(response => response.json())
    .then(data => {
        aqiData = data;
    })
    .catch(error => console.error('Error loading AQI data:', error));

// Initialize the map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to load different layers (for now just air quality)
function loadLayer(layer) {
    if (layer === 'airQuality') {
        addAQIMarkers();
    }
    // You can add more layers based on your needs here
}

// Function to add AQI markers
function addAQIMarkers() {
    aqiData.forEach(record => {
        const marker = L.marker([record.latitude, record.longitude]).addTo(map);
        marker.bindPopup(`<b>${record.city}</b><br>
                          Average AQI: ${record.avg_value || 'N/A'}<br>
                          Place: ${record.place || 'N/A'}<br>
                          Max AQI: ${record.max_value || 'N/A'}<br>
                          Min AQI: ${record.min_value || 'N/A'}`);
        marker.on('click', () => showDetails(record));
    });
}

// Function to show AQI details
function showDetails(record) {
    document.getElementById('city').innerText = record.city || 'Unknown';
    document.getElementById('avg-aqi').innerText = record.avg_value !== undefined ? record.avg_value : 'N/A';
    document.getElementById('place').innerText = record.place || 'N/A';
    document.getElementById('max-aqi').innerText = record.max_value !== undefined ? record.max_value : 'N/A';
    document.getElementById('min-aqi').innerText = record.min_value !== undefined ? record.min_value : 'N/A';
}*/
