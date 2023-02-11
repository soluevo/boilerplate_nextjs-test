import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    background-color: #29419F;
    padding: 10px;
    gap: 15px;
    position: relative;
`

export const ContentContainer = styled.div`
    width: fit-content;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
    flex-grow: 1;
    background-color: white;
    border-radius: 25px;
    padding: 5px;
    z-index: 10;
`