import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c9f0c6dcb3c4b99e70');

client.subscribe(['collections.entity.documents.test', 'files'], response => {
    // Callback will be executed on changes for documents A and all files.
    console.log(response);
});
