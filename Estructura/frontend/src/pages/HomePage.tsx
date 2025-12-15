import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Scissors, Calendar, Users, ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const hairstyles = [
    {
      id: 1,
      title: 'Fade Clásico',
      image: '/images/hairstyles/fade_clasico.jpeg',
    },
    {
      id: 2,
      title: 'Undercut Moderno',
      image: '/images/hairstyles/undercut-moderno.jpeg',
    },
    {
      id: 3,
      title: 'Pompadour',
      image: '/images/hairstyles/pompadour.jpeg',
    },
  ];

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div>
            <h1 className="text-7xl md:text-8xl font-bold text-primary mb-6 leading-tight">
              BarberBook
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Reserva tu corte perfecto
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Conecta con los mejores barberos de tu ciudad. Reserva de forma fácil y rápida.
            </p>

            {!isAuthenticated && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent transition"
                >
                  Iniciar Sesión
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
                >
                  Registrarse
                </Link>
              </div>
            )}

            {isAuthenticated && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/barbers"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent transition"
                >
                  Ver Barberos
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/appointments"
                  className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
                >
                  Mis Citas
                </Link>
              </div>
            )}
          </div>

          {/* Burbujas con imágenes - lado derecho */}
          <div className="relative w-full h-96">
            {/* Mancha 1 - Superior derecha */}
            <div 
              className="absolute top-0 -right-10 w-52 h-56 overflow-hidden shadow-lg border-4 border-white hover:shadow-xl transition"
              style={{
                clipPath: 'polygon(20% 0%, 100% 10%, 95% 50%, 100% 90%, 50% 100%, 0% 85%, 5% 50%, 0% 10%)'
              }}
            >
              <img
                src={hairstyles[0].image}
                alt={hairstyles[0].title}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
              <div className="absolute bottom-4 left-0 right-0 bg-gradient-to-t from-primary to-transparent text-white p-3 text-center text-sm font-semibold">
                {hairstyles[0].title}
              </div>
            </div>

            {/* Mancha 2 - Centro (más grande) */}
            <div 
              className="absolute top-8 right-32 w-64 h-72 overflow-hidden shadow-xl border-4 border-secondary hover:shadow-2xl transition z-10"
              style={{
                clipPath: 'polygon(30% 5%, 95% 0%, 100% 35%, 85% 80%, 50% 100%, 15% 90%, 0% 50%, 5% 15%)'
              }}
            >
              <img
                src={hairstyles[1].image}
                alt={hairstyles[1].title}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
              <div className="absolute bottom-4 left-0 right-0 bg-gradient-to-t from-primary to-transparent text-white p-3 text-center text-sm font-semibold">
                {hairstyles[1].title}
              </div>
            </div>

            {/* Mancha 3 - Inferior derecha */}
            <div 
              className="absolute bottom-0 -right-10 w-52 h-56 overflow-hidden shadow-lg border-4 border-white hover:shadow-xl transition"
              style={{
                clipPath: 'polygon(15% 0%, 85% 5%, 100% 40%, 90% 100%, 30% 95%, 5% 75%, 0% 35%, 10% 5%)',
                transform: 'translateY(1cm)'
              }}
            >
              <img
                src={hairstyles[2].image}
                alt={hairstyles[2].title}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
              <div className="absolute bottom-4 left-0 right-0 bg-gradient-to-t from-primary to-transparent text-white p-3 text-center text-sm font-semibold">
                {hairstyles[2].title}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20 border-t-2 border-b-2 border-primary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            ¿Por qué BarberBook?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <Scissors className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Mejores Barberos</h3>
              <p className="text-gray-600">
                Selecciona entre barberos profesionales y experimentados
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <Calendar className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Reservas Fáciles</h3>
              <p className="text-gray-600">
                Agenda tu cita en segundos desde cualquier dispositivo
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Comunidad Confiable</h3>
              <p className="text-gray-600">
                Lee reseñas y conecta con clientes satisfechos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tu siguiente corte está a un clic de distancia
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Únete a cientos de clientes satisfechos
          </p>
          {!isAuthenticated && (
            <Link
              to="/register"
              className="inline-flex items-center bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Crear Cuenta Gratis
              <ArrowRight size={20} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
