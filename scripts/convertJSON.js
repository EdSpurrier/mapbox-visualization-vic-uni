var fs = require('fs');


const toJSON = csv => {
    const lines = csv.split('\n')
    const result = []
    const headers = lines[0].split(',')

    lines.map(l => {
        const obj = {}
        const line = l.split(',')

        headers.map((h, i) => {
            obj[h] = line[i]
        })

        result.push(obj)
    })

    return JSON.stringify(result)
}

const csv = `name,email,age
francis,francis@gmail.com,33
matty,mm@gmail.com,29`

const data = toJSON(csv)

console.log(data)


fs.writeFile("./public/data/inlineData.json", data, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 


// Use fs.readFile() method to read the file
fs.readFile('./input/data.csv', 'utf8', function(err, data){
      
    // Display the file content
    console.log('raw data', data);

        
    fs.writeFile("./public/data/convertedData.json", toJSON(data), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }); 
});
  


