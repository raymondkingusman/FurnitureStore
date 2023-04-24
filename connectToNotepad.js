
import { readFile, readFileSync } from 'fs';
alert("test");
readFile('imagesLinks.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
// Read the contents of a file as a string
const fileContents = readFileSync('imagesLinks.txt', 'utf-8');

//fileContents = "test";
// Insert the file contents into the HTML element
//alert(fileContents);
//$('#fileContents').text(fileContents);
console.log("test");


