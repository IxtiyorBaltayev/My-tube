import axios from "axios";

const BASE_URI = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '58dbf58bedmsh2a485253b13ede2p19d342jsn65238bdec949',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const ApiService = {
  async fechting(url) {
    const response  = await axios.get(`${BASE_URI}/${url}`, options)
    return response.data
  },
};
