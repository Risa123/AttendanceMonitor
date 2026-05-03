import  { createContext, useContext } from "react"

import { get } from "../requestCommon"
import UserContext from "../UserProvider"

const AttendanceLogContext = createContext()

export const PERIOD_FILTERS = {
    day: log => {
        const now = new Date()
        const ltime = new Date(log.time)
        return now.getFullYear() === ltime.getFullYear() && now.getMonth() === ltime.getMonth() && now.getDate() === ltime.getDate()
    },
    month: log => {
        const now = new Date()
        const ltime = new Date(log.time)
        return now.getFullYear() === ltime.getFullYear() && now.getMonth() === ltime.getMonth()
    }
}

export function AttendanceLogProvider(props) {
    const UserProvider = useContext(UserContext)
    const value = {
        list: async period => {
            const user = UserProvider.getUser()
            return user == null ? [] : (await get("attendanceLog/list", user)).filter(PERIOD_FILTERS[period])
        }
    }
    return <AttendanceLogContext.Provider value = {value}>{props.children}</AttendanceLogContext.Provider>
}

export default AttendanceLogContext