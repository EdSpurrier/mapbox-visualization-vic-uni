console.log("scripts.js Initializing.");

const xlsxFile = 'data/xlsxData.json';

const csvFile = 'data/csvData.json';

const dataFile = 'data/example.json';


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function convertJSONtoChartJS(jsonData) {
    const chartData = {
    labels: Object.keys(jsonData[0]).slice(1), // Extract month names as labels excluding the "Month" key
    datasets: []
    };

    jsonData.forEach(obj => {
    const dataset = {
        label: obj["Month"],
        data: Object.values(obj).slice(1), // Extract data values excluding the "Month" key
        backgroundColor: getRandomColor(), // Generate random background color for each dataset
        borderColor: getRandomColor(), // Generate random border color for each dataset
        borderWidth: 1 // Optional: Customize the border width for each dataset
    };
    chartData.datasets.push(dataset);
    });

    return chartData;
}


function createBarChart (elementId, chartData) {
    // Create a Chart.js chart
    var ctx = document.getElementById(elementId).getContext('2d');
            
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

//  Fetch CSV JSON Data File
fetch(csvFile)
    .then(response => response.json())
    .then(data => {
        // Process the loaded JSON data
        console.log(`[${csvFile}] Data Loaded =>`, data);
        
        let chartData = convertJSONtoChartJS(data);
        
        createBarChart('csvDataChart', chartData)
    })
    .catch(error => {
        console.error('Error loading JSON file:', error);
    });


//  Fetch XLSX JSON Data File
fetch(xlsxFile)
    .then(response => response.json())
    .then(data => {
        // Process the loaded JSON data
        console.log(`[${xlsxFile}] Data Loaded =>`, data);
        
        let chartData = convertJSONtoChartJS(data);
        
        createBarChart('xlsxDataChart', chartData)
    })
    .catch(error => {
        console.error('Error loading JSON file:', error);
    });


//  Fetch JSON Data File
fetch(dataFile)
    .then(response => response.json())
    .then(data => {
        // Process the loaded JSON data
        console.log(`[${dataFile}] Data Loaded =>`, data);

        // Create a Chart.js chart
        var ctx = document.getElementById('exampleDataChart').getContext('2d');
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



console.log("scripts.js Loaded.");