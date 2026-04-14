import { useContext, useEffect, useState } from "react"
import ListGroupItem from "react-bootstrap/esm/ListGroupItem"
import ListGroup from "react-bootstrap/ListGroup"

import CardReaderContext from "./CardReaderProvider"

export default function CardReader(){
    const [list, setList] = useState([])
    const CardReaderProvider = useContext(CardReaderContext)
    useEffect(() => {
        CardReaderProvider.list().then(cardReaders => {
        list.length = 0 // clear list
        for (const cardReader of cardReaders) {
            list.push(<ListGroupItem>{cardReader.name}</ListGroupItem>)
        }
        setList(list)
    })},[CardReaderProvider, list])
    return <ListGroup>{list}</ListGroup>
}