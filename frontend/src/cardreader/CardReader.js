import { useContext, useEffect, useState } from "react"

import CardReaderContext from "./CardReaderProvider"

export default function CardReader(){
    const [list, setList] = useState([])
    const CardReaderProvider = useContext(CardReaderContext)
    useEffect(() => {
        CardReaderProvider.list().then(cardReaders => {
        list.length = 0 // clear list
        for (const cardReader of cardReaders) {
            list.push(cardReader.name)
        }
        setList(list)
    })},[CardReaderProvider, list])
    return <div>{list}</div>
}