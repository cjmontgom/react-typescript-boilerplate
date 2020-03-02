import {Request, Response} from "express";

const express = require( "express" );
// import express module

const app = express();
// create an express application. Object will have the methods for routing HTTP requests (verbs, url patterns etc)

//app.use(express.static("dist"));
        // configured to serve the static files from dist directory.

// app.use(function(_req: any, res: any, next: any) {
//     res.header("Access-Control-Allow-Origin", clientUrl); // update to match the domain you will make the request from
//     next();
// });

app.get('/api/getUsername', (_req: Request, res: Response) => res.send({ username: 'ALLISON' }));
        // route definition. Callback to be invoked whenever there is a get req with this path, relative to site root

app.listen(8080, () => console.log("Listening on port 8080!"));
        // starts the backend server on specified port