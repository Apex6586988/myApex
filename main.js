import * as fs from 'fs'

const d = new Date();
let string = d.toLocaleDateString()+'_'+d.toLocaleTimeString()

fs.appendFile('test.txt', string, function (err) {
    if (err) throw err;
    console.log('Saved ' + string + '!');
});
