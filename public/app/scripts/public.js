define(['backbone'], function () {
    Public = {
        init: function () {
            // initialize router, views, data and layouts
        },
        start: function () {
            Public.init();
            Backbone.history.start();
        },
        Views: {},
        Models: {},
        Collections: {},
        Routers: {}
    }

    return Public;
});
