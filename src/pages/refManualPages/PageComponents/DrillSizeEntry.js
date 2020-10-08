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
const TData3 = styled.td`
    background-color: #000;
`
function DrillSizeEntry(props) {
    return (
        <TRow>
            <TData1>{props.size0}</TData1>
            <TData2>{props.decEquiv0}</TData2>
            <TData3/>
            <TData1>{props.size1}</TData1>
            <TData2>{props.decEquiv1}</TData2>
            <TData3/>
            <TData1>{props.size2}</TData1>
            <TData2>{props.decEquiv2}</TData2>
            <TData3/>
            <TData1>{props.size3}</TData1>
            <TData2>{props.decEquiv3}</TData2>
        </TRow>
    )
}

export default DrillSizeEntry
