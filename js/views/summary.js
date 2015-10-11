/**
 * Created by Alex on 09/10/2015.
 */
var app = app || {};

app.SummaryView = Backbone.View.extend({

    el: 'body',

    template: Handlebars.compile($('#summary').html()),
    template2: Handlebars.compile($('#total').html()),

    initialize: function () {
        console.log('Summary initialized');
        this.$selection = this.$('#selection');
        this.listenTo(app.Selected, 'all', this.render);
    },

    render: function () {
        var total = 0;
        app.Selected.forEach(function (el) {
            total += el.get('calories');
        });
        var source = {total: total};
        //console.log('total: ', total)
        this.$selection.html(this.template(app.Selected.toJSON()));
        this.$selection.append(this.template2(source));

        return this;
    }
});