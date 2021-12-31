import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import InputTC from './InputTC';
import SelectCinsiyet from './SelectCinsiyet';
import DatePicker from './DatePicker';
import SosyalDurum from './SosyalDurum';
import Etiket from './Etiket';
import AlanKodu from './AlanKodu';
import TelNo from './TelNo';
import SelectUyruk from './SelectUyruk';
import SelectMeslek from './SelectMeslek';
import Ad from './Ad';
import Soyad from './Soyad';
import LightboxHeader from './LightboxHeader';
import Kayit from './Kayit';

import { addUser } from '../../Redux/userSlice';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import WcIcon from '@mui/icons-material/Wc';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Divider } from '@mui/material';

import { useDispatch } from 'react-redux';




const style = {
   position: 'absolute',
   top: '25%',
   left: '50%',
   transform: 'translate(-50%, -25%)',
   bgcolor: 'background.paper',
   borderRadius: 5,
   boxShadow: 24,
   p: 4,

};

const Lightbox = ({ open, setOpen }) => {

   const [uyruk, setUyruk] = useState('');
   const [tcno, setTcno] = useState('');
   const [name, setName] = useState('');
   const [surname, setSurname] = useState('');
   const [gender, setGender] = useState('');
   const [date, setDate] = useState(new Date('2021-12-18T21:11:54'));
   const [job, setJob] = useState('');
   const [social, setSocial] = useState('');
   const [alanNum, setAlanNum] = useState('')
   const [num, setNum] = useState('')
   const [etiket, setEtiket] = React.useState('');

   const dispatch = useDispatch();
   const addUserHandler = (e) => {
      e.preventDefault()
      dispatch(addUser({ uyruk, name, surname, gender, date, job, social, alanNum, num, etiket, id: tcno }))
      setOpen(false)
   }

   return (
      <div className="lightbox">

         <Modal

            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >

            <Box sx={style}>
               <LightboxHeader />

               <div className='mb-4 myCol '>
                  <div className='IconPhone'><AddAPhotoIcon /></div>
                  <div className="my_container customBorderRadius">
                     <SelectUyruk uyruk={uyruk} setUyruk={setUyruk} />
                     <InputTC tcno={tcno} setTcno={setTcno} />
                  </div>

               </div>

               <div className='mb-4 myCol'>
                  <div className="icon_container"><FingerprintIcon /></div>
                  <div className="my_container customBorderRadius">
                     <Ad name={name} setName={setName} />
                     <Soyad surname={surname} setSurname={setSurname} />
                  </div>
               </div>

               <div className='mb-4 myCol'>
                  <div className="icon_container"><WcIcon /></div>
                  <div className="my_container">
                     <SelectCinsiyet gender={gender} setGender={setGender} />
                     <div className="datePicker">
                        <DatePicker date={date} setDate={setDate} />
                     </div>
                  </div>
               </div>

               <div className='mb-4 myCol'>
                  <div className="icon_container"><EngineeringIcon /></div>
                  <div className="my_container">
                     <SelectMeslek job={job} setJob={setJob} />
                     <SosyalDurum social={social} setSocial={setSocial} />
                  </div>
               </div>

               <div className='mb-4 myCol'>
                  <div className="icon_container"><LocalPhoneIcon /></div>
                  <div className="my_container customBorderRadius">
                     <AlanKodu alanNum={alanNum} setAlanNum={setAlanNum} />
                     <TelNo num={num} setNum={setNum} />
                     <Etiket etiket={etiket} setEtiket={setEtiket} />
                  </div>
               </div>
               <Divider />
               <Kayit addUserHandler={addUserHandler} />
            </Box>
         </Modal>
      </div>
   )
}

export default Lightbox
