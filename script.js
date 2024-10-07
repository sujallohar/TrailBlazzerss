// Sample data for demonstration
const sampleNEOs = [
    { name: "2023 AB", diameter: "100m", closeApproachDate: "2024-10-10", riskLevel: "Low" },
    { name: "2023 AC", diameter: "200m", closeApproachDate: "2024-11-15", riskLevel: "High" },
];

// Function to simulate fetching data and updating statistics
function updateStatistics() {
    document.getElementById("totalNEOs").innerText = sampleNEOs.length;
    document.getElementById("recentApproaches").innerText = sampleNEOs.filter(neo => neo.riskLevel === 'High').length; // Example filter
}

// Function to search for NEOs
function searchNEO() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const result = sampleNEOs.find(neo => neo.name.toLowerCase() === searchTerm);
    
    if (result) {
        document.getElementById("details").innerHTML = `
            <p>Name: ${result.name}</p>
            <p>Diameter: ${result.diameter}</p>
            <p>Close Approach Date: ${result.closeApproachDate}</p>
            <p>Risk Level: ${result.riskLevel}</p>`;
    } else {
        document.getElementById("details").innerText = "No results found.";
    }
}

// Initialize the dashboard
updateStatistics();