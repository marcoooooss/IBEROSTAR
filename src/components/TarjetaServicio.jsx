import React from 'react';
import Etiqueta from './src/components/Etiqueta.jsx';

/**
 * Componente TarjetaServicio
 * Recibe por props: titulo, descripcion y tipoEtiqueta.
 */
export default function TarjetaServicio({ titulo, descripcion, tipoEtiqueta }) {
  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #e1e4e8',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '12px',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '1.25rem',
    color: '#1f2328',
    fontWeight: '600',
  };

  const descriptionStyle = {
    margin: 0,
    fontSize: '0.95rem',
    color: '#57606a',
    lineHeight: '1.5',
  };

  return (
    <article style={cardStyle}>
      <div style={{ width: '100%' }}>
        <h2 style={titleStyle}>{titulo}</h2>
        <p style={descriptionStyle}>{descripcion}</p>
      </div>
      <Etiqueta texto={tipoEtiqueta} />
    </article>
  );
}