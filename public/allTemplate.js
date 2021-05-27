(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dataTable'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                <th>\r\n                   "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " \r\n                </th>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <td>\r\n                    "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\r\n                </td>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table>\r\n    <tbody>\r\n            <tr>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"headers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":9,"column":25}}})) != null ? stack1 : "")
    + "            </tr>\r\n            <tr>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"queryData") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":17,"column":25}}})) != null ? stack1 : "")
    + "            </tr>\r\n            \r\n    </tbody>\r\n</table>";
},"useData":true});
templates['getPokemon'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"formCol\">\r\n                <input class='form-control' type=\"text\" name="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":61},"end":{"line":8,"column":67}}}) : helper)))
    + " id="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":71},"end":{"line":8,"column":77}}}) : helper)))
    + " placeholder="
    + alias4(((helper = (helper = lookupProperty(helpers,"searchText") || (depth0 != null ? lookupProperty(depth0,"searchText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchText","hash":{},"data":data,"loc":{"start":{"line":8,"column":90},"end":{"line":8,"column":104}}}) : helper)))
    + ">\r\n            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"SearchContainer\">\r\n    <div class=\"SearchFlex\">\r\n        <form action="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"reqPath") || (depth0 != null ? lookupProperty(depth0,"reqPath") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"reqPath","hash":{},"data":data,"loc":{"start":{"line":4,"column":21},"end":{"line":4,"column":32}}}) : helper)))
    + " class=\"getPokemon\" method=\"post\">\r\n            <legend>Find a Pokemon</legend>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"field") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":10,"column":21}}})) != null ? stack1 : "")
    + "            <div class=\"formCol\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Search</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";
},"useData":true});
templates['homeTable'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
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
templates['homeText'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"page_description\">\r\n    <p>\r\n        This database will contain all of the pokemon up to date, as of\r\n        April 29th 2021.\r\n        Each Pokemon will contain its pokedex index number, name,\r\n        typing, classification and more...\r\n\r\n        For example we can use Bulbasaur to demonstrate what you'll be\r\n        able to view from this creature!\r\n    </p>\r\n</div>\r\n";
},"useData":true});
templates['pokedexTable'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['teamSearch'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"TeamSearchContainer\">\r\n    <input type=\"text\" name=\"teamName\" id=\"teamNameSearch\" placeholder=\"Team Search\">\r\n    <button>Add Team</button>\r\n    <button>Edit Team</button>\r\n    <button>Remove Team</button>\r\n</div>\r\n";
},"useData":true});
templates['teamTable'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
})();