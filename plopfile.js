/*
  https://www.npmjs.com/package/plop
  https://plopjs.com/documentation/

*/

const srcComponentDir = '../src/components/'

module.exports = function (plop) {

  plop.setPartial('myName', '{{camelCase name}}');
  plop.setPartial('my-name', '{{dashCase name}}');
  plop.setPartial('MyName', '{{pascalCase name}}');

  plop.setHelper('rename', function (text) {
    return text.toUpperCase();
  });
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
        path: srcComponentDir + '{{type}}/{{dashCase name}}/index.tsx',
        templateFile: 'plop-templates/component-base-ts/index.tsx'
      },
      {
        type: 'add',
        path: srcComponentDir + '{{type}}/{{dashCase name}}/{{dashCase name}}.mocks.tsx',
        templateFile: 'plop-templates/component-base-ts/mocks.tsx'
      },
      {
        type: 'add',
        path: srcComponentDir + '{{type}}/{{dashCase name}}/{{dashCase name}}.stories.tsx',
        templateFile: 'plop-templates/component-base-ts/stories.tsx'
      },
      {
        type: 'add',
        path: srcComponentDir + '{{type}}/{{dashCase name}}/{{dashCase name}}.styles.tsx',
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