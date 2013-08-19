/*!    */window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {}
}, $(document).on("click", "a:not([data-bypass])", function(o) {
    var e = $(this).attr("href"), t = this.protocol + "//";
    e && e.slice(0, t.length) !== t && 0 !== e.indexOf("javascript:") && (o.preventDefault(), 
    Backbone.history.navigate(e, !0));
}), App.Routers.ApplicationRouter = Backbone.Router.extend({
    routes: {
        "github/awallef/backbone/": "index",
        "github/awallef/backbone/:controller/:action(/*params)": "classic"
    },
    index: function() {
        this.classic("pages", "home");
    },
    classic: function(o, e) {
        console.log(Backbone.history.fragment);
        var t = Backbone.history.root + Backbone.history.fragment;
        Backbone.history.here != t ? $.ajax({
            url: t
        }).done(function(o) {
            $("#content").html(o), console.log(e);
        }) : (Backbone.history.here = "never the same boy!", console.log("first run.."));
    }
});