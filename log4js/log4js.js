var util = require('util');

var logInfo = require('./log4js.config');
var date = require('../common/date_format.js');
  
var DEFAULT = "%s %s -- %s %s HTTP/%s, %s %s";
// 配合express用的方法  
exports.use = function(app) {  
    //页面请求日志, level用auto时,默认级别是WARN  
    app.use(
        function* (next){
            var req = this.request, header = req.header, nodeReq = this.req;
            /*var str = util.format(DEFAULT, date.asString(new Date), req.ip, 
                req.method, req.url, nodeReq.httpVersion, 
                req.length || null, header['user-agent']);*/
            var params = this.query;
            if(req.method === 'POST')
                params = req.body;
            var str = util.format(DEFAULT, date.asString(new Date), req.ip, 
                req.method , req.url,   nodeReq.httpVersion ,
                JSON.stringify(params), '');
            // console.log(str);
            logInfo.info(str);
            yield next;
        }
    );  
}  