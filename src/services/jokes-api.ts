import axios from 'axios';

export const fetchJoke = () =>
  axios
    .get(
      'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
      {
        withCredentials: false,
        headers: {
          accept: 'application/json',
          'X-RapidAPI-Key': 'xxxxxxxxxxxxxxxxxxx',
          'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        },
      }
    )
    .then((res) => res.data);
