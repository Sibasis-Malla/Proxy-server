const express = require('express');
const request = require('request');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/data/:tweetId', async(req, res) => {
    const { tweetId } = req.params;
    console.log(tweetId)
   await axios
    .get(
      `https://publish.twitter.com/oembed?url=https://twitter.com/Interior/status/${tweetId}&theme=dark&omit_script=1`
 ).then((response)=>{
        // console.log("worked");
        // console.log(response.data.streamKey)
        //console.log(response)
       res.json(response.data);
    }).catch( error => {
        console.error(`Could not get products: ${error}`);
        res.json(error)
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
//app.listen(8080);