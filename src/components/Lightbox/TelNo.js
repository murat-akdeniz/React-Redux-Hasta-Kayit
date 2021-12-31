import React from 'react'
import TextField from '@mui/material/TextField';
const TelNo = ({ num, setNum }) => {


   return (
      <TextField
         sx={{ margin: '0 1rem', width: 300 }}

         id="outlined-basic"
         variant="outlined"
         label='Telefon*'
         value={num}
         onChange={(e) => setNum(e.target.value)}
         onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
               event.preventDefault();
            }
            if (num.toString().length === 7) {
               event.preventDefault();
            }
         }}
      />
   )
}

export default TelNo