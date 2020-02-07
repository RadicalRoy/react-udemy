import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID fd00e0f3a83f2e9ff3fb96f75650e5a3c521014584fb2fd96ab0a69b89b5e0c8'
  }
});
