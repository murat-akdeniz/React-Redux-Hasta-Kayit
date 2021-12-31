import React from 'react'
import TextField from '@mui/material/TextField';
const AlanKodu = ({ alanNum, setAlanNum }) => {


   return (
      <TextField
         sx={{ width: 100 }}
         id="outlined-basic"
         variant="outlined"
         label='Alan Kodu'
         value={alanNum}
         onChange={(e) => setAlanNum(e.target.value)}
         onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
               event.preventDefault();
            }
            if (alanNum.toString().length === 3) {
               event.preventDefault();
            }
         }}
      />
   )
}

export default AlanKodu
