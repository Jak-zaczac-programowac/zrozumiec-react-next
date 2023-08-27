"use client";
import { TopBar } from "../TopBar/TopBar";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { IconMenu } from "../IconMenu/IconMenu";
import { CategoriesMenu } from "../CategoriesMenu/CategoriesMenu";
import { Footer } from "../Footer/Footer";
import { MainContent } from "../MainContent/MainContent";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { useState } from "react";
import { CURRENCIES } from "../../constants/currencies";

function Layout({ children, gender }) {
    const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES.PLN);

    return (
        <>
            <CurrencyContext.Provider
                value={[selectedCurrency, setSelectedCurrency]}
            >
                <MainContent>
                    <TopBar>
                        <MainMenu gender={gender} />
                        <Logo />
                        <CurrencySelector />
                        <IconMenu />
                    </TopBar>
                    <CategoriesMenu />
                    {children}
                </MainContent>
            </CurrencyContext.Provider>
            <Footer />
        </>
    );
}

export { Layout };
