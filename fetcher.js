const request = require('request');
const fs = require('fs')

let url = process.argv[2]
let filePath = process.argv[3]


const getData = function (url, filePath) {
  request(url, (error, response, body) => {
  if (response) {
    console.log("Data retrieved");
    printData(filePath, body);
  } else {
    console.log(`No website found. ${error}`)
  }
});
}

const printData = function(filePath, body) {
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err)
      return
    } else {
      console.log("New file created!");
      const length = (new TextEncoder().encode(body)).length
      console.log(`${length} bytes`);
    }
  })
}
getData(url, filePath);