import api from './api';

// Auth Service
export const authService = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  register: (userData: any) =>
    api.post('/auth/register', userData),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

// Barber Service
export const barberService = {
  getAllBarbers: () => api.get('/barbers'),
  getBarberById: (id: string) => api.get(`/barbers/${id}`),
  createBarber: (data: any) => api.post('/barbers', data),
  updateBarber: (id: string, data: any) => api.put(`/barbers/${id}`, data),
  deleteBarber: (id: string) => api.delete(`/barbers/${id}`),
};

// Appointment Service
export const appointmentService = {
  getAllAppointments: () => api.get('/appointments'),
  getAppointmentById: (id: string) => api.get(`/appointments/${id}`),
  createAppointment: (data: any) => api.post('/appointments', data),
  updateAppointment: (id: string, data: any) => api.put(`/appointments/${id}`, data),
  deleteAppointment: (id: string) => api.delete(`/appointments/${id}`),
  getUserAppointments: (userId: string) => api.get(`/appointments/user/${userId}`),
};
