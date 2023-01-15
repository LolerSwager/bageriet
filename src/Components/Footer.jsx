import styled from "styled-components"

const StyledFooter = styled.footer`
    background-color: #333333;
    text-align: center;
    padding: 2rem 0 0 0;
    h4 {
        color: #ffffff;
    }
    p {
        color: #727272;
        padding: 1.5rem;
    }
    .footer-Copyright {
        background-color: #252525;
        padding: 1rem;
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <h4>bageriet</h4>
            <p>
                Der er mange tilgænglige udgaver af Lorem ipsum, men de fleste udgaver har <br /> gennemgået
                forandringer
            </p>
            <p className="footer-Copyright">Copyright C 2017 bageriet aps</p>
        </StyledFooter>
    )
}
