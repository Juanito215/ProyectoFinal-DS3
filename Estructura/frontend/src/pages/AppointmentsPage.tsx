import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { appointmentService } from '../services';
import { Calendar, Clock, User } from 'lucide-react';

interface Appointment {
  id: string;
  date: string;
  time: string;
  barberName: string;
  status: string;
}

export const AppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (user?.id) {
          const response = await appointmentService.getUserAppointments(user.id);
          setAppointments(response.data);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-primary">Cargando citas...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-12">Mis Citas</h1>

      {appointments.length === 0 ? (
        <div className="text-center py-12">
          <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 text-lg">No tienes citas agendadas</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="text-primary" />
                  <span className="text-lg font-medium">{appointment.barberName}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-primary" />
                  <span>{appointment.date}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary" />
                  <span>{appointment.time}</span>
                </div>
                <div className="pt-4 border-t">
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                      appointment.status === 'CONFIRMED'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {appointment.status === 'CONFIRMED' ? 'Confirmada' : 'Pendiente'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
