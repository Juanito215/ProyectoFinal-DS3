import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const appointmentService = {
  create: (appointment: any) =>
    axios.post(`${API_URL}/api/appointments`, appointment),
};