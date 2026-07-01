import express from 'express'
const app = express();

import generateRandomString from '../lib/generateRandomString.js'
import urlModel from '../models/url.model.js'



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render("index", {
    shortUrl: null,
  });
});


app.post('/', async (req, res) => {

  
  let originalUrl = req.body.originalUrl;
  const shortUrl = generateRandomString(5);

  const newUrl = await urlModel.create({
    originalUrl,
    shortUrl,
  });



  res.render("index", {
    shortUrl: `${process.env.baseUrl}/${shortUrl}`,
  });

});

app.get('/:shortUrl', async (req, res) => { 

  const shortUrl = req.params.shortUrl;
  const url = await urlModel.findOne({
    shortUrl
  });
  if (!url) {
    return res.status(404).json({ message: 'URL not found' });
  }
  res.redirect(url.originalUrl);
});

export default app;