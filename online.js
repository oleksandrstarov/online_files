var fileSystem = require('fs'),
    git = require('simple-git')();

//set own path
var path = __dirname;
console.log(path);

//git.addRemote('online3', 'https://github.com/oleksandrstarov/online.git');


fileSystem.watch(path, (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  if (filename && filename === 'index.htm') {
    console.log(`filename provided: ${filename}`);
        git.add(filename)
         .commit("first commit!")
         .push(['-u', 'https://github.com/oleksandrstarov/online.git', 'HEAD:gh-pages'], function () {
            console.log('DONE'); 
         });
    
  } else {
    console.log('filename not provided');
  }
});