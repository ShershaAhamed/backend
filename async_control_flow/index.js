
const fs = require('fs').promises;

async function readFileAndWrite() {
  try {
    const data = await fs.readFile('input.txt', 'utf8');
    const modifiedData = data.toUpperCase();
    await fs.writeFile('output.txt', modifiedData);
    console.log('File has been written successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

readFileAndWrite();
