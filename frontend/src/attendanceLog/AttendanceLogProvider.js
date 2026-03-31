import AttendanceLogContext from "react"

const AttendanceLogContext = createContext()

export function AttendanceLogProvider(props) {
    const value = {}
    return <AttendanceLogContext.Provider value = {value}>{props.children}</AttendanceLogContext.Provider>
}

export default AttendanceLogContext