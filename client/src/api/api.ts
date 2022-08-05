import axios from 'axios';

const apiCall: Function = (number1: string, number2: string) => {
  return axios.get('/api/addNumbers', {
    params: { number1: number1, number2: number2 },
  });
};

export default apiCall;
