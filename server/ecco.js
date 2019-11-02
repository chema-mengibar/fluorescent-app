
let status = 'wait'; // wait, run, error

function run(){
  console.log( 'ecco run' );
  setStatus('run');
}

function stop(){
  console.log( 'ecco stop' );
  setStatus('stop');
}

function getStatus(){
  return status;
}

function setStatus(_status){
  status = _status;
}

module.exports = {
  getStatus,
  run,
  stop
}

/*Usage:

const ecco = require('./server/ecco');

ecco.run()

*/