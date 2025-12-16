import api from './api';

// ================= AUTH SERVICE =================
export const authService = {
  login: (email: string, password: string) =>
    api.post('/auth/api/users/login', {
      email,
      password,
    }),

  register: (userData: any) =>
    api.post('/auth/api/users', userData),

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

// ================= BARBER SERVICE =================
export const barberService = {
  getAllBarbers: () => api.get('/barberos'),
  getBarberById: (id: string) => api.get(`/barberos/${id}`),
  createBarber: (data: any) => api.post('/barberos', data),
  updateBarber: (id: string, data: any) => api.put(`/barberos/${id}`, data),
  deleteBarber: (id: string) => api.delete(`/barberos/${id}`),
};

// ================= APPOINTMENT SERVICE =================
export const appointmentService = {
  getAllAppointments: () => api.get('/appointment/api/appointments'),
  getAppointmentById: (id: string) =>
    api.get(`/appointment/api/appointments/${id}`),
  createAppointment: (data: any) =>
    api.post('/appointment/api/appointments', data),
  updateAppointment: (id: string, data: any) =>
    api.put(`/appointment/api/appointments/${id}`, data),
  deleteAppointment: (id: string) =>
    api.delete(`/appointment/api/appointments/${id}`),
};
