console.log("scripts.js Initializing.");

const xlsxFile = 'data/xlsxData.json';

const csvFile = 'data/csvData.json';

const dataFile = 'data/example.json';




const createLabels = (jsonData) => {
    console.log('createLabels:', jsonData);

    const labels = jsonData.map(obj => Object.keys(obj)[0]);

    return labels;
}

const createDatasets = (jsonData) => {
    console.log('createLabels:', jsonData);

    const datasets = jsonData.map(obj => Object.values(obj)[0]);

    return datasets;
}


//  Fetch CSV JSON Data File
fetch(csvFile)
    .then(response => response.json())
    .then(data => {
        // Process the loaded JSON data
        console.log(`[${csvFile}] Data Loaded =>`, data);
        
        let chartData = {
            labels: createLabels(data),
            datasets: createDatasets(data)
        };
        
        console.log('newData', chartData);

        // Create a Chart.js chart
        var ctx = document.getElementById('csvDataChart').getContext('2d');
        
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