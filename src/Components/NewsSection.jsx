import styled from "styled-components"
import { useGetList } from "../Hooks/useGetList"

const StyledNews = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 6rem 0;
    section {
        max-width: 900px;
        text-align: center;
        margin: 2rem;
        h2 {
            margin: 2rem;
        }
    }
    .imageRow {
        max-width: 900px;
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 1.5rem;
        div {
            img {
                border-radius: 50%;
                width: 200px;
                height: 200px;
                object-fit: cover;
            }
            h4 {
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            p {
                height: 67px;
                overflow: hidden;
            }
        }
    }
`

export default function NewsSection() {
    const { state: News } = useGetList("https://api.mediehuset.net/bakeonline/news")
    return (
        <StyledNews>
            <section>
                <h2>vi skaber lækkert! brød</h2>
                <p>
                    der er mange tilgængelige udgaver af lorem lipsum, men de fleste udgaver har gennemgåer, nar noghet
                    har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud
                </p>
            </section>
            <section className="imageRow">
                {News.slice(0, 3).map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.image} />
                        <h4>{item.title}</h4>
                        <p>{item.teaser}</p>
                    </div>
                ))}
            </section>
        </StyledNews>
    )
}
