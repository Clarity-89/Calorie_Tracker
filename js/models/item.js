/**
 * Created by Alex on 09/10/2015.
 */

var app = app || {};

// Item consisting of name and total amount of calories it has
app.Item = Backbone.Model.extend({

    defaults: {
        name: '',
        calories: 0
    }
});

