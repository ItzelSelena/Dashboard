import React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Tag = () => {
  // Supongamos que top100Films podría ser undefined
  const topSearchTpsa = getTopSearchTpsa(); // Función que obtiene los datos, podrías implementarla según tus necesidades

  if (!topSearchTpsa || !Array.isArray(topSearchTpsa)) {
    // Manejar la situación donde topSearchTpsa no está definido o no es un array
    return <div>Error: Datos no disponibles.</div>;
  }

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={topSearchTpsa}
        getOptionLabel={(option) => option?.title || ''}
        defaultValue={[topSearchTpsa[13]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Filtro Tpsa"
          />
        )}
      />
      {/* Resto del código ... */}
    </Stack>
  );
};

export default Tag;

// Función de ejemplo que podría obtener los datos
function getTopSearchTpsa() {
  return [
    { title: 'Año', year: 2024 },
    { title: '2023', year: 2024 },
    { title: '2024', year: 2024 },
    { title: 'Trimestre', year: 1972 },
    { title: '1Q', year: 2024 },
    { title: 'Mes', year: 1972 },
    { title: 'Semana', year: 1972 },
    { title: 'Día', year: 1972 },
    { title: 'Producto', year: 1972 },
    { title: 'Agencia', year: 1972 },
    { title: 'Gerente', year: 1972 },
    { title: 'Sitio', year: 1972 },
  ];
}
