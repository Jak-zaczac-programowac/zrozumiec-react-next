import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import styles from "./Hero.module.css";
import Image from "next/image";

function Hero({ heroImage }) {
    return (
        <div className={styles.summerSaleCoverImage}>
            <Image height={500} width={1920} src={heroImage} />
            <div className={styles.heroContainer}>
                <div className={styles.summerSalePrompt}>
                    <div>
                        <h2>Letnie promocje do -70%!</h2>
                        <p>Tylko najlepsze okazje!</p>
                    </div>

                    <FullWidthButton type="green">
                        Sprawdź produkty
                    </FullWidthButton>
                </div>
            </div>
        </div>
    );
}

export { Hero };
