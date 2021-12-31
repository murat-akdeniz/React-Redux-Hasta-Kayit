
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { sosyalDurum } from './data.js'

function SosyalDurum({ social, setSocial }) {


   const handleChange = (event) => {
      setSocial(event.target.value);
   };

   return (

      <FormControl sx={{ m: 0, minWidth: 250 }}>
         <InputLabel id="demo-simple-select-helper-label">Sosyal Durum</InputLabel>
         <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={social}
            label="Sosyal Durum"
            onChange={handleChange}
            sx={{ borderRadius: '20px' }}
         >
            {sosyalDurum.map((name) => (
               <MenuItem
                  key={name}
                  value={name}

               >
                  {name}
               </MenuItem>
            ))}

         </Select>

      </FormControl>


   );
}
export default SosyalDurum
