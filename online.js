var fileSystem = require('fs');

var path = __dirname + '/online';
console.log(path);

fileSystem.watch(path, (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  if (filename) {
    console.log(`filename provided: ${filename}`);
  } else {
    console.log('filename not provided');
  }
});