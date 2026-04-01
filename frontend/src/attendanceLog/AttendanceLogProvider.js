import  { useState, createContext } from "react"

const AttendanceLogContext = createContext()

export function AttendanceLogProvider(props) {
    const [attendanceLog] = useState([{
        name:"Richard Horák",
        time:new Date(),
        cardReader:"main entrance"
    }])
    const value = {
        getAttendanceLog:() => attendanceLog
    }
    return <AttendanceLogContext.Provider value = {value}>{props.children}</AttendanceLogContext.Provider>
}

export default AttendanceLogContext