import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/dialogflow/detectIntent';

export const sendMessage = (sessionId: string, text: string) => {
  return axios.post(`${apiUrl}?sessionId=${sessionId}&text=${text}`, {});
};