# fluorescent-app
A visualization tool for atomic design

<img src="docs/assets/fluorescent-app_ui-selection.gif" />

## Motivation
Fluorescence is the emission of light by a substance that has absorbed light or other electromagnetic radiation.  
This emission of light is only observable when the stimulant light is still providing light to the organism/object.  
Fluorescence in the life sciences is used generally as a non-destructive way of tracking or analysis of biological molecules.  
<small>**Source:** https://en.wikipedia.org/wiki/Fluorescence</small>

### Atomic Design

<img src="docs/assets/instagram-atomic.png" width="400px"/>

<small>**Source:** http://atomicdesign.bradfrost.com/chapter-2/</small>

#### Example of Atomic-Structure in **fluorescent-app**
<img src="docs/assets/fluorescent-app_screenshot-01.jpg" />  

## Installation
In Project directory

### Clone
```
git clone --depth=1 https://github.com/chema-mengibar/fluorescent-app.git .fluorescent
rm -rf ./.fluorescent/.git
rm -rf ./.fluorescent/.gitignore
```
### Install
```
cd .fluorescent
npm i
```

## Usage

The application needs a server to obtain and save the modifications in the repository-object.
```
npm run build
npm run serve
```

## Development
To continue with the development of the tool itself:  
1. Open a terminal and execute the command: `npm run serve`
2. Open another terminal and execute the command: `npm start`

## Configuration

`fluorescent-app\src\config.js`

### Server
It is possible to use the tooling with a local or remote server.  
If no url or port is specified,   
**for localhost:** (Express)
```
  url : 'http://127.0.0.1'
  port : '8080'
```
**and for remote:**   
For a remote server, the Php version has been implemented, in case node.js is not available:  
`fluorescent-app\server\index.php`
```
  url : 'http://{your.domain}/{sub-dir}/index.php'
  port : ''

```
It is necessary to consider the configuration of the http-headers:  
CORS, Allowed Methods, etc...

**Remote Directory Overview**
```
root
 |- app.html
 |- app.js
 |- index.php
 |- repository.json
```

### Panel Menu Actions
It is possible to configure in the application, which actions are allowed  and show/hide the buttons.
```
actions:{
  save: false,
  ...
```

### Layout
Column names and element types can be configured.  
**Default columns:** atom, molecule, organism, page

Example of element in repository-object:
```
items:[
  {
    type: 'atom',
    label: 'Button1',
    id: 'node-12345'
  },
  ...
```


## Server-Client Communication

<img src="docs/server-client_communication/server-client.jpg" width="500px"/>

### Ecco
It is a service that controls sub-processes that are executed on the server, like "monitor"

### Plop
It is a service that executes the plop script, allowing the physical creation of components.  
**More info in** [plopjs.com](https://plopjs.com/)

### Monitor
It is a script that compares the schema and relation (parent/child) of the components with the physical structure and the "imports" in the project directory where the fluorescent application is used.

With this function it is possible for example to visualize:
- which components have been created
- if the planned connections are consistent.


## UI Elements & Features

### Items Selection
<img src="docs/assets/fluorescent-app_ui-selection.gif" />
<br /><br />
<img src="docs/assets/fluorescent-app_ui-selection.jpg" width="500px" />  

### Items Connection
<img src="docs/assets/fluorescent-app_ui-connection.gif" />

### Item Options
<img src="docs/assets/fluorescent-app_ui-modal-element-options.gif" />  

### Item Add
<img src="docs/assets/fluorescent-app_ui-modal-add.gif" />  

### Command-actions modal
**Key:** SpaceBar
<img src="docs/assets/fluorescent-app_ui-modal-cmd.gif" />  

### Server Action Status
<img src="docs/assets/fluorescent-app_ui-server.gif" />  

### Directory Parser
**(see Server-Client Communication)**   
This function allows to observe which components have been physically created
(folder and script files) in the "ROOT /src/components" directory of the project where fluorescent-app is used.  

<img src="docs/assets/fluorescent-app_ui-radiation.jpg" />  

## Sources

### Icons
- https://www.flaticon.com/authors/dave-gandy
- https://www.flaticon.com/authors/freepik
- https://www.flaticon.com/authors/vaadin
- https://www.flaticon.com/authors/google
