App.Routers.ApplicationRouter = Backbone.Router.extend({
    
    routes: {
        "github/awallef/backbone/": "index",
        "github/awallef/backbone/:controller/:action(/*params)": "classic"
    },
    
    index: function(){
        this.classic('pages','home');
    },
    
    classic: function( controller, action, params) {
        
        
        console.log( Backbone.history.fragment );
        var requestURL = Backbone.history.root + Backbone.history.fragment;
        
        if( Backbone.history.here !=  requestURL ){
            $.ajax({
                url: requestURL
            }).done(function ( data ) {
                $('#content').html( data );
                console.log( action );
            });
        }else{
            Backbone.history.here = 'never the same boy!';
            console.log('first run..');
        }
        
        
    }
});