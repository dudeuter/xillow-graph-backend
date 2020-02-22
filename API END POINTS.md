# API END POINTS

# /api/graph/:houseID/
### GET
A get request to this endpoint returns information related to the house, and rendering the graph module to the client


```js
{
  address: String,
  neighborhood: String,
  city: String,
  estimate: Number,
  housePlot: [{ date: Date, price: Number, listed: Boolean, sold: Boolean }],
  neighborhoodPlot: [{ date: Date, price: Number }],
  cityPlot: [{ date: Date, price: Number }]
}
```

# /api/houses/
## POST /api/houses/
Accepts text/json body: object in the shape of a house, creates a new row in the database with given values  

```js
{
  address: String,
  estimate: Number,
  neighborhood: Number,
  city: Number
  // all properties are required
}
```

# /api/houses/:id
## GET: /api/houses/:id
Returns JSON object represeting the house row in the database.
```js
{
  address: String,
  neighborhood: String,
  city: String,
  estimate: Number
}
```

## PATCH: /api/houses/:id
Accepts a text/json body of an object with properties to be replaced in the database
```js
{
  // each property is optional
  "address": String,
  "neighborhood": String,
  "city": String,
  "estimate": Number
}
```

## DELETE /api/houses/:id
A request to this end-point deletes the record for a house with a given id, and corresponding plot points

# /api/houses/:id/plot
## GET /api/houses/:id/plot
returns an JSON object with an array containing an array of points for the given house with an id
```js
{
  plot: [{
    date: Date,
    price: Number,
    listed: Boolean,
    sold: Boolean
    }]
}
```

## POST /api/houses/:id/plot
object representing a point to be plotted
```js
{
  date: Date,
  price: Number,
}
```

# /api/neighborhoods/
## POST
body object in the shape of a neighborhood to be added to the database
```js
{
  "name": String,
  "city": Number // must be a valid ID to an existing city
}
```

# /api/neighborhoods/:id
## GET /api/neighborhoods/:id
A request to this end-point returns an object representing a nieghborhood at the specifed ID
```js
{
  id: Number,
  name: String,
  cityId: Number
}
```
## PATCH /api/neighborhoods/:id
body: a property of a neighborhood to be replaced
```js
{
  // each property is optional
  "name": String,
  "cityId": Number
}
```
## DELETE /api/neighborhoods/:id
A request to this end-point deletes the record for a neighborhood with a given id, and corresponding plot points

# /api/neighborhoods/:id/plot
## GET /api/neighborhoods/:id/plot
get all the points for the neighborhood at the ID
```js
{
  plot: [{estimate: Number, date: Date}]
}
```
## POST /api/neighborhoods/:id/plot
object of the shape of a plot point in the neighborhood ID
```js
{
  // all properties are required
  "estimate": Number,
  "date": Date
}
```

# /api/cities/
## POST /api/cities/
body: object in the shape of a city to be added to the database
```js
{
  "name": String
}
```

# /api/cities/:id
## GET /api/cities/:id
a request to this end-point get the city with the corresponding id
```js
{
  "name": String
}
```
## PUT /api/cities/:id
body: a object to replace the city at corresponding id
```js
{
  "name": String
}
```
## DELETE /api/cities/:id
A request to this end-point deletes the record for a city with a given id, and corresponding plot points

# /api/cities/:id/plot
## GET /api/cities/:id/plot
get all the points for the city at the ID
```js
{
  plot: [{estimate: Number, date: Date}]
}
```
## POST /api/cities/:id/plot
object of the shape of a plot point in the city ID
```js
{
  "estimate": Number,
  "date": Date
}
```
