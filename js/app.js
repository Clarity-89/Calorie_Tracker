/**
 * Created by Alex on 08/10/2015.
 */

var app = app || {};

/* Function to adjust the footer. 'After' means to set footer's position as relative so if goes off the screen if the
 screen if the list of results/selections is too long, any other param will set it's position to the initial one */
app.setFooter = function (state) {
    if (state == 'after') {
        $('.footer').css({'position': 'relative', 'margin-top': '2%'});
    } else {
        $('.footer').css({'position': 'absolute', 'margin-top': '0'});
    }
};
var ENTER_KEY = 13;

$(function () {

    new app.ResultsView();
    new app.SummaryView();

});