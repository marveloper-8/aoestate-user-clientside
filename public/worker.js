console.log('Service Worker Loaded...')

self.addEventListener('push', e => {
    const data = e.data.json()
    console.log('Push Received...')
    self.registration.showNotification(data.title, {
        body: 'Notified by AO Estate Chariots',
        icon: 'https://aoestatechariots.com/static/media/logo.a432b66d.png'
    })
})