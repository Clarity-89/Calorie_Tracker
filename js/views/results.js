/**
 * Created by Alex on 09/10/2015.
 */

// Handle the view for the list of results returned after search button is pressed
var app = app || {};

app.ResultsView = Backbone.View.extend({
    collection: app.Items,
    el: 'body',
    template: Handlebars.compile($('#searchResults').html()),

    events: {
        'click #searchButton': 'search',
        'click #addToList': 'addItem',
        'keypress #search': 'searchOnEnter'
    },

    initialize: function () {
        console.log('initialized');

        this.$input = this.$('#search');
        this.$hits = this.$('#hits');
        //this.listenTo(this.model, 'all', this.render);
        this.listenTo(this.collection, 'all', this.render);
    },

    render: function () {
        //console.log('rendering');
        this.$hits.html(this.template(this.collection.toJSON()));
        if (this.collection.length > 0) {
            $("#paginator").append(paginator.render().$el);
            app.setFooter('after');
        } else {
            app.setFooter('before');
        }

        return this;
    },
    /*Function to send an AJAX request and retrieve the data according to the search keyword and store it in the model*/
    search: function () {
        if (this.$input.val()) {
            //console.log('search button pressed');
            var query = this.$input.val().trim();
            //console.log(query);
            app.Items.query = this.$input.val().trim();
            app.Items.fetch();
        }
    },

    //Fire the search function on Enter keypress
    searchOnEnter: function (event) {
        if (event.which == ENTER_KEY && this.$input.val()) {
            event.preventDefault();
            this.search();
        }
    },

    //Function to add selected item to the user's list
    addItem: function (e) {
        e.preventDefault();
        var id = $(e.currentTarget).parent().data("id");
        var item = app.Items.get(id);

        /*Create a new model with the attributes of a Items model in order to be able to save it to local storage
         and delete separately from the items in results */
        var selItem = new app.SelectedItem({
            id: item.attributes.id,
            name: item.attributes.name,
            calories: item.attributes.calories
        });
        app.Selected.add(selItem);
        selItem.save();
    }
});

