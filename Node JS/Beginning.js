// Node JS is a runtime environment
// that runs on the V8 engine, like/from Google Chrome, and executes JavaScript code outside a web browser

// Download Node JS to use it

// Node allows you to use utility script
// create new files with code in your local file system >>
// import the file system >>
const fs = require("fs");
// create a new file >>
// first argument: name of file with extension, second argument: content of file
fs.writeFileSync(
  "newFileCreatedWithNode.js",
  "Content of new file created through Node JS"
);
// now you have to run: node Beginning.js in the terminal inside the local folder of Beginning.js, then you will see the new file
