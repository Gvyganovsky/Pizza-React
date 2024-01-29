import Product from '../Product';
import styles from './Catalog.module.scss';

const Catalog = () => {
    return (
        <section className={styles.catalog}>
            <div className={styles.catalog__header}>
                <ul className={styles.catalog__list}>
                    <li className={styles.catalog__item}>
                        Все
                    </li>
                    <li className={styles.catalog__item}>
                        Мясные
                    </li>
                    <li className={styles.catalog__item}>
                        Вегетарианская
                    </li>
                    <li className={styles.catalog__item}>
                        Гриль
                    </li>
                    <li className={styles.catalog__item}>
                        Острые
                    </li>
                    <li className={styles.catalog__item}>
                        Закрытые
                    </li>
                </ul>
                <div className={styles.search}>
                    <p className={styles.search__text}>
                        Сортировка по:
                    </p>
                    <select title='category' className={styles.search__select}>
                        <option className={styles.search__option}>
                            популярности
                        </option>
                        <option className={styles.search__option}>
                            по цене
                        </option>
                        <option className={styles.search__option}>
                            по алфавиту
                        </option>
                    </select>
                </div>
            </div>
            <h2 className={styles.catalog__title}>
                Все пиццы
            </h2>
            <ul className={styles.product__list}>
                <Product />
            </ul>
        </section>
        // <h2>
        //     Корзина пустая 
        // </h2>
        // <p>
        //     Вероятней всего, вы не заказывали ещё пиццу. 
        //     Для того, чтобы заказать пиццу, перейди на главную страницу.
        // </p>
        // <img 
        // src="" 
        // alt="" 



        // />
        // <button>Вернуться назад</button>
    )
}

export default Catalog