import axios from "axios";

const BASE_URI = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'd0b237a991mshbd37e05277a5893p142bbfjsn1f4cdcc64027',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const ApiService = {
  async fechting(url) {
    const response  = await axios.get(`${BASE_URI}/${url}`, options)
    return response.data
  },
};
