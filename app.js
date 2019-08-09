if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service_worker.js').then(function(x) {
        console.log('Service worker registration successfull with scape: ', x.scope);
    }).catch(function(err) {
          console.log('Service worker registration faild: ', err);
    });
}

