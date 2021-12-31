import React from 'react'
import { useSelector } from 'react-redux'



const TablePatient = () => {
   const patients = useSelector((state) => state.users.users);
   console.log('hastalar', patients)
   const patientTable = patients.map((patient) =>
      <tr>
         <td>{patient.name}</td>
         <td>{patient.surname}</td>
         <td>{patient.social}</td>
         <td>{`${patient.alanNum}-${patient.num}`}</td>
         <td>'ortam'</td>
      </tr>
   )

   return (
      <table className="my-table">
         <thead>
            <tr>
               <th>Hasta Adı</th>
               <th>Hasta Soyad</th>
               <th>Durum</th>
               <th>İletişim</th>
               <th>Ortam</th>

            </tr>
         </thead>
         <tbody>
            {patientTable}
         </tbody>
      </table>
   )




}

export default TablePatient