const express = require('express');
const request = require('request');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

app.get(`/api/:url`, async(req, res) => {
    const { url } = req.params;
    //console.log(Id)
   await axios
    .get(
      `https://api.websitecarbon.com/site?url=${url}`
 ).then((response)=>{
        // console.log("worked");
        // console.log(response.data.streamKey)
        //console.log(response.data)
        const data = response.data;
        //const res2 = JSON.parse(response.data)
        res.send(JSON.stringify(data))
       
    }).catch( error => {
        console.error(`Could not get products: ${error}`);
        res.json(error)
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
//app.listen(8080);