import { Client } from 'node-appwrite';

export default async ({ req, res, log, error }) => {
    // Initialize Appwrite client
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('65c9f0c6dcb3c4b99e70')
        .setKey('d741f023e7ca137d07e4f11be0845db402012423a7932d481a267a1e024341286de95e80f9dd77f449d307bb665e1bd856bb6dcba0a14e123734fb0908e4348cf270540a20b78802ab2f0bcd70e574982a9562ff08fba562545a7e8383f2a30ebcf9b0e6ba82a1e53c2a12e3047efeb06d63143e256cf5a9604a183ce524a00a')

    try {
        // Subscribe to document update events in a specific collection
        client.subscribe(['databases.default.collections.65c9f1e49ee8dcddbe37.documents.update'], response => {
            // Callback will be executed when any document in the specified collection is updated
            log('Received event:', response);
            // Handle the event logic here
        });

        // Log success message
        log('Subscription to Appwrite Realtime events successful.');
    } catch (err) {
        // Log error if subscription fails
        error('Error subscribing to Appwrite Realtime events:', err);
    }

    // Send a response
    return res.empty();
};
