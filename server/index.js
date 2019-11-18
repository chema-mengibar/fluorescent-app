const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const helmet = require('helmet');
const exec = require('child_process').exec;

const serverDir = path.join(__dirname)
const distDir = path.join(__dirname,'..','dist')

const file_name =  'repository.json';
const pathTarget = path.join(serverDir, file_name)

const ecco = require( serverDir + '/ecco');


const PORT = process.env.PORT || 8080

app.use(helmet.noSniff()) // Sets "X-Content-Type-Options: nosniff".
app.use(cors())
app.use( express.json() )

app.get('/', function(req, res){
    console.log('REQ index')
    res.sendFile(path.join(distDir,'app.html'));
});

app.get('/repo', function (req, res) {
    // res.sendFile(pathTarget);
    console.log('REQ:GET repo')
    let rawdata = fs.readFileSync(pathTarget);
    let jsonData = JSON.parse(rawdata);
    res.json(jsonData)
});



function execShellCommand(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.warn(error);
        }
        resolve(stdout? stdout : stderr);
        });
    });
}

app.post('/plop', function (req, res) {
    console.log('REQ:POST plop', req.body)
    let objectData  = req.body;
    // Mapp repository item (config.layout items) type to plop promp types 
    let mappedType = ''
    switch(objectData.type) {
        case 'atom':
            mappedType= 'atoms';
            break;
        case 'molecule':
            mappedType= 'molecules';
            break;
        case 'organism':
            mappedType= 'organisms';
            break;
        case 'page':
            mappedType= 'pages';
            break;
    } 

    const componentName = objectData.name;
    const cmdStr = `plop component -- --name "${componentName}" --type "${mappedType}"`
    execShellCommand( cmdStr ).then(
        (success)=>{ res.sendStatus(201) },
        (error)=>{ res.sendStatus(501) }
    )
});

app.get('/ecco', function (req, res) {
    console.log('REQ:GET ecco')
    if( ecco.getStatus() !== 'run' ){
        ecco.run();
    }
    let respObj = {process:'ecco', status: ecco.getStatus()};
    res.json(respObj)
});

app.get('/ecco-status', function (req, res) {
    let respObj = {process:'ecco', status: ecco.getStatus()};
    res.json(respObj)
});

app.get('/ecco-stop', function (req, res) {
    console.log('REQ:GET ecco-stop')
    if( ecco.getStatus() === 'run' ){
        ecco.stop();
    }
    let respObj = {process:'ecco', status: ecco.getStatus()};
    res.json(respObj)
});

app.post('/save', function (req, res) {
    console.log('REQ:POST save')
    let file_content = req.body;
    let data = JSON.stringify(file_content);
    fs.writeFileSync( pathTarget, data);
    res.sendStatus(201)
});

app.get('/app.js', function(req, res){
    console.log('REQ app')
    res.sendFile(path.join(distDir, 'app.js'));
});

app.use( express.static(__dirname + '/dist'));

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});
