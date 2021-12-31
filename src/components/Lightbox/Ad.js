import { TextField } from '@mui/material'



const Ad = ({ name, setName }) => {


   return (
      <TextField label="Ad*" sx={{ width: 250 }}
         onChange={(e) => setName(e.target.value)}
         value={name}
      />
   )
}

export default Ad
