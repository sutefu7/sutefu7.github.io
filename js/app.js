if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service_worker.js')
      .then(function() {
        console.log('Service worker registered!');
      });
}

