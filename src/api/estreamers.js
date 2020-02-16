const { Router } = require('express');
const axios = require('axios').default;
const rateLimit = require('express-rate-limit');
const { filterResults } = require('./utils');

const router = Router();

const limiter = rateLimit({
  windowMs: 9 * 1000,
  max: 1, // limit each IP to 100 requests per windowMs
  message: 'Demasiados request, por favor intenta de nuevo luego.',
});

const { CLIENT_ID } = process.env;

router.get('/', limiter, async (req, res) => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://api.twitch.tv/helix/streams?language=es&game_id=509670',
      headers: {
        'Client-ID': CLIENT_ID,
      },
    });
    const filteredResults = filterResults(response.data.data);
    res.json({
      data: filteredResults,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
