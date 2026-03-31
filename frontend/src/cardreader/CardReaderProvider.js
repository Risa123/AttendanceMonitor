import {createContext} from "react"


const CardReaderContext = createContext()


export function CareaderProvider(props) {
    const value = {}
    return <CardReaderContext.Provider value = {value}>{props.children}</CardReaderContext.Provider>
}

export default CardReaderContext