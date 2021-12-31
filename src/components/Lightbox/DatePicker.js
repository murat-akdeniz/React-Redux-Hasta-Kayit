import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import DesktopDatePicker from '@mui/lab/DesktopDatePicker';




function DatePicker({ date, setDate }) {


   const handleChange = (newValue) => {
      setDate(newValue);
   };


   return (
      <LocalizationProvider dateAdapter={AdapterDateFns} >
         <Stack spacing={2}>
            <DesktopDatePicker
               className='datePicker'
               label="Doğum Tarihi"
               inputFormat="MM/dd/yyyy"
               value={date}
               onChange={handleChange}
               renderInput={(params) => <TextField {...params} />}
            />

         </Stack>
      </LocalizationProvider>
   );
}
export default DatePicker
