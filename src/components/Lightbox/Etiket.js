import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Etiket({ etiket, setEtiket }) {


   return (

      <FormControl sx={{ minWidth: 100 }}>
         <InputLabel id="demo-simple-select-helper-label">Etiket</InputLabel>
         <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={etiket}
            label="Etiket"
            onChange={(e) => setEtiket(e.target.value)}
            sx={{ borderRadius: '20px' }}
         >
            <MenuItem value='Etiket'>Etiket</MenuItem>

            <MenuItem value='Cep'>Cep</MenuItem>
            <MenuItem value='Ev'>Ev</MenuItem>

         </Select>

      </FormControl>


   );
}
export default Etiket