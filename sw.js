self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // تمرير الطلبات مباشرة لضمان جلب أحدث البيانات من الشيت دائمًا
  e.respondWith(fetch(e.request));
});