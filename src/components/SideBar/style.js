import styled from 'styled-components'

export const SideBarContainer = styled.div`
    width: 120px;
    background: linear-gradient(110deg, #4E9C89, #4910CE);
    border-radius: 25px;
    box-shadow: 0px 0px 28px #4E9C8911, 0 -10px 20px -5px #4910CE22;
    z-index: 10;
    * {
        z-index: 10;
    } 
    nav {
        width: 100%;
        height: 100%;
        ul {
            width: 100%;
            height: 100%;
            display: flex;
            list-style: none;
            flex-direction: column;
            align-items: center;
            padding: 20px 0px;
            gap: 5px;
            .selected {
                box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
            }
            a {
                width: 90px;
                height: 90px;
                text-decoration: none;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                transition: 300ms;
                border-radius: 15px;
                span {
                    color: white;
                    text-transform: uppercase;
                    font-size: 1.4rem;
                }
                :hover {
                    background: linear-gradient(110deg, #4E9C89, #4910CE);
                    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
                    cursor: pointer;
                }
            }
        }
    }
`