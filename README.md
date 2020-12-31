# Xillow Graph Backend

> A backend that provides a restful api for delivering graphs of housing information

## Related Projects

  - https://github.com/Not-Another-Bee-Bee/JD-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

```sh
npm start
```

starts express hosting the api

## Requirements

- Node v13.10.1
- psql (PostgreSQL) 12.2

## Development
To set up the database
```sh
psql -U (username) -f database/schema.pgsql
```
or

```
\i database/schema.pgsql
```
from the postgres shell

```sh
cp database/credentials.example.js database/credentials.js
```
and add your postgres credentials

```sh
npm run seed
```

seeds dependant database tables.

```
npm run seed:gencsv
```

a helper for generating larges sets of data in a csv to move into postgres

### Installing Dependencies

From within the root directory:

```sh
brew install postgres
```

or your prefered method of setting up postgres

```sh
npm install
```

## Style Guide

Using the Airbnb Style Guide with ESLint  

Refer to the [AirBnb Style Guide](https://github.com/airbnb/javascript).
