import styles from './Item.module.scss';

const Item = () => {
  return (
    <li className={styles.item}>
      <div className={styles.item__info}>
        <img
          src=""
          alt="Пицца"
          width={80}
          height={80}
          className={styles.item__img}
        />
        <h3 className={styles.item__title}>
          Сырный цыпленок
        </h3>
        <p className={styles.item__text}>
          тонкое тесто, 26 см.
        </p>
      </div>
      <div className={styles.item__count}>
        <img
          src='./Minus Сircle.svg'
          alt='Minus Сircle'
          width={32}
          height={32}
          className={styles.count__img}
        />
        <p className={styles.count__text}>
          2
        </p>
        <img
          src='./Plus Сircle.svg'
          alt='Plus Сircle'
          width={32}
          height={32}
          className={styles.count__img}
        />
      </div>
      <p className={styles.item__price}>
        770 ₽
      </p>
      <img
        src='./cross circle.svg'
        alt=''
        width={32}
        height={32}
        className={styles.item__delete}
      />
    </li>
  )
}

export default Item