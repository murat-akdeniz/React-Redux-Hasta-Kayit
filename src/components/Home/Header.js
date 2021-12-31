import React from 'react'


import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import DensitySmallOutlinedIcon from '@mui/icons-material/DensitySmallOutlined';
import { Button } from '@mui/material';



const Header = ({ setOpen }) => {


   return (
      <div className='header'>
         <h2>Hasta Listesi</h2>
         <div className='header__right'>
            <AppsOutlinedIcon fontSize='large' />
            <DensitySmallOutlinedIcon fontSize='large' />
            <Button
               variant="contained"
               className='btn'
               onClick={() => setOpen(true)}>
               Yeni
            </Button>
         </div>
      </div>
   )
}

export default Header
