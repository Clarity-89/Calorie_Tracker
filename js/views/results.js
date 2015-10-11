/**
 * Created by Alex on 09/10/2015.
 */

// Handle the view for the list of results returned after search button is pressed
var app = app || {};

app.ResultsView = Backbone.View.extend({

    el: 'body',
    template: Handlebars.compile($('#searchResults').html()),

    events: {
        'click .searchButton': 'search',
        'click #addToList': 'addItem',
        'keypress #search': 'searchOnEnter'
    },

    initialize: function () {
        console.log('initialized');
        this.$searchButton = this.$('.searchButton');
        this.$input = this.$('#search');
        this.$hits = this.$('#hits');
        this.listenTo(app.Items, 'all', this.render);
    },

    render: function () {
        console.log('rendering')
        //var results = app.ItemList.length;

        //if (results){
        this.$hits.html(this.template(app.Items.toJSON()));
        //}

        return this;
    },
    /*Function to send an AJAX request and retrieve tha data according to the search keyword and store it in the model*/
    search: function () {
        if (this.$input.val()) {
            //this.clearSearch();
            console.log('search button pressed');
            console.log('model: ', this.Items);
            var query = this.$input.val().trim();
            console.log(query);
            var data = {
                "appId": "13957b27",
                "appKey": "634647fd3fadbe686dbaacdbea287beb",
                "fields": "item_name,nf_calories"
            };

            $.getJSON("https://api.nutritionix.com/v1_1/search/" + query, data, function (res) {
                console.log('Res', res.hits);

                app.Items.reset();
                res.hits.forEach(function (el) {

                    app.Items.create({
                        name: el.fields.item_name,
                        calories: el.fields.nf_calories
                    });
                });

            });
        }
    },

    searchOnEnter: function () {
        if (event.which == ENTER_KEY && this.$input.val()) {
            //this.clearSearch();
            event.preventDefault();
            this.search();
            this.$input.val('');
        }

    },

    clearSearch: function () {

        if (app.Items) {
            _.invoke(app.Items, 'destroy');
        }
        return false;
    }


});

