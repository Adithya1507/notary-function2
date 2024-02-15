import { Client } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
    // Initialize Appwrite client
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('65c9f0c6dcb3c4b99e70');

    try {
        // Subscribe to events
        client.subscribe(['databases.65c9f1dab1c765f9541e.collections.65c9f1e49ee8dcddbe37.documents.update'], response => {
            // Callback will be executed on all account events.
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
    res.send('Subscription request processed.');
};
