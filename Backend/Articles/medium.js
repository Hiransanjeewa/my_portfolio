const express = require('express');

const index = express();


const articlePythonScript = "./articles.py";
const pythonExecutable = "python";


let PythonShellLibrary = require('python-shell');
let {PythonShell} = PythonShellLibrary;
let shell = new PythonShell('./articles.py', {
    // The '-u' tells Python to flush every time
    pythonOptions: ['-u']
});
shell.on('message', function(message){
    console.log('message', message);
    console.log(new Date())
})