import React from 'react'
import styled from 'styled-components'
import img from '../img/right.png'
import RefManualLink from './pageComponents/RefManualLink'

// CSS
const ReferenceManualContainer = styled.div`
    min-height: 85vh;
    width: 100%;
    background: url(${img}) center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

function ReferenceManual() {
    return (
        <ReferenceManualContainer>
            <RefManualLink />
            <RefManualLink />
            <RefManualLink />
            <RefManualLink />
        </ReferenceManualContainer>
    )
}

export default ReferenceManual
