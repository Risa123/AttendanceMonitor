import  { createContext, useContext } from "react"

import { get } from "../requestCommon"
import UserContext from "../UserProvider"

const AttendanceLogContext = createContext()

export const LOG_PERIODS = [PERIOD_DAY, PERIOD_WEEK]

const PERIOD_WEEK = "week"
const PERIOD_DAY = "day"

export function AttendanceLogProvider(props) {
    const UserProvider = useContext(UserContext)
    const value = {
        list: async period => {
            const user = UserProvider.getUser()
            return user == null ? [] : await get("attendanceLog/list", user)
        }
    }
    return <AttendanceLogContext.Provider value = {value}>{props.children}</AttendanceLogContext.Provider>
}

export default AttendanceLogContext