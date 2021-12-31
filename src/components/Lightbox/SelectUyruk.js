
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { uyruklar } from './data'


function SelectUyruk({ uyruk, setUyruk }) {


   const handleChange = (e) => {
      setUyruk(e.target.value)
   };


   return (

      <FormControl sx={{ m: 0, minWidth: 250 }}>
         <InputLabel id="demo-simple-select-helper-label">Uyruk</InputLabel>
         <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helperr"
            value={uyruk}
            label="Uyruk"
            onChange={handleChange}
            sx={{ borderRadius: '20px' }}
         >
            {uyruklar.map((name) => (
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
export default SelectUyruk
