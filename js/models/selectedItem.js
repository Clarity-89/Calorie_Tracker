/**
 * Created by Alex on 11/10/2015.
 */
var app = app || {};

// Model to store items added by user
app.SelectedItem = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage('selected-items'),
    defaults: {
        name: '',
        calories: 0
    }
});

