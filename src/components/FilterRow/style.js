import styled from 'styled-components'

export const FilterRowContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
    .search-and-mode {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 20px;
        .mode {
            display: flex;
            align-items: center;
            border-radius: 4px;
            border: 1px solid #2A409C;
            height: 36px;
            width: 120px;
            svg {
                width: 100%;
                height: 100%;
                border-radius: 2px;
                cursor: pointer;
            }
            .divider {
                width: 1px;
                min-width: 1px !important;
                height: 36px;
                background-color: black;
            }
        }
    }
`
