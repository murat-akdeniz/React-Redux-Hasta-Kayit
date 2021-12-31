import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250,
      },
   },
};



function getStyles(name, personName, theme) {
   return {
      fontWeight:
         personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
   };
}

function SelectList({ uyruklar, meslekler }) {
   let check = false;
   const theme = useTheme();
   const [listName, setListName] = React.useState([]);
   let store = [];
   if (uyruklar) {
      store = uyruklar
      check = true
   } else {
      store = meslekler
   }

   const handleChange = (event) => {
      setListName(event.target.value)

   };

   return (
      <div>
         <FormControl sx={{ m: 0, width: 250 }}>
            <InputLabel id="demo-multiple-name-label">{check ? 'Uyruk' : 'Meslek'}</InputLabel>
            <Select
               labelId="demo-multiple-name-label"
               id="demo-multiple-name"
               multiple
               value={listName}
               onChange={handleChange}
               input={<OutlinedInput label={check ? 'Uyruk' : 'Meslek'} />}
               MenuProps={MenuProps}
               sx={{ borderRadius: '20px' }}
            >
               {store.map((name) => (
                  <MenuItem
                     key={name}
                     value={name}
                     style={getStyles(name, listName, theme)}
                  >
                     {name}
                  </MenuItem>
               ))}

            </Select>
         </FormControl>
      </div>
   );
}
export default SelectList
