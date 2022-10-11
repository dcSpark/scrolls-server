# Scrolls server

This repo provides a convenient docker setup for a server tightly integrated with a scrolls instance. This particular instance is for managing ADA handles

### Running:

To run, in the root directory run `docker-compose up`

A server will be exposed on port 4040. It will take several hours for the instance to sync all handles.

API usage:
Route: `/addressByAdaHandle` 
Query Param: `handle` => Plaintext handle.

Request: GET `http://localhost:4040/addressByAdaHandle?handle=cryptolife`
Response:
```json
{
    address: "addr1q82e4ntmluna3vtwp8j9k7767nf7ksgxjnzyq2gz7gktmls90r726af0w4ptqtx02gmx6grp3yftp4xtsaup078ucevq7ypshd"
}
```

Or if the handle does not exist OR scrolls is not fully synced yet:

```json
{
    address: null
}
```