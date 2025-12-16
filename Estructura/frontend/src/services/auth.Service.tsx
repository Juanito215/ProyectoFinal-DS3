import api from '../api';

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
