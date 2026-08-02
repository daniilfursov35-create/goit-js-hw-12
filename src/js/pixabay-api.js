import axios from 'axios';

const API_KEY = '56960155-f278b569fbf053dc2c67faaf8';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`;
  
  const response = await axios.get(url);
  return response.data;
}