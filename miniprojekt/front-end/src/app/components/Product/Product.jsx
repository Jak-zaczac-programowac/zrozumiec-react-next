"use client";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";
import styles from "./Product.module.css";
import Image from "next/image";

function Product({ product }) {
    const [currency] = useContext(CurrencyContext);
    return (
        <>
            <div className={styles.productCard}>
                <Image src={product.images[0]} width={250} height={250} />

                <button>
                    <div className={styles.favourite}></div>
                </button>

                <div>
                    <p className={styles.name}>{product.name}</p>
                    <p className={styles.productPrice}>
                        {currency === CURRENCIES.PLN
                            ? product.pricePLN
                            : product.priceUSD}{" "}
                        {currency === CURRENCIES.PLN
                            ? CURRENCY_SIGN.PLN
                            : CURRENCY_SIGN.USD}
                    </p>
                </div>
            </div>
        </>
    );
}

export { Product };
