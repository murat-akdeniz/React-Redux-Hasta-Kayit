import React from 'react'
import { Divider } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';



const LightboxHeader = () => {
   const style = {
      backgroundColor: 'green',
      color: '#fff',
      borderRadius: 25,

      padding: ' .5rem 1rem',
      textAlign: 'center'

   }
   return (
      <div className='col-12 mb-5'>
         <div className="baslik">

            <label><AppRegistrationIcon />Yeni Hasta Kaydı</label>
            <label>#PATI-0000000000014</label>
            <label style={style}>Yeni</label>

         </div>
         <Divider />
      </div>
   )
}

export default LightboxHeader
