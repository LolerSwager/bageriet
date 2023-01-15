import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHeader = styled.header`
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

export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <ul>
                    <Link>
                        <li>Forside</li>
                    </Link>
                    <Link>
                        <li>Produkter</li>
                    </Link>
                    <Link to="/">
                        <h1>bageriet</h1>
                    </Link>
                    <Link to="/kontact">
                        <li>Kontakt</li>
                    </Link>
                    <Link>
                        <li>Login</li>
                    </Link>
                </ul>
            </nav>
        </StyledHeader>
    )
}
