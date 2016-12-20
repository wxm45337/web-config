var log4js = require('log4js');
var logCategory = require('../common/GLOBAL').logCategory;

var Categorys = ['console','logInfo'];
log4js.configure({   
  "appenders": [ {
	  	"type": "console", 
	  	"category": Categorys[0]
	  },{        
	    "type": "dateFile",                 
	    "filename": "logs/",     
	    "pattern": "yyyyMMdd.txt",   
	    "absolute": true,                   
	    "alwaysIncludePattern": true,      
	    "category": Categorys[1]           
	  } 
  ]   
});
log4js.getLogger(Categorys[0]).setLevel('INFO');
log4js.getLogger(Categorys[1]).setLevel('DEBUG');
/*var consoleLog = log4js.getLogger(Categorys[0]);
consoleLog.setLevel('INFO');
var infoLog = log4js.getLogger(Categorys[1]);
infoLog.setLevel('DEBUG');
module.exports = consoleLog;*/

if(Categorys.indexOf(logCategory)<0){
	logCategory = 'console';
}
module.exports = log4js.getLogger(logCategory);