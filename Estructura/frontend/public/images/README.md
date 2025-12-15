# Carpeta de Imágenes

Esta carpeta contiene todos los archivos de imagen del proyecto BarberBook.

## Estructura

```
images/
├── hairstyles/        # Imágenes de estilos de corte
│   ├── fade-clasico.jpg
│   ├── undercut-moderno.jpg
│   └── pompadour.jpg
│
└── barbers/          # Imágenes de perfil de barberos
    ├── barber1.jpg
    ├── barber2.jpg
    └── barber3.jpg
```

## Cómo Usar

### Para las imágenes de estilos de cabello (hairstyles)

Las imágenes deben estar en la carpeta `hairstyles/` con los siguientes nombres:
- `fade-clasico.jpg`
- `undercut-moderno.jpg`
- `pompadour.jpg`

Se muestran en la página de inicio (HomePage).

### Para las imágenes de barberos

Las imágenes deben estar en la carpeta `barbers/` y pueden tener cualquier nombre. 
Se usan en la página de barberos (BarbersPage).

## Requisitos

- **Formato**: JPG, PNG, WebP
- **Tamaño máximo**: 500KB por imagen
- **Resolución recomendada**: 
  - Hairstyles: 400x400px (burbujas circulares)
  - Barbers: 400x300px (tarjetas)

## Ejemplo de uso en código

```tsx
// Para hairstyles
<img src="/images/hairstyles/fade-clasico.jpg" alt="Fade Clásico" />

// Para barbers
<img src="/images/barbers/barber1.jpg" alt="Nombre del Barbero" />
```

## Cómo acceder desde el frontend

En Vite, todas las imágenes en la carpeta `public/` se sirven desde la raíz del proyecto:

```
/images/hairstyles/fade-clasico.jpg  →  http://localhost:3001/images/hairstyles/fade-clasico.jpg
```
