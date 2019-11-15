/*
  https://www.npmjs.com/package/plop
  https://plopjs.com/documentation/

*/

const cDashCase = require('lodash/kebabCase');
const cCamelCase = require('lodash/camelCase');

const cPascalCase = (s)=> { //todo: unify method in module
  let str = cCamelCase(s)
  return str.replace(/\w+/g,
    function(w){ return w[0].toUpperCase() + w.slice(1).toLowerCase(); });
}

const srcComponentDir = '../src/components/'

module.exports = function (plop) {


  plop.setHelper('cDashCase', function (text) {
      return cDashCase(text);
  });

  plop.setHelper('cCamelCase', function (text) {
      return cCamelCase(text);
  });

  plop.setHelper('cPascalCase', function (text) {
      return cPascalCase(text);
  });

  plop.setHelper('rename', function (text) {
    return text.toUpperCase();
  });

  plop.setPartial('myName', '{{cCamelCase name}}');
  plop.setPartial('my-name', '{{cDashCase name}}');
  plop.setPartial('MyName', '{{cPascalCase name}}');


  plop.setGenerator('component', {
    description: 'basic component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name (dash-case)'
      },
      {
        type: 'list',
        name: 'type',
        message: 'component type',
        choices: [
          { name: 'Atoms', value: 'atoms' },
          { name: 'Molecules', value: 'molecules' },
          { name: 'Organisms', value: 'organisms' },
          { name: 'Pages', value: 'pages' },
        ],
      }
    ],
    actions: [
      {
        type: 'add',
        path: srcComponentDir + '{{type}}/{{cDashCase name}}/index.tsx',
        templateFile: 'plop-templates/component-base-ts/index.tsx'
      },
      {
        type: 'add',
        path: srcComponentDir + '{{type}}/{{cDashCase name}}/{{cDashCase name}}.mocks.tsx',
        templateFile: 'plop-templates/component-base-ts/mocks.tsx'
      },
      {
        type: 'add',
        path: srcComponentDir + '{{type}}/{{cDashCase name}}/{{cDashCase name}}.stories.tsx',
        templateFile: 'plop-templates/component-base-ts/stories.tsx'
      },
      {
        type: 'add',
        path: srcComponentDir + '{{type}}/{{cDashCase name}}/{{cDashCase name}}.styles.tsx',
        templateFile: 'plop-templates/component-base-ts/styles.tsx'
      }
    ],
  });
};

/*
     {
        type: 'add',
        path: 'src/components/{{type}}/{{camelCase name}}.tsx',
        templateFile: 'plop-templates/component-base/index.tsx'
      }
*/