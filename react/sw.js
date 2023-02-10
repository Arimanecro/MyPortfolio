self.addEventListener('fetch', function(event) {
    if (event.request.method == "GET") { 
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if(response) { return response; } 
        return fetch(event.request)
        .then((response) => {
          return fetch(event.request).then(res => res);
        }).catch(function(error) {
          console.error('Fetching failed:', error);
        }) 
      }) 
  )}});