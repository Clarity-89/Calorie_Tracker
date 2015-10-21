/**
 * Created by Alex on 09/10/2015.
 */

var app = app || {};

// Item consisting of name and total amount of calories it has
app.Item = Backbone.Model.extend({

    defaults: {
        name: '',
        calories: 0
    },


    parse: function (res) {
        if (res) {

            return {
                id: this.cid + new Date().valueOf(), //Generate semi-unique id for an item
                name: res.fields.item_name,
                size: res.fields.nf_serving_weight_grams ? parseInt(res.fields.nf_serving_weight_grams, 10) + ' ' + 'g' :
                res.fields.nf_serving_size_qty + ' ' + res.fields.nf_serving_size_unit,
                calories: res.fields.nf_calories
            };
        }
    }
});

