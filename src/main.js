// import { Client } from "node-appwrite";



// const externalClient = new Client();
// externalClient
// .setEndpoint('https://cloud.appwrite.io/v1')
// .setProject('65c9f0c6dcb3c4b99e70');
// //const realtime = new Realtime(externalClient)
    
// const realtime = externalClient.realtime;
// externalClient.subscribe(['databases.65c9f1dab1c765f9541e.collections.65c9f1e49ee8dcddbe37.documents.test', 'files'], response => {
//     // Callback will be executed on changes for documents A and all files.
//     console.log(response);
// });



import { Client } from "node-appwrite";
import pkg from 'node-appwrite';
const { Realtime } = pkg;
const externalClient = new Client();
externalClient
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c9f0c6dcb3c4b99e70');

const realtime = new Realtime(externalClient);

realtime.subscribe(['databases.65c9f1dab1c765f9541e.collections.65c9f1e49ee8dcddbe37.documents.test', 'files'], response => {
    // Callback will be executed on changes for documents and files
    console.log(response);
});
