import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, LogOut } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-primary text-white shadow-lg border-b-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <span>BarberBook</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link to="/barbers" className="hover:text-secondary transition">
                  Barberos
                </Link>
                <Link to="/appointments" className="hover:text-secondary transition">
                  Mis Citas
                </Link>
                <span className="text-sm border-l border-gray-400 pl-6">{user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
                >
                  <LogOut size={18} />
                  <span>Salir</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-secondary transition">
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="bg-secondary text-primary px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {isAuthenticated ? (
              <>
                <Link to="/barbers" className="block py-2 hover:text-secondary transition">
                  Barberos
                </Link>
                <Link to="/appointments" className="block py-2 hover:text-secondary transition">
                  Mis Citas
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left py-2 px-4 bg-gray-700 rounded hover:bg-gray-600 transition"
                >
                  Salir
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2 hover:text-secondary transition">
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="block py-2 px-4 bg-secondary text-primary rounded font-semibold hover:bg-yellow-500 transition"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
