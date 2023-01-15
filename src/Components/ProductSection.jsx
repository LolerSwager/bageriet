import styled from "styled-components"
import { useGetList } from "../Hooks/useGetList"

const StyledNews = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    section {
        max-width: 900px;
        text-align: center;
        margin: 2rem;
        h2 {
            margin: 2rem;
        }
    }
    .imageRows {
        max-width: 900px;
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 1.5rem;
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 0 1rem 0;

            img {
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

            button {
                margin: 1rem 0 0 0;
                padding: 0.5rem;
                width: 200px;
                background-color: #ffffff;
                border: 1px solid black;
            }
        }
    }
`

export default function ProductSection() {
    const { state: Product } = useGetList("https://api.mediehuset.net/bakeonline/products")
    return (
        <StyledNews>
            <section>
                <h2>Nyeste bagværk</h2>
                <p>
                    der er mange tilgængelige udgaver af lorem lipsum, men de fleste udgaver har gennemgåer, nar noghet
                    har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud
                </p>
            </section>
            <section className="imageRows">
                {Product.slice(0, 8).map((item) => (
                    <div key={item.id}>
                        <img src={item.image.fullpath} alt={item.image.filename} />
                        <h4>{item.title}</h4>
                        <p>{item.teaser}</p>
                        <button>SE MERE</button>
                    </div>
                ))}
            </section>
        </StyledNews>
    )
}
