(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homepage'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1> Homepage</h1>\r\n<div class=\"page_description\">\r\n    <h4>\r\n        This database will contain the first 151 of the pokemon found in \r\n        the first main games.\r\n        Each Pokemon will contain its pokedex index number, name,\r\n        typing, classification and more...\r\n\r\n        For example this page will randomly take a pokemon from the\r\n        first 151 available and will showcase their information, if you\r\n        reload you be able to see another pokemon!\r\n    </h4>\r\n</div>\r\n\r\n<div>\r\n<!-- This is for spacing the page -->\r\n</div>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"dataTable"),depth0,{"name":"dataTable","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();