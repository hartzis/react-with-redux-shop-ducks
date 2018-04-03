 export function getDucks({query}, passedInCallback) {

    // setup query
    let tags = query || '';
    let tagmode = "any";
    let format = "json";

    let queryString = "tags=" + tags + "&tagmode=" + tagmode + "&format=" + format;

    let jsonCallback = function ( data ) {
        console.log('ducks-', data);

        let ducks = data.items;

        // remove from global scope
        delete window.jsonFlickrFeed;

        return passedInCallback(ducks);

    };

    // Vanilla
    let jsonFlickrFeed = function ( data ) {
      jsonCallback( data );
    }
    // put on global scope temporaralllyyyy
    window.jsonFlickrFeed = jsonFlickrFeed;
    let scr = document.createElement('script');

    scr.src = 'http://api.flickr.com/services/feeds/photos_public.gne?callback=jsonFlickrFeed&' + queryString;
    document.body.appendChild(scr);

}
