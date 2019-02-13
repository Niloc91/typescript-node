import {Greeter} from "./greeter";
import Examplefunctions from "./examplefunctions";
import Asyncexamples from "./asyncexamples";


const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/greeter', (req, res) => res.send(Greeter('Colin2')));
app.get('/adder', (req, res) => res.send(Examplefunctions.adder(1,5).toString()));
app.get('/count', (req, res) => res.send(Examplefunctions.countevens(12).toString()));
app.get('/cast', (req, res) => res.send(Examplefunctions.typeAssertion("1","3").toString()));

app.get('/wait', (req, res) => res.send(Promise.resolve(Asyncexamples.addasync()).toString()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))