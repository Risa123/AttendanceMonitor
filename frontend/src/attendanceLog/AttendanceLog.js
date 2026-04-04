import {useContext} from "react"
import Table from "react-bootstrap/Table"

import AttendanceLogProvider from "./AttendanceLogProvider"

export default function AttendanceLog() {
    const components = []
    components.push( <tr>
      <th>Richard Horák</th>
      <th>1.1.2026 11:00</th>
      <th>Main Entrace</th>
    </tr>)
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