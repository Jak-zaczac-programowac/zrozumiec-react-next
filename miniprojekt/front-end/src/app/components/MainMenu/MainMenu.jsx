import styles from "./MainMenu.module.css";
import { GENDERS } from "../../constants/productCategories";

function MainMenu({ gender }) {
    return (
        <ul className={styles.menu}>
            {GENDERS.map(({ path, categoryName }) => (
                <li key={path}>
                    <a
                        className={`${styles.menuItem} ${
                            path === gender ? "active" : ""
                        }`}
                        href={`${path}`}
                    >
                        {categoryName}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export { MainMenu };
