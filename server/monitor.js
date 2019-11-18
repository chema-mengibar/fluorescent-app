/*

  Item-progress status:

  1- planned        : Component is just in fluorescent board
  2- created        : Component if phisically created
  3- imports        : Component is created and all children connections are in script-imports
  4- imports-error  : Some connection(s) - imports are broken in script-files

*/

"use strict";

const path = require('path');
const fs = require('fs');
const namecase = require('../helper_modules/namecase');

class Monitor {

  constructor( ) {
    this.status = 'init'
    this.repoFileName = 'repository.json';
    this.reportsDir = path.join( __dirname, '')
    this.pathTarget = path.join(this.reportsDir, this.repoFileName);
    let rawdata = fs.readFileSync( this.pathTarget);
    this.repo = JSON.parse(rawdata);

    this.report = {
      progress: [],
      imports: [],
    }

    this.srcCompDir = path.join(this.reportsDir, '../../src/components/'); // todo: configurable

    this.camelCase = namecase.camelCase;
    this.dashCase = namecase.dashCase;
    this.pascalCase = namecase.pascalCase;

    // todo: configurable
    // this.extension = '.tsx' 
    // this.targetFiles = [
    //   `index${this.extension}`,
    //   `styles${this.extension}`,
    //   `index${this.extension}`,
    // ]
  }

  updateRepo(){
    let rawdata = fs.readFileSync( this.pathTarget);
    this.repo = JSON.parse(rawdata);
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
    const file_name =  'monitor.status.json';
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

  setStatus( status ){
    this.status = status; //init, runs, ready, error
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
    this.updateRepo()
    this.setStatus('runs')
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
          console.log( 'targetFile', targetFile )
          // Read content of all the files
          let contents = fs.readFileSync( targetFolderPath + targetFile, 'utf8');

          //Parse if there is in the component files a import reference of the children
          childrenItemsIds.forEach( childId =>{
            const childItem = this.getItemById( childId );
            if( childItem ){
              const childComponentName =  childItem.label;
              var re = new RegExp('import ' + childComponentName + ' from',"gm");
              if( re.test(contents) ){
                importsReportItem[childId] = true
              }
            }
          } )
        });

        const childrenImports = Object.keys(importsReportItem).map( childId =>{
          return { componentId: nodeItem.id, childId: childId, connectImported: importsReportItem[childId]  }
        })

        importsReport.push( ...childrenImports )
      }
      catch(error){  
        console.error(  nodeItem.label, '>> error >>', error.code, error.path )
      }

      this.modifyItemProgress( nodeItem.id, flag );
      progressReport.push( { id: nodeItem.id, progress: flag });
    } )

    this.report.progress = progressReport;
    this.report.imports = importsReport;

    this.processItemsStatus()
    
    return this;
  }

  processItemsStatus(){
    // this.report.progress
    // this.report.imports
    // this.repo

    /*
      count imports pro item
      set item progress
        if all are true than CI
        else CIe
      save repo
      save report
      change status
    */

    const imports = {}
    this.report.imports.forEach( importItem =>{
      if( Object.keys(imports).indexOf(importItem.componentId) > -1 ){
        if( !importItem.connectImported ){
          imports[ importItem.componentId ] = false
        }
      }
      else{
        imports[ importItem.componentId ] = true
      }
    })

    this.repo.items.forEach( nodeItem =>{ 
      if( Object.keys(imports).indexOf(nodeItem.id) > -1 ){
        if( nodeItem.progress === 'created'){
          nodeItem.progress = imports[nodeItem.id] ? 'imports' : 'imports-error';
        }
      }
    } )
    
    this.saveRepo().saveReport().setStatus('ready')
  }
}

const monitor = new Monitor()

module.exports = {
  run: ()=>{
    console.log("Monitor is running")
    monitor.loop();
  },
  get status (){
    return monitor.status;
  }
}

/*

WARNING

  Line beginning  commented import
  var re = new RegExp('^import ' + childComponentName + ' from',"gm");

*/
