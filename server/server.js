const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '05626fa4f1db44f8b0c2ae13161e8d36',
        clientSecret: 'fcda5246046a48218e33b10c2780f7ae'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

app.listen(3001)