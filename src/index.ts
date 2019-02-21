import {Greeter} from "./greeter";
import Examplefunctions from "./examplefunctions";
import Asyncexamples from "./asyncexamples";


const express = require('express');
const app = express();
const port = 3001;
const prom = require('prom-client');
const prom_gc = require('prometheus-gc-stats');
prom_gc();
const promBundle = require("express-prom-bundle");
const metricsMiddleware = promBundle({includeMethod: true,includePath:true});

const Monitor = require('./Monitor');

app.get('/metrics', function(req, res) {
    res.end(prom.register.metrics());
});




app.get('/ignored', (req, res) => res.send('This path is ignored in prometheus'));
app.get('/test', (req, res) => res.send('This path is also ignored'));
//Paths above are ignored by the counter
app.use(metricsMiddleware);
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/greeter', (req, res) => res.send(Greeter('Colin')));
app.get('/adder', (req, res) => res.send(Examplefunctions.adder(1,5).toString()));
app.get('/count', (req, res) => res.send(Examplefunctions.countevens(12).toString()));
app.get('/cast', (req, res) => res.send(Examplefunctions.typeAssertion("1","3").toString()));
app.get('/wait', (req, res) => res.send(Promise.resolve(Asyncexamples.addasync()).toString()));


app.use(Monitor.requestCounters);
app.use(Monitor.responseCounters);
Monitor.injectMetricsRoute(app);
Monitor.startCollection();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
