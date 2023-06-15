import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  const openDetailsHandler = () => {
    props.open(props.id);
  };
  return (
    <div className={styles.hoverItemContainer}>
      <div className={styles.hoverItemContentWrapper}>
        <img
          className={styles.hoverItemContentImage}
          src={props.image}
          alt="plug"
        />
        <div className={styles.hoverItemContentInfo}>
          <span className={styles.hoverItemContentTags}>{props.title}</span>
        </div>
        <div className={styles.hoverItemContentTitle}>
          <p className={styles.hoverItemContentTitleText}>
            {props.descriptions}
          </p>
        </div>
      </div>
      <div className={styles.hoverItemReadMore} onClick={openDetailsHandler}>
        <span>READ MORE</span>
        <span>{`>>`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
