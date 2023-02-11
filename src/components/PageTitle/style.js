import styled from 'styled-components'

export const PageTitleContainer = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    border-radius: 25px;
    background-color: lightblue;
    .icon-container {
        border-radius: 30px;
        width: 50px;
        height: 50px;
        border: 1px solid #2A409C;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            color: #2A409C;
            width: 80%;
            height: 80%;
        }
    }
    h1 {
        margin: 0;
        color: #2A409C;
        font-weight: bold;
    }
`