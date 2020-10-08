import React from 'react'
import styled from 'styled-components'

// CSS
const TRow = styled.tr`
    width: 100%;
`
const TData1 = styled.td`
    padding: 5px;
    background-color: #c4d0dc;
    color: #383838;
    font-size: 1.5vh;
    &&:hover {
        background-color: #da1622;
        color: #fcfbfc;
    }
`
const TData2 = styled.td`
    padding: 5px;
    background-color: #383838;
    color: #fcfbfc;
    font-size: 1.5vh;
    &&:hover {
        background-color: #da1622;
        color: #fcfbfc;
    }
`

function WrenchSizeEntry(props) {
    return (
        <TRow>
            <TData1>{props.boltDiam}</TData1>
            <TData2>{props.SAE}</TData2>
            <TData1>{props.metric}</TData1>
        </TRow>
    )
}

export default WrenchSizeEntry
