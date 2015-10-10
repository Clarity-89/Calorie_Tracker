/**
 * Created by Alex on 09/10/2015.
 */

// Handle the view for the list of results returned after search button is pressed
var app = app || {};

app.ResultsView = Backbone.View.extend({

    tagName: 'li',

    template: Handlebars.compile($('#searchResults').html()),

    events: {
        'click .searchButton': 'search',
        'click #addToList': 'addItem',
        'keypress #search': 'search'
    },

    initialize: function () {
        console.log('initialized');
        this.$searchButton = this.$('.searchButton');
        this.$search = this.$('#search');
        this.listenTo(this.model, 'all', this.render);
        this.listenTo(this.$searchButton, 'all', this.render);
    },

    render: function () {
        console.log('render');
        //var results = app.ItemList.length;

        //if (results){
        this.$el.html(template(this.model.toJSON()));
        //}

        return this;
    },
    /*Function to send an AJAX request and retrieve tha data according to the search keyword and store it in the model*/
    search: function () {
        console.log('search button pressed');
        var query = this.$search.val().trim();
        console.log(query);
        var data = {
            "appId": "13957b27",
            "appKey": "634647fd3fadbe686dbaacdbea287beb",
            "query": query
        };

        /*$.getJSON("https://api.nutritionix.com/v1_1/search -H 'Content-Type: application/json' -d'", data, function (res) {
            console.log(res);
        });*/
    }
});

