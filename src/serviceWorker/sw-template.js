if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
  	const QUOTES_URL = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
  	const {self: wbx} = self;
  	const addToCache = (item, cacheName) => caches.add(cacheName, item)
  	
    console.log('wbx', wbx);
 
    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);
 
	/* custom cache rules*/
	workbox.routing.registerNavigationRoute('/index.html', {
	  blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
	});
	
	workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );
    
    /*workbox.routing.registerRoute(
      new RegExp('https://breaking-bad-quotes.herokuapp.com/v1/quotes'),
      workbox.strategies.networkFirst({
      	cacheName: 'quotes',
      	networkTimeoutSeconds: 60,
      	plugins: [
  		  new workbox.cacheableResponse.Plugin({
      	    statuses: [200],
          }),
      	],
      })
    );*/
    
  	const strategy = workbox.strategies.networkFirst({
	  	cacheName: 'quotes',
	  	networkTimeoutSeconds: 60,
	  	plugins: [
		  new workbox.cacheableResponse.Plugin({
	  	    statuses: [200],
		  }),
	  	],
  	});
    
    wbx.addEventListener('fetch', async (event) => {
	  console.log('fetching .......', event)
	  if(!event.request.url === QUOTES_URL) {
	  	const quotePromise = strategy.makeRequest({event, request: QUOTES_URL});
	  	const quoteResponse = await quotePromise();
	  };
	  
	});
 
} else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
