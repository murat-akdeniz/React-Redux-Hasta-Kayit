import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function InputCinsiyet({ gender, setGender }) {


   const handleChange = (event) => {
      setGender(event.target.value);
   };

   return (

      <FormControl sx={{ m: 0, minWidth: 250 }}>
         <InputLabel id="demo-simple-select-helper-label">Cinsiyet</InputLabel>
         <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={gender}
            label="Cinsiyet"
            onChange={handleChange}
            sx={{ borderRadius: '20px' }}
         >
            <MenuItem value='Tanımsız'>Tanımsız</MenuItem>

            <MenuItem value='Erkek'>Erkek</MenuItem>
            <MenuItem value='Kadın'>Kadın</MenuItem>

         </Select>

      </FormControl>


   );
}
export default InputCinsiyet
