/**
 * Created by Alex on 09/10/2015.
 */
var app = app || {};

app.SummaryView = Backbone.View.extend({

    el: 'body',

    template: Handlebars.compile($('#summary').html()),

    initialize: function () {
        console.log('Summary initialized');
        this.$selection = this.$('#selection');
        this.listenTo(app.Selected, 'all', this.render);
    },

    render: function () {
        this.$selection.html(this.template(app.Selected.toJSON()));

        return this;
    }
});