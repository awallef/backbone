App.Routers.ApplicationRouter = Backbone.Router.extend({
    routes: {
        "": "firstrun",

    },
    
    firstrun: function() {
        console.log("router - firstrun");
    }
});