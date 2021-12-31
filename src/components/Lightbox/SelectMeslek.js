
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { meslekler } from './data.js'
function SelectMeslek({ job, setJob }) {


   const handleChange = (event) => {
      setJob(event.target.value);
   };

   return (

      <FormControl sx={{ m: 0, minWidth: 250 }}>
         <InputLabel id="demo-simple-select-helper-label">Meslek</InputLabel>
         <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={job}
            label="Meslek"
            onChange={handleChange}
            sx={{ borderRadius: '20px' }}
         >
            {meslekler.map((name) => (
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
export default SelectMeslek