import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoblock}>
                <img src="./public/logo.svg" alt="logo" className={styles.logo} />
                <h1>REACT PIZZA</h1>
                <p>Cамая вкусная пицца во вселенной</p>
            </div>
            <button>
                <span>520 ₽</span>
                <img src="" alt="" />
                3
            </button>
        </header>
    )
}

export default Header