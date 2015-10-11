/**
 * Created by Alex on 11/10/2015.
 */
var app = app || {};

// Model to store items added by user
app.selectedItem = Backbone.Model.extend({

    defaults: {
        name: '',
        calories: 0
    }
});