(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homepage'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"page_description\">\r\n    <h4>\r\n        This database will contain some of the pokemon found throughout the main games.\r\n        Each Pokemon will contain its pokedex index number, name,\r\n        typing, classification and more...\r\n\r\n        For example we can use Bulbasaur to demonstrate what you'll be\r\n        able to view from this creature!\r\n    </h4>\r\n</div>\r\n\r\n<div>\r\n<!-- This is for spacing the page -->\r\n</div>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"homeTable"),depth0,{"name":"homeTable","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();