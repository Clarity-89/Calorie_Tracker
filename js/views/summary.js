/**
 * Created by Alex on 09/10/2015.
 */
var app = app || {};

//View for the items selected by user and total amount of calories in the selection
app.SummaryView = Backbone.View.extend({
    collection: app.Selected,
    el: 'body',

    template: Handlebars.compile($('#summary').html()),
    template2: Handlebars.compile($('#total').html()),

    events: {
        'click #removeFromList': 'removeItem'
    },

    initialize: function () {
        console.log('Summary initialized');

        this.$selection = this.$('#selection');
        this.listenTo(this.collection, 'all', this.render);
        this.render();
    },

    render: function () {
        //console.log('rendering summary');

        //Calculate the total amount of calories in the selection of items
        var total = 0;
        this.collection.forEach(function (el) {
            total += el.get('calories');
        });
        var source = {total: total.toFixed(2)};
        this.$selection.html(this.template(this.collection.toJSON())).append(this.template2(source));

        return this;
    },

    //Remove item from the selection list
    removeItem: function (e) {
        e.preventDefault();
        var id = $(e.currentTarget).parent().data("id");
        var item = this.collection.get(id);
        this.collection.remove(item);
        item.destroy();
    }
});