const xlsx = require('xlsx');
const fs = require('fs');

// Path to the XLSX file
const inputFile = './input/data.xlsx';


try {
    // Load the workbook
    const workbook = xlsx.readFile(inputFile);

    // Choose a sheet to convert (assuming it's the first sheet)
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert the sheet to JSON
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    // Convert JSON to a string
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Path to the output JSON file
    const outputFile = './public/data/xlsxData.json';

    // Write the JSON to a file
    fs.writeFileSync(outputFile, jsonString);

    console.log('XLSX to JSON => Conversion completed successfully!');
} catch (error) {
    console.log('XLSX to JSON => Error: ', error.message)
}
