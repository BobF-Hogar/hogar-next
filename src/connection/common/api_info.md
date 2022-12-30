# API Info

The `api_info.js` file is not included in the repository due to including sensitive information.

This file needs to export two functions:
1. `getApiKey` which returns the relevant key.
2. `getApiUrlInfo` which returns an object that looks like this:  
```
{
    apiUrl: "https://...",
    apiWebsocket: "wss://...",
    socketPort: 1234,
    key: {
        android: 'XXXXXXXXXXXXXXXX',
        ios: 'XXXXXXXXXXXXXXXX',
        web: 'XXXXXXXXXXXXXXXX',
    }
}
```

These functions should be able to automatically detect any pertinent environment details to return the correct value.