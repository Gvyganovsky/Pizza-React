import Product from '../Product/Product';
import styles from './Catalog.module.scss';

const Catalog = () => {
    return (
        <section>
            <ul>
                <li>
                    <button>
                        Все
                    </button>
                </li>
                <li>
                    <button>
                        Мясные
                    </button>
                </li>
                <li>
                    <button>
                        Вегетарианская
                    </button>
                </li>
                <li>
                    <button>
                        Гриль
                    </button>
                </li>
                <li>
                    <button>
                        Острые
                    </button>
                </li>
                <li>
                    <button>
                        Закрытые
                    </button>
                </li>
            </ul>
            <select >
                <option disabled>Сортировка по:</option>
                <option>популярности</option>
                <option>по цене</option>
                <option>по алфавиту</option>
            </select>
            <h2>Все пиццы</h2>
            <div>
                <Product />
            </div>
        </section>
    )
}

export default Catalog