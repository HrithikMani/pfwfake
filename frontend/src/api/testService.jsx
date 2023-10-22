

const BASE_URL = 'http://localhost:3000';

const ApiService = {
  async fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
};

export default ApiService;
