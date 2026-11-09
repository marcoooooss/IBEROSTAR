import React from 'react';

/**
 * Componente Etiqueta
 * Recibe la prop 'texto' y muestra un badge estilizado.
 */
export default function Etiqueta({ texto }) {
  // Paleta de colores dinámica según el tipo de etiqueta
  const obtenerEstiloPorTipo = (tipo) => {
    switch (tipo?.toLowerCase()) {
      case 'urgente':
        return { backgroundColor: '#ffebe9', color: '#cf222e', borderColor: '#ff8182' };
      case 'nuevo':
        return { backgroundColor: '#dafbe1', color: '#1a7f37', borderColor: '#4ac26b' };
      default:
        return { backgroundColor: '#ddf4ff', color: '#0969da', borderColor: '#54aeff' };
    }
  };

  const estiloConfigurado = obtenerEstiloPorTipo(texto);

  const styleBadge = {
    display: 'inline-block',
    padding: '4px 10px',
    fontSize: '0.75rem',
    fontWeight: '600',
    borderRadius: '12px',
    border: `1px solid ${estiloConfigurado.borderColor}`,
    backgroundColor: estiloConfigurado.backgroundColor,
    color: estiloConfigurado.color,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  return <span style={styleBadge}>{texto}</span>;
}