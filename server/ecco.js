const monitor = require( './monitor');

let status = 'init'; // wait, run, error

function run(){
  console.log( 'ecco run: monitor' );
  monitor.run();
  setStatus('run');
}

function stop(){
  console.log( 'ecco stop' );
  setStatus('stop');
}

function getStatus(){
  console.log( 'monitor.status: ', monitor.status )
  if( ['init','runs'].indexOf(monitor.status) > -1 ){

  }
  else{ //ready OR error
    setStatus('stop');
  }
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