
var streamque = require('../index.js');
var fs = require('fs');

describe('count',()=>{

	it('should count all string size',()=>{

		var s = streamque([
			'This ',
			fs.createReadStream('./dev/is'),
			'hello ',
			fs.createReadStream('./dev/world')
		]);

		return s.count().then((n)=>{
			console.log('Total size: '+n);
		});

	});

});


describe('pipe',()=>{

	it('should print something',()=>{

		var s = streamque([
			'Hello ',
			fs.createReadStream('./dev/world')
		]);

		return s.count().then((n)=>{
			console.log('Total size: '+n);
			s.stream().pipe(process.stdout);
		});

	});

});