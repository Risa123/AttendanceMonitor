import Table from "react-bootstrap/Table"


export default function AttendanceLog({name,time,cardReader}) {
    return <Table>
       <thead>
          <tr>
             <th>Name</th>
             <th>Time</th>
             <th>Card Reader</th>
          </tr>
       </thead>
       <tbody>
         <tr>
           <th>{name}</th>
           <th>{time}</th>
           <th>{cardReader}</th>
         </tr>
       </tbody>
    </Table>
}