# BarberBook Frontend

Frontend moderno para la aplicación BarberBook, construido con React, TypeScript y Tailwind CSS.

## Características

- ✅ Autenticación de usuarios (Login/Register)
- ✅ Listado de barberos con calificaciones
- ✅ Sistema de citas
- ✅ Dashboard personalizado
- ✅ Diseño responsivo
- ✅ Interfaz moderna con Tailwind CSS

## Requisitos

- Node.js 16+
- npm o yarn

## Instalación

```bash
cd frontend
npm install
```

## Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Build para Producción

```bash
npm run build
```

## Estructura del Proyecto

```
frontend/
├── src/
│   ├── pages/           # Páginas de la aplicación
│   ├── components/      # Componentes reutilizables
│   ├── context/         # Context API para estado global
│   ├── services.ts      # Servicios API
│   ├── api.ts          # Configuración de axios
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── index.html          # HTML principal
├── package.json        # Dependencias
├── vite.config.ts      # Configuración de Vite
├── tailwind.config.js  # Configuración de Tailwind
└── tsconfig.json       # Configuración de TypeScript
```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```
VITE_API_URL=http://localhost:8080/api
```

## Notas

- El proyecto usa Vite como bundler para mejor performance
- Tailwind CSS para estilos
- React Router para navegación
- Axios para peticiones HTTP
- Context API para gestión de estado
