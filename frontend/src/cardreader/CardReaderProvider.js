import {createContext} from "react"

import {get, post} from "../requestCommon"

const CardReaderContext = createContext()


export function CardReaderProvider(props) {
    const value = {
        list: async () => await get("cardReader/list"),
        add: async cardReader => await post("cardReader/add", cardReader)
    }
    return <CardReaderContext.Provider value = {value}>{props.children}</CardReaderContext.Provider>
}

export default CardReaderContext