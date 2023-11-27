import axios from 'axios';

export const fetchJoke = () =>
  axios
    .get(
      'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
      {
        withCredentials: false,
        headers: {
          accept: 'application/json',
          'X-RapidAPI-Key':
            '1e30d40eecmsh2f2865eed9ce282p1eeb5ejsncbdf450fe0c1',
          'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        },
      }
    )
    .then((res) => res.data);
