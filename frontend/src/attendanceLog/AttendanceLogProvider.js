import  { createContext, useContext } from "react"
import { get } from "../requestCommon"

import  CardReaderContext  from  "../cardreader/CardReaderProvider"

const AttendanceLogContext = createContext()

export function AttendanceLogProvider(props) {
    const CardReaderProvider = useContext(CardReaderContext)
    const value = {
        list: async () => {
            const logs = await get("attendanceLog/list")
            const cardReaders = await CardReaderProvider.list()
            for (const log of logs) {
                for (const cardReader of cardReaders) {
                    if (cardReader.id === log.cardReader) {
                        log.cardReader = cardReader.name
                        break
                    }
                }
            }
            return logs
        }
    }
    return <AttendanceLogContext.Provider value = {value}>{props.children}</AttendanceLogContext.Provider>
}

export default AttendanceLogContext