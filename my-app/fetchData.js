import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;
