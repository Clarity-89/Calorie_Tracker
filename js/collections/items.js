/**
 * Created by Alex on 09/10/2015.
 */
var app = app || {};

//Create a collection to store received/added items
var ItemList = Backbone.Collection.extend({
    model: app.Item,

    data: {
        "appId": "13957b27",
        "appKey": "634647fd3fadbe686dbaacdbea287beb",
        "fields": "item_name,nf_calories",
        results: '0:50'
    },
    url: function () {
        console.log('q', this.query)
        return "https://api.nutritionix.com/v1_1/search/" + this.query + '?' + $.param(this.data);
    },



    parse: function (res) {
        console.log(res.hits);
        return res.hits;
    }
    //localStorage: new Backbone.LocalStorage('items')
});

app.Items = new ItemList();