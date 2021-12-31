import React from 'react'
import { Button } from '@mui/material'

const Kayit = ({ addUserHandler }) => {
   const styleKaydet = {
      backgroundColor: '#577BC1',
      color: '#fff',
      borderRadius: 20,
      padding: '.5rem 1rem',
      " &: hover": {
         background: 'green'
      }

   }
   const styleIptal = {
      border: '2px solid #577BC1',
      color: '#577BC1',
      borderRadius: 20,
      padding: '.5rem 1rem',
      marginRight: '1rem'
   }
   return (
      <div className='kayit'>
         <Button sx={styleIptal}>İptal</Button>
         <Button
            sx={styleKaydet}
            onClick={addUserHandler}
         >
            Kaydet
         </Button>

      </div>
   )
}

export default Kayit
