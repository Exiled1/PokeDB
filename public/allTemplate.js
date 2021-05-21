(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dataTable'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <tr>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":8,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['home_table'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"poketables\">\r\n    <table border=\"1\">\r\n        <tbody>\r\n            <tr>\r\n                <th>Pokemon Name</th>\r\n                <th>Pokedex Number</th>\r\n                <th>Classification</th>\r\n                <th>Type 1</th>\r\n                <th>Type 2</th>\r\n                <th>Abilities</th>\r\n                <th>Generation of Origin</th>\r\n                <th>Height in Meters</th>\r\n                <th>Weight in Kilograms</th>\r\n            </tr>\r\n            <tr>\r\n                <th>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pokemon") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</th>\r\n                <th>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pokemon") : depth0)) != null ? lookupProperty(stack1,"pokedex_number") : stack1), depth0))
    + "</th>\r\n                <th>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pokemon") : depth0)) != null ? lookupProperty(stack1,"classification") : stack1), depth0))
    + "</th>\r\n                <th>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pokemon") : depth0)) != null ? lookupProperty(stack1,"type1") : stack1), depth0))
    + "</th>\r\n                <th>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pokemon") : depth0)) != null ? lookupProperty(stack1,"type2") : stack1), depth0))
    + "</th>\r\n                <th>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pokemon") : depth0)) != null ? lookupProperty(stack1,"abilities") : stack1), depth0))
    + "</th>\r\n                <th>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pokemon") : depth0)) != null ? lookupProperty(stack1,"origin_generation") : stack1), depth0))
    + "</th>\r\n                <th>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pokemon") : depth0)) != null ? lookupProperty(stack1,"height") : stack1), depth0))
    + "</th>\r\n                <th>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pokemon") : depth0)) != null ? lookupProperty(stack1,"weight") : stack1), depth0))
    + "</th>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";
},"useData":true});
templates['home_text'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"page_description\">\r\n    <p>\r\n        This database will contain all of the pokemon up to date, as of\r\n        April 29th 2021.\r\n        Each Poekmon will contain its pokedex index number, name,\r\n        typing, classification and more...\r\n\r\n        For example we can use Bulbasaur to demonstrate what you'll be\r\n        able to view from this creature!\r\n    </p>\r\n</div>\r\n";
},"useData":true});
templates['pokedex_text'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['searchContainer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"SearchContainer\">\r\n    <input type=\"text\" class=\"Search\" name="
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? lookupProperty(stack1,"name1") : stack1), depth0))
    + ">\r\n    <input type=\"button\" class=\"Search\" value="
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"input") : depth0)) != null ? lookupProperty(stack1,"name1") : stack1), depth0))
    + ">\r\n    <input type=\"text\" class=\"Search\" name="
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? lookupProperty(stack1,"name2") : stack1), depth0))
    + ">\r\n    <input type=\"button\" class=\"Search\" value="
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"input") : depth0)) != null ? lookupProperty(stack1,"name2") : stack1), depth0))
    + ">\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true});
templates['teamSearch'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"TeamSearchContainer\">\r\n    <input type=\"text\" name=\"teamName\" id=\"teamNameSearch\" placeholder=\"Team Search\">\r\n    <button>Add Team</button>\r\n    <button>Edit Team</button>\r\n    <button>Remove Team</button>\r\n</div>\r\n";
},"useData":true});
})();