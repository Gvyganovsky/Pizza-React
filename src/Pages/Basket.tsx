import Item from '../components/Item/Item';
import styles from '../App.module.scss';

const Basket = () => {
  return (
    <section className={styles.basket}>
      <div className={styles.basket__header}>
        <h2 className={styles.basket__title}>
          Корзина
        </h2>
        <p className={styles.basket__delete}>
          Очистить корзину
        </p>
      </div>
      <ul className={styles.basket__list}>
        <Item />
      </ul>
    </section>
  )
}

export default Basket