/**
 * pwa相关的设定
 * @module
 * filreExtensionRegexp
 * @author 贺烨毅 2019210737
 */

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);


const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
 
  ({ request, url }) => {
    
    if (request.mode !== 'navigate') {
      return false;
    } 

    if (url.pathname.startsWith('/_')) {
      return false;
    } 
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } 

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

registerRoute(
 
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
