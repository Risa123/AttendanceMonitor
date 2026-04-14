import  { createContext } from "react"
import { get } from "../requestCommon"

const AttendanceLogContext = createContext()

export function AttendanceLogProvider(props) {
    const value = {
        list: async () =>  await get("attendanceLog/list")
    }
    return <AttendanceLogContext.Provider value = {value}>{props.children}</AttendanceLogContext.Provider>
}

export default AttendanceLogContext