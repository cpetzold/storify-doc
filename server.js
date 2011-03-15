var express = require('express'),
    md = require('node-markdown').Markdown;

var server = module.exports = express.createServer();

server.configure(function(){
  server.set('view engine', 'md');
  server.use(express.methodOverride());
  server.use(server.router);
  server.use(express.static(__dirname + '/public'));
});


server.register('.md', {
  compile: function(str, options){
    var html = md(str);
    return function(locals){
      return html;
    };
  }
});

var nav = {
  "story": {
    "information": { "path": "story/info", "method": "GET" },
    "elements": { "path": "story/elements", "method": "GET" },
    "new": { "path": "story/new", "method": "POST" },
    "publish": { "path": "story/publish", "method": "POST" },
    "remove": { "path": "story/remove", "method": "POST" }
  },
  "user": {
    "information": { "path": "user/info", "method": "GET" }
  },
  "element": {
    "information": { "path": "element/info", "method": "GET" },
    "add": { "path": "element/add", "method": "POST" },
    "move": { "path": "element/move", "method": "POST" },
    "remove": { "path": "element/remove", "method": "POST" }
  }
};
var root = 'doc';
    
server.get(/\/([\w\.]+)\/{0,1}(.*)/, function(req, res, next){
  if (req.params[0] != root) return next();
  
  var resource = req.params[1] || 'api';
  if (resource[resource.length-1] == '/') resource = resource.substr(0, resource.length-1);
  
  res.render(root+'/'+resource, {
    layout: 'doc.jade',
    title: resource + ' | dev.storify.com',
    docRoot: '/'+root+'/',
    nav: nav
  });
});



if (!module.parent) {
  server.listen(8080);
  console.log("server: %d", server.address().port);
}