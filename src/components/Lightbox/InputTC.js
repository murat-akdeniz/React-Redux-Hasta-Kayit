import * as React from 'react';

import TextField from '@mui/material/TextField';

function InputTC({ tcno, setTcno }) {

   return (

      <TextField
         sx={{ width: 250 }}
         id="outlined-basic"
         label="Kimlik No"
         variant="outlined"
         value={tcno}
         onChange={(e) => setTcno(e.target.value)}
         onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
               event.preventDefault();
            }
            if (tcno.toString().length >= 11) {
               event.preventDefault();
            }
         }}

      />

   );
}
export default InputTC
