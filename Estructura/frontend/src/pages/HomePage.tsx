import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const hairstyles = [
    { id: 1, title: 'Fade Clásico', image: '/images/hairstyles/fade_clasico.jpeg' },
    { id: 2, title: 'Undercut Moderno', image: '/images/hairstyles/undercut-moderno.jpeg' },
    { id: 3, title: 'Pompadour', image: '/images/hairstyles/pompadour.jpeg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left: Large hero copy like the screenshot */}
          <div className="py-8">
            <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight text-gray-800 leading-tight">
              BarberBook
            </h1>
            <h2 className="mt-4 text-2xl text-gray-600">Reserva tu corte perfecto</h2>
            <p className="mt-6 text-base text-gray-600 max-w-2xl">
              Conecta con los mejores barberos de tu ciudad. Reserva de forma fácil y rápida.
            </p>

            <div className="mt-8 flex gap-4">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md shadow"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-md text-gray-800 bg-white"
                  >
                    Registrarse
                  </Link>
                </>
              ) : (
                <Link to="/barbers" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md shadow">
                  Ver Barberos
                </Link>
              )}
            </div>
          </div>

          {/* Right: stack of three bubbles positioned to the far right */}
          <div className="relative w-full h-96 flex items-center justify-end">
            {/* Big left bubble (kept more to the left so it doesn't overlap others) */}
            <div
              className="bubble bubble-accent absolute"
              style={{
                width: 340,
                height: 380,
                top: 12,
                right: 220,
                zIndex: 10,
                clipPath:
                  'polygon(30% 0%, 100% 10%, 95% 45%, 85% 80%, 55% 100%, 20% 90%, 0% 60%, 5% 20%)',
              }}
            >
              <img src={hairstyles[1].image} alt={hairstyles[1].title} />
              <div className="bubble-caption">{hairstyles[1].title}</div>
            </div>

            {/* Right column: two stacked bubbles that do NOT overlap the big bubble */}
            <div style={{ position: 'absolute', right: -12, top: 0, zIndex: 20, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
              <div
                className="bubble bubble-accent"
                style={{
                  width: 220,
                  height: 260,
                  clipPath:
                    'polygon(30% 0%, 100% 10%, 95% 45%, 85% 80%, 55% 100%, 20% 90%, 0% 60%, 5% 20%)',
                }}
              >
                <img src={hairstyles[0].image} alt={hairstyles[0].title} />
                <div className="bubble-caption">{hairstyles[0].title}</div>
              </div>

              <div
                className="bubble bubble-accent"
                style={{
                  width: 230,
                  height: 260,
                  clipPath:
                    'polygon(30% 0%, 100% 10%, 95% 45%, 85% 80%, 55% 100%, 20% 90%, 0% 60%, 5% 20%)',
                }}
              >
                <img src={hairstyles[2].image} alt={hairstyles[2].title} />
                <div className="bubble-caption">{hairstyles[2].title}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider like in screenshot */}
        <div className="w-full mt-12 border-t border-gray-300" />
      </div>

      {/* Features Section kept simple below */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-12">¿Por qué BarberBook?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="1.5"><path d="M9 12h6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Mejores Barberos</h3>
              <p className="text-gray-600">Selecciona entre barberos profesionales y experimentados</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/></svg>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Reservas Fáciles</h3>
              <p className="text-gray-600">Agenda tu cita en segundos desde cualquier dispositivo</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="1.5"><circle cx="12" cy="8" r="3"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/></svg>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Comunidad Confiable</h3>
              <p className="text-gray-600">Lee reseñas y conecta con clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dark CTA Section like screenshot */}
      <div className="cta-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">Tu siguiente corte está a un clic de distancia</h3>
          <p className="text-gray-300 mb-8">Únete a cientos de clientes satisfechos</p>
          <Link to="/register" className="cta-button inline-flex items-center gap-2">
            Crear Cuenta Gratis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
