/*
  https://www.npmjs.com/package/plop
  https://plopjs.com/documentation/

*/

const namecase = require('./helper_modules/namecase');

const srcComponentDir = '../src/components/'

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