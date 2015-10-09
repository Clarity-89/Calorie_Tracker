/**
 * Created by Alex on 09/10/2015.
 */
var app = app || {};

app.ItemList = Backbone.Collection.extend({
    model: app.Item
});