console.log("scripts.js Initializing.");

const dataFile = 'data/example.json';

//  Fetch JSON Data File
fetch(dataFile)
    .then(response => response.json())
    .then(data => {
        // Process the loaded JSON data
        console.log(data);

        // Create a Chart.js chart
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error('Error loading JSON file:', error);
    });

    
fetch(dataFile)
    .then(response => response.json())
    .then(data => {
      // Convert JSON data to CSV
      let csvContent = "data:text/csv;charset=utf-8,";
  
      // Extract headers from the first dataset
      const headers = Object.keys(data.datasets[0]);
  
      // Add headers to the CSV content
      csvContent += headers.join(",") + "\n";
  
      // Iterate through each dataset and convert it to CSV rows
      data.datasets.forEach(dataset => {
        const values = Object.values(dataset);
        csvContent += values.join(",") + "\n";
      });
  
      // Create a download link for the CSV file
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "data.csv");
      document.body.appendChild(link);
      link.click();
    })
    .catch(error => {
      console.error('Error loading JSON file:', error);
    });

console.log("scripts.js Loaded.");