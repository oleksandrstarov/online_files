var fs = require('fs'),
    git = require('simple-git')(),
    iconv  = require('iconv-lite');

//set own path
var pathEnter = __dirname + '//data//ResultList.htm';
var pathResult = __dirname + '//data//index.htm';


//git.addRemote('online', 'https://github.com/oleksandrstarov/online.git');
fs.watchFile(pathEnter, (curr, prev) => {
  fs.readFile(pathEnter, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    var info = iconv.decode(data, "win1251");
    fs.writeFile(pathResult, info, (err) => {
      if (err) {
          console.log(err);
          return;
      }
      console.log('It\'s saved!');
    });
  });
});

fs.watchFile(pathResult, (curr, prev) => {
  git.add(pathResult)
   .commit("first commit!")
   .push(['-u', 'online', 'HEAD:gh-pages'], function () {
      console.log('DONE');
   });
  console.log(`finished`);
});

/*
  console.log(curr, prev);
  if (filename && filename === 'ResultList.htm') {
    fs.open(path + '//ResultList.htm', 'r', (err, fd) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error('myfile does not exist');
        return;
      } else {
        throw err;
      }
    }
    console.log(fd);
  //readMyData(fd);
  });

  } else if (filename && filename === 'index.htm') {
    console.log(`filename provided: ${filename}`);
      git.add(path + '//index.htm')
       .commit("first commit!")
       .push(['-u', 'online', 'HEAD:gh-pages'], function () {
          console.log('DONE');
       });
      console.log(`finished`);
  }else {
    console.log('filename not provided');
  }*/
