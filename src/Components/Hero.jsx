import styled from "styled-components"

const styledHero = styled.div`
    nav {
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1rem;
            gap: 1rem;
            list-style: none;
            h1 {
                margin: 0 1rem;
            }
        }
    }
`

export default function Hero() {
    return (
        <styledHero>
            <h1>somthing</h1>
        </styledHero>
    )
}