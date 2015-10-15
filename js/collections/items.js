/**
 * Created by Alex on 09/10/2015.
 */
var app = app || {};

//Create a pageable collection to store received/added items
var ItemList = Backbone.PageableCollection.extend({
    model: app.Item,
    mode: "client",

    // Override default pagination states
    state: {
        pageSize: 10 //Show 10 results per page
    },

    data: {
        "appId": "13957b27",
        "appKey": "634647fd3fadbe686dbaacdbea287beb",
        "fields": "item_name,nf_calories",
        results: '0:50'
    },

    //Create a url for AJAX request with a dynamic query from the search form
    url: function () {
        return "https://api.nutritionix.com/v1_1/search/" + this.query + '?' + $.param(this.data);
    },

    parse: function (res) {
        return res.hits;
    }

});

app.Items = new ItemList();

var paginator = new Backgrid.Extension.Paginator({
    collection: app.Items
});
