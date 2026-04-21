self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cls => {
      if (cls.length > 0) {
        cls[0].focus();
      } else {
        clients.openWindow('./');
      }
    })
  );
});
