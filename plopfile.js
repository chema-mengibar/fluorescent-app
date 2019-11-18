/*
Configuration:

 useTs: boolean , set tsx or jsx file extension and template files to use
 srcComponentDir: strg , target directory in project to create the components


More About Plop:

  https://www.npmjs.com/package/plop
  https://plopjs.com/documentation/

*/

const useTs = false;
const srcComponentDir = '../src/components/'


// --------------------------------------------------------------------------------------------------

const namecase = require('./helper_modules/namecase');
const extFiles = useTs ? 'tsx' : 'jsx';

module.exports = function (plop) {

  plop.setHelper('cDashCase', function (text) {
    return namecase.dashCase(text);
  });

  plop.setHelper('cCamelCase', function (text) {
    return namecase.camelCase(text);
  });

  plop.setHelper('cPascalCase', function (text) {
    return namecase.pascalCase(text);
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
        path: srcComponentDir + '{{type}}/{{cDashCase name}}/index.' + extFiles,
        templateFile: 'plop-templates/component-base-' +  extFiles + '/index.' + extFiles
      },
      {
        type: 'add',
        path: srcComponentDir + '{{type}}/{{cDashCase name}}/{{cDashCase name}}.mocks.' + extFiles,
        templateFile: 'plop-templates/component-base-' +  extFiles + '/mocks.' + extFiles
      },
      {
        type: 'add',
        path: srcComponentDir + '{{type}}/{{cDashCase name}}/{{cDashCase name}}.stories.' + extFiles,
        templateFile: 'plop-templates/component-base-' +  extFiles + '/stories.' + extFiles
      },
      {
        type: 'add',
        path: srcComponentDir + '{{type}}/{{cDashCase name}}/{{cDashCase name}}.styles.' + extFiles,
        templateFile: 'plop-templates/component-base-' +  extFiles + '/styles.' + extFiles
      }
    ],
  });
};