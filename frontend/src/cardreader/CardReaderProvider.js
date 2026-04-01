import {createContext, useState} from "react"


const CardReaderContext = createContext()


export function CardReaderProvider(props) {
    const [cardReaders, setCardReaders] = useState([])
    const value = {
        list:() => cardReaders,
        add:cardReader => {
            cardReaders.push(cardReader)
            setCardReaders(cardReader)
            return cardReaders
        }
    }
    return <CardReaderContext.Provider value = {value}>{props.children}</CardReaderContext.Provider>
}

export default CardReaderContext