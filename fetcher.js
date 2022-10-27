const fs = require("fs");
const request = require('request');

const website = process.argv[2];
const folder = process.argv[3];

request(website, (error, response, body) => {
  // Print the error if one occurred
  if (error) {
    console.log('error:', error); 
  } 
  fs.writeFile(website, body, error => {
    if (error) {
      console.log('error:', error);
    } else {
      // Print the status code if the file was successfully downloaded
      console.log(`Downloaded and saved ${body.length} bytes to ${folder}`); 
      
    }
  })
    
});