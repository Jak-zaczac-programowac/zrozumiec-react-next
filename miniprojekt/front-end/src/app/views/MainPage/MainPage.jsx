import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";

async function MainPage({ gender }) {
    const paramMapping = {
        mezczyzna: "men",
        kobieta: "women",
        dziecko: "children",
    };

    const data = await fetch(
        `http://localhost:3000/${paramMapping[gender]}`
    ).then((res) => res.json());

    console.log(data);

    return (
        <>
            <Hero heroImage={data.heroImageUrl} />
            <Bestsellers products={data.bestsellers} />
        </>
    );
}

export { MainPage };
