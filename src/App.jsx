import React from 'react';
import TarjetaServicio from './src/components/TarjetaServicio.jsx';

/**
 * Componente Principal App
 * Renderiza la vista principal del Muro de Servicios IBEROSTAR.
 */
export default function App() {
  // Datos centralizados de servicios
  const serviciosData = [
    {
      id: 1,
      titulo: 'Diseño Web Responsive & UX/UI',
      descripcion:
        'Creación de interfaces web modernas y adaptables a cualquier dispositivo móvil o tablet.',
      tipoEtiqueta: 'Nuevo',
    },
    {
      id: 2,
      titulo: 'Desarrollo de Software a Medida',
      descripcion:
        'Programación de aplicaciones robustas y escalables ajustadas a las necesidades del negocio.',
      tipoEtiqueta: 'Urgente',
    },
    {
      id: 3,
      titulo: 'Optimización SEO y Mantenimiento Web',
      descripcion:
        'Mejora del posicionamiento en buscadores y soporte técnico continuo para garantizar alto rendimiento.',
      tipoEtiqueta: 'Popular',
    },
  ];

  const containerStyle = {
    maxWidth: '750px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '32px',
  };

  return (
    <main style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={{ color: '#0969da', fontSize: '2rem', marginBottom: '8px' }}>
          IBEROSTAR — Muro de Servicios
        </h1>
        <p style={{ color: '#57606a', fontSize: '1.05rem', margin: 0 }}>
          Páginas web y programación
        </p>
      </header>

      <section>
        {serviciosData.map((servicio) => (
          <TarjetaServicio
            key={servicio.id}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
            tipoEtiqueta={servicio.tipoEtiqueta}
          />
        ))}
      </section>
    </main>
  );
}