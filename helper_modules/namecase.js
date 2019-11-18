
const cDashCase = require('lodash/kebabCase');

const cCamelCase = require('lodash/camelCase');

const cPascalCase = (s)=> {
  return s.replace(/\w+/g,
    function(w){ return w[0].toUpperCase() + w.slice(1) });
}


const namecase = {
  dashCase: function(str){
    return cDashCase(str)
  },
  camelCase: function(str){
    return cCamelCase(str)
  },
  pascalCase: function(str){
    const _str = this.camelCase(str)
    return cPascalCase(_str)
  },
  fileName: function( str ){
    return  str.replace(/[\\\/\:\*\?\"\<\>\|]/gi, '-');
  }
}


module.exports = namecase;