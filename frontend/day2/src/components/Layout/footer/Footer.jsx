import style from './Footer.module.css';
import { Text } from "../../UI/textAndTypography/Text";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <Text
                header="© YogaBalance 2024"
                type="bodyText"
                style={{ color: '#FFF' }}
            />
        </footer>
    );
};

