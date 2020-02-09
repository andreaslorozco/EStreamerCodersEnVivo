const { Router } = require('express');
const axios = require('axios').default;

const { CLIENT_ID } = process.env;

const router = Router();

const { filterResults } = require('./utils');

router.get('/', async (req, res) => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://api.twitch.tv/helix/streams?language=es&game_id=509670',
      headers: {
        'Client-ID': CLIENT_ID,
      },
    });
    const filteredResults = filterResults( response.data.data);
    res.json({
      data: filteredResults,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;