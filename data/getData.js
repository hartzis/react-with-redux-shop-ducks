 export function getDucks(passedInCallback) {

    // setup query
    var tags = 'duck';
    var tagmode = "any";
    var format = "json";

    var query = "tags=" + tags + "&tagmode=" + tagmode + "&format=" + format;

    var jsonCallback = function ( data ) {
        console.log('ducks-', data);

        let ducks = data.items;

        // remove from global scope
        delete window.jsonFlickrFeed;

        return passedInCallback({ducks});

    };

    // Vanilla
    var jsonFlickrFeed = function ( data ) {
      jsonCallback( data );
    }
    // put on global scope temporaralllyyyy
    window.jsonFlickrFeed = jsonFlickrFeed;
    var scr = document.createElement('script');

    scr.src = 'http://api.flickr.com/services/feeds/photos_public.gne?callback=jsonFlickrFeed&' + query;
    document.body.appendChild(scr);

}
