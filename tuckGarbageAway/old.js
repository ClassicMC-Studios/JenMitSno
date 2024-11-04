import express from 'express';
import 'dotenv/config'
import nunjucks from 'nunjucks';
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.URL, process.env.KEY)
var app = express();
let { data: countries, error } = await supabase
  .from('countries')
  .select('*')

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.get('/', function (req, res) {
   res.render('index.njk', {title:"yezz",hello:countries[0].name});
})

var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})
