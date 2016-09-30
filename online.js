var fileSystem = require('fs');

//set own path
var path = __dirname;
console.log(path);

fileSystem.watch(path, (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  if (filename && filename === 'index.htm') {
    console.log(`filename provided: ${filename}`);
    require('simple-git')()
         .add('./*')
         .commit("first commit!")
         .addRemote('live', 'https://github.com/oleksandrstarov/online.git')
         .push(['-u', 'live', 'gh-pages'], function () {
            console.log('DONE'); 
         });
    
  } else {
    console.log('filename not provided');
  }
});