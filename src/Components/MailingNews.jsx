import styled from "styled-components"
import newsletterbg from "../Assets/images/newsletterbg.jpg"

const StyledMail = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0 6rem 0;
    background-image: url(${newsletterbg});
    background-repeat: no-repeat;
    background-position: 20%;
    background-size: cover;
    section {
        margin: 1.5rem;
        width: 900px;
        color: #ffffff;
    }

    .MailInput {
        display: flex;
        i {
            height: 40px;
            width: 40px;
            background-color: #bcc8d4;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
        }
        input {
            border: none;
            padding: 0 10px;
            width: 80%;
        }
        button {
            border: none;
            width: 140px;
            background-color: #607684;
            color: #ffffff;
        }
    }
`

export default function MailingNews() {
    return (
        <StyledMail>
            <section>
                <h2>Tilmeld dig vores nyhedsbrew</h2>
                <p>der er mange tilgængelige udgaver af lorem lipsum, men de fleste udgaver</p>
            </section>
            <section className="MailInput">
                <i class="fa-regular fa-envelope"></i>
                <input type="email" name="" id="" placeholder="indtast din email..." />
                <button>Tilmeld</button>
            </section>
        </StyledMail>
    )
}
