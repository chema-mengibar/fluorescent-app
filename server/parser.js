/*
  Variables:

  component name:
    - how is the rule to name components
    - node-label <-> component folder name

  atomic-type folder name :
    - if component-folder exist in folder

  list of children 
    - if exist import line with child-component-name in code

  
  Neeeds: 

  - get string conversion from node-label to component-name/folder
  - read directories
  - read content file
  - parse import lines



  folder-name =  {{dashCase name}}
  component name = camelCase
*/

"use strict";

const path = require('path');
const fs = require('fs');


class Parser {

  constructor( ) {
    this.repoFileName = 'repository.json';
    this.pathTarget = path.join('./', this.repoFileName);
    let rawdata = fs.readFileSync( this.pathTarget);
    this.repo = JSON.parse(rawdata);
    this.reportsDir = '';
    this.report = {
      progress: [],
      imports: [],
    }

    this.srcCompDir = '../../src/components/'; // todo: configurable

    this.camelCase = require('lodash/camelCase');
    this.dashCase = require('lodash/kebabCase');

    this.pascalCase = (s)=> { //todo: unify method in module
      let str = this.camelCase(s)
      return str.replace(/\w+/g,
        function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});
    }

    // this.extension = '.tsx' // todo: configurable
    // this.targetFiles = [ // todo: configurable
    //   `index${this.extension}`,
    //   `styles${this.extension}`,
    //   `index${this.extension}`,
    // ]
  }

  getTreeItemById( id ){
    const foundItemList = this.repo.tree.filter( (item)=> item.id == id );
    return foundItemList.length ? foundItemList[0] : null;
  }

  getItemById( id ){
    const foundItemList = this.repo.items.filter( (item)=> item.id == id );
    return foundItemList.length ? foundItemList[0] : null;
  }

  saveReport( ){
    const file_name =  'parser-report.json';
    const pathTarget = path.join('./', this.reportsDir, file_name);
    let data = JSON.stringify( this.report, null, 2);
    fs.writeFileSync( pathTarget, data);
    return this;
  }

  saveRepo( ){
    let data = JSON.stringify( this.repo, null, 2);
    fs.writeFileSync( this.pathTarget, data);
    return this;
  }

  modifyItemProgress = ( _id, _progress) => {
    const items = this.repo.items.map( (item)=> {
      if(item.id === _id ){
        item.progress = _progress;
      }
      return item;
    })
    this.repo.items = [...items];
  }


  loop(){
    const progressReport = [];
    const importsReport = [];

    this.repo.items.forEach( nodeItem =>{
      const folderName =  this.dashCase(nodeItem.label);
      let flag = 'planned';

      const targetFolderPath = `${this.srcCompDir}${nodeItem.type}s/${folderName}/`;

      if( fs.existsSync(targetFolderPath) ){
        flag = 'created';
      }

      try{

        const childrenItemsIds = this.getTreeItemById( nodeItem.id ).children
        const importsReportItem = {}

        childrenItemsIds.forEach( childId =>{
          importsReportItem[childId] = false;
        } )

        // Read all files in component-folder
        fs.readdirSync(targetFolderPath).forEach( targetFile => {

          // Read content of all the files
          let contents = fs.readFileSync( targetFolderPath + targetFile, 'utf8');

          //Parse if there is in the component files a import reference of the children
          childrenItemsIds.forEach( childId =>{
            const childItem = this.getItemById( childId );
            const childComponentName =  this.pascalCase(childItem.label);
            var re = new RegExp('import ' + childComponentName + ' from',"gm");
            if( re.test(contents) ){
              importsReportItem[childId] = true
            }
          } )
        });

        const childrenImports = Object.keys(importsReportItem).map( childId =>{
          const childItem = this.getItemById( childId );
          return { componentId: nodeItem.id, childId: childId, connectImported: importsReportItem[childId]  }
        })

        importsReport.push( ...childrenImports )
      }
      catch(error){  
        console.error(  nodeItem.label, '>> error >>', error.code, error.path )
        //  if( error.code === 'ENOENT' ){
        //   flag = 'created_error';
        //  }
      }

      this.modifyItemProgress( nodeItem.id, flag );
      progressReport.push( { id: nodeItem.id, progress: flag });
    } )

    this.report.progress = progressReport;
    this.report.imports = importsReport;
    this.saveRepo().saveReport()
    return this;
  }
}


new Parser().loop()



/*

WARNING
  Discordance plop.dashCase VS lodash.kebabCase:
    Button1 -> button-1 VS button1

  Line beginning  commented import
  var re = new RegExp('^import ' + childComponentName + ' from',"gm");


*/
