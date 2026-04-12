import {useContext, useEffect, useState} from "react"
import Table from "react-bootstrap/Table"
import AttendanceLogContext from "./AttendanceLogProvider"

export default function AttendanceLog() {
    const [components, setComponents] = useState([])
    const AttendanceLogProvider = useContext(AttendanceLogContext)
    const data = AttendanceLogProvider.list()
    useEffect(() => {
      data.then(data => {
         components.length = 0 //empty the list
         for (const log of data) {
            components.push(<tr>
                   <th>{log.user}</th>
                   <th>{log.time}</th>
                   <th>{log.cardReader}</th>
               </tr>)
          }
          setComponents(components)
       })
    },[AttendanceLogProvider, components, data])
    return <Table>
       <thead>
          <tr>
             <th>Name</th>
             <th>Time</th>
             <th>Card Reader</th>
          </tr>
       </thead>
       <tbody>
        {components}
       </tbody>
    </Table>
}