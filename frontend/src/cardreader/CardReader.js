import { useContext } from "react"

import CardReaderContext  from "./CardReaderProvider"

export default function CardReader(){
    const list = []
    const CardReaderProvider = useContext(CardReaderContext)
    CardReaderProvider.list().then(cardReaders => {
        for (const cardReader of cardReaders) {
            list.push(cardReader.name)
        }
    })
    return <div>{list}</div>
}