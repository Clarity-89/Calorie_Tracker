/**
 * Created by Alex on 09/10/2015.
 */
var app = app || {};

//Create a collection to store received/added items
var ItemList = Backbone.Collection.extend({
    model: app.Item,

    localStorage: new Backbone.LocalStorage('items')
});

app.Items = new ItemList();