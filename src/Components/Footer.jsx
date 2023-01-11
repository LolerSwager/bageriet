import styled from "styled-components"

const StyledFooter = styled.footer`
    background-color: #333333;
    text-align: center;
    h4 {
        color: #ffffff;
    }
    p {
        color: #727272;
    }
    .footer-Copyright {
        background-color: #252525;
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
            <div className="footer-Copyright">
                <p>Copyright C 2017 bageriet aps</p>
            </div>
        </StyledFooter>
    )
}