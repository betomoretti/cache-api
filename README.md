# cache-api

To start:

1. npm install
2. npm start

Note: Docker compose can be used for start mongo: `docker-compose up -d`

To run test:

`npm test`

API Docs:

GET /cache:
Returns all entries

Request:
```
curl localhost:3000/cache
```

Response:
```
[{"_id":"5bf2f67ac049d252a85ee0f7","data":"bla1","createdAt":"2018-11-19T17:44:26.862Z","updatedAt":"2018-11-19T17:51:07.880Z","__v":0}]
```

GET /cache/:id

Returns an specific entry. If not exists a new one is created.

Request:
```
curl localhost:3000/cache/5bf2f67ac049d252a85ee0f7
```
Response:
```
{"_id":"5bf2f67ac049d252a85ee0f7","data":"bla1","createdAt":"2018-11-19T17:44:26.862Z","updatedAt":"2018-11-19T17:51:07.880Z","__v":0}
```

PUT /cache/:id

Updates an specific entry. If not exist, 404 code is returned.

Request
```
curl -X "PUT" -d '{"data": "bla2"}' -H 'content-type: application/json' localhost:3000/cache/5bf2f67ac049d252a85ee0f7
```

POST /cache
Creates a new entry

Request
```
curl -H "Content-Type: application/json" -d '{"data": "blabla"}' localhost:3000/cache
```

DELETE /cache/:id

Deletes an specific entry. If not exists, 404 error is returned.

Request
```
curl -X "DELETE" localhost:3000/cache
```
