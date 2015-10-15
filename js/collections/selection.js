/**
 * Created by Alex on 11/10/2015.
 */
var app = app || {};

//Create a collection to store user selected items
var Selection = Backbone.Collection.extend({
    model: app.SelectedItem,

    localStorage: new Backbone.LocalStorage('selected-items'),

    initialize: function () {
        this.fetch();
    }
});

app.Selected = new Selection();
