/**
 * Created by Alex on 09/10/2015.
 */
var app = app || {};

//Create a collection to store received/added items
app.ItemList = Backbone.Collection.extend({
    model: app.Item
});