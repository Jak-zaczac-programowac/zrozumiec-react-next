"use client";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";

import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constants/currencies";

function CurrencySelector() {
    const [currency, setSelectedCurrency] = useContext(CurrencyContext);

    return (
        <select
            className={styles.currencySelector}
            value={currency}
            onChange={(e) => {
                setSelectedCurrency(e.target.value);
            }}
        >
            <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
            <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
        </select>
    );
}

export { CurrencySelector };
