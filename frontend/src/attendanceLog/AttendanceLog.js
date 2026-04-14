import {useContext, useEffect, useState} from "react"
import Table from "react-bootstrap/Table"
import AttendanceLogContext from "./AttendanceLogProvider"
import CardReaderContext from "../cardreader/CardReaderProvider"
import UserContext from "../UserProvider"

export default function AttendanceLog() {
    const [components, setComponents] = useState([])
    const AttendanceLogProvider = useContext(AttendanceLogContext)
    const CardReaderProvider = useContext(CardReaderContext)
    const UserProvider = useContext(UserContext)
    useEffect(() => {
      AttendanceLogProvider.list().then(attendanceLog => {
         CardReaderProvider.list().then(cardReaders => {
            UserProvider.listAtendees().then(attendees => {
               components.length = 0 //empty the list
               for (const log of attendanceLog) {
                  let cardReader = null
                  for (const currentReader of cardReaders) {
                     if (log.cardReader === currentReader._id) {
                        cardReader = currentReader.name
                        break
                     }
                  }
                  let attendee = null
                  for (const currentAtendee of attendees) {
                     if (log.user === currentAtendee._id) {
                        attendee = currentAtendee.name
                        break
                     }
                  }
                  components.push(<tr>
                         <th>{attendee}</th>
                         <th>{log.time}</th>
                         <th>{cardReader}</th>
                     </tr>)
                }
                setComponents(components)
            })
         })
       })
    },[AttendanceLogProvider, components, CardReaderProvider, UserProvider])
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