const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const modifiedContent = data.toUpperCase();

  fs.writeFile('output.txt', modifiedContent, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File has been written successfully');
  });
});
