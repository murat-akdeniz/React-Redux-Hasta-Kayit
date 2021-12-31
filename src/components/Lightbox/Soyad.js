import { TextField } from '@mui/material'
import React from 'react'


const Soyad = ({ surname, setSurname }) => {


   return (
      <TextField label="Soyad*" sx={{ width: 250 }}
         onChange={(e) => setSurname(e.target.value)}
         value={surname}
      />
   )
}

export default Soyad
