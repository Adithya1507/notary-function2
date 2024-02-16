import { Realtime } from "appwrite";

const realtime = new Realtime()
    .setEndpoint('https://cloud.appwrite.io/v1');

realtime.subscribe(['databases.65c9f1dab1c765f9541e.collections.65c9f1e49ee8dcddbe37.documents.test', 'files'], response => {
    // Callback will be executed on changes for documents A and all files.
    console.log(response);
});
