import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/' className={styles.header__logoblock}>
                <img
                    src='./logo.svg'
                    alt='logo'
                    width={38}
                    height={38}
                    className={styles.header__logo}
                />
                <h1 className={styles.header__title}>REACT PIZZA</h1>
                <p className={styles.header__text}>Cамая вкусная пицца во вселенной</p>
            </Link>
            <Link to='/basket' className={styles.header__btn}>
                <span className={styles.line}>520 ₽</span>
                <img
                    src="./basket.svg"
                    alt="basket"
                    width={16}
                    height={16}
                    className={styles.header__basket}
                />
                3
            </Link>
        </header>
    )
}

export default Header