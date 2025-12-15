import React, { useState, useEffect } from 'react';
import { barberService } from '../services';
import { Star, MapPin, Phone } from 'lucide-react';

interface Barber {
  id: string;
  name: string;
  specialties: string[];
  rating: number;
  reviews: number;
  location?: string;
  phone?: string;
  image?: string;
}

export const BarbersPage: React.FC = () => {
  const [barbers, setBarbers] = useState<Barber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBarbers = async () => {
      try {
        const response = await barberService.getAllBarbers();
        setBarbers(response.data);
      } catch (error) {
        console.error('Error fetching barbers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBarbers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-primary">Cargando barberos...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-2">Nuestros Barberos</h1>
      <p className="text-gray-600 mb-12">Elige tu barbero favorito y agenda una cita</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {barbers.map((barber) => (
          <div
            key={barber.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {barber.image && (
              <img
                src={barber.image}
                alt={barber.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {barber.name}
              </h3>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(barber.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
                <span className="text-sm text-gray-600">
                  ({barber.reviews} reseñas)
                </span>
              </div>

              <div className="space-y-2 mb-4">
                {barber.specialties && barber.specialties.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray-700">Especialidades:</p>
                    <div className="flex flex-wrap gap-2">
                      {barber.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {barber.location && (
                <div className="flex items-center space-x-2 text-gray-600 text-sm mb-2">
                  <MapPin size={16} />
                  <span>{barber.location}</span>
                </div>
              )}

              {barber.phone && (
                <div className="flex items-center space-x-2 text-gray-600 text-sm mb-4">
                  <Phone size={16} />
                  <span>{barber.phone}</span>
                </div>
              )}

              <button className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-accent transition">
                Agendar Cita
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
