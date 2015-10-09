/**
 * Created by Alex on 09/10/2015.
 */

// Handle the view for the list of results returned after search button is pressed
var app = app || {};

app.ResultsView = Backbone.View.extend({

    tagName: 'li',

    template: Handlebars.compile($('#searchResults').html()),

    events: {
        'click #searchButton': 'search',
        'click #addToList': 'addItem',
        'keypress #search': 'search'
    },

    initialize: function () {
        this.$searchButton = this.$('#searchButton');
        this.$search = this.$('#search');
        this.listenTo(app.ItemList, 'all', this.render);
    },

    render: function () {
        console.log('render');
        //var results = app.ItemList.length;

        //if (results){
        this.$el.html(template(this.model.toJSON()));
        //}
    },

    search: function () {
        console.log('search button pressed');
        var query = this.$search.val().trim();
        console.log(query);
        var data = {
            "appId": "13957b27",
            "appKey": "634647fd3fadbe686dbaacdbea287beb",
            "query": query
        };

        $.getJSON("https://api.nutritionix.com/v1_1/search -H 'Content-Type: application/json' -d'", data, function (res) {
            console.log(res);
        });
    }
});

