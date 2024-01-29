import styles from './Product.module.scss';

const Product = (props: any) => {
  return (
    <li className={styles.product__item}>
      <img
        src='./Asian-style Shrimp.png'
        alt="Пицца"
        width={260}
        height={260}
        className={styles.product__img}
      />
      <h3 className={styles.product__title}>
        {props.title}
      </h3>
      <ul className={styles.designer}>
        <li className={styles.designer__item}>
          тонкое
        </li>
        <li className={styles.designer__item}>
          традиционное
        </li>
        <li className={styles.designer__item}>
          26 см.
        </li>
        <li className={styles.designer__item}>
          30 см.
        </li>
        <li className={styles.designer__item}>
          40 см.
        </li>
      </ul>
      <div className={styles.orderBlock}>
        <p className={styles.price}>
          от 395 ₽
        </p>
        <button type='button' className={styles.orderBtn}>
          <img
            src='./plus.svg'
            alt="plus"
            width={12}
            height={12}
            className={styles.orderImg}
          />
          Добавить
          <p className={styles.orderCount}>
            2
          </p>
        </button>
      </div>
    </li>
  )
}

export default Product