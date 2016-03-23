# stream-que
converting JavaScript Array of strings and streams into a sequential flow of data in a single stream. 

Like a one-lane highway for stream.

## Install
```bash
npm install --save stream-que
```

## Usage
```js
var Streamque = require('stream-que');
var highway = Streamque([
    'Hello ',
    fs.createReadStream('./file/world')
]);

highway.stream().pipe(process.stdout);
/*
* Assuming the file "./file/world" contains "world."
* The outcome in your console would be "Hello world."
*/
```

### Count string size
This will only work if all the streams are created using `fs.createReadStream`
```js
var highway = Streamque([
    'Hello ',
    fs.createReadStream( './file/world' )
]);

highway.count().then((total) => {
    console.log( 'Total size: ' + total )
    highway.stream().pipe( process.stdout )
});
/*
* Total size: 12
* Hello world.
*/
```
### Manual start
*Flowing mode* will start on `.pipe()`, and listening on events such as `data` and `readable`. But, if you really have to make it start by yourself:
```js
highway.start();
// and it flows.
```

**fyi**: This is written es6. and tested on node.js 4.4.0
