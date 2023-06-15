import "./ProductCard.css";

const ProductCard = (props) => {
  const openDetailsHandler = () => {
    props.open(props.id);
  };
  return (
    <div className="hoverItemContainer">
      <div className="hoverItemContentWrapper">
        <img className="hoverItemContentImage" src={props.image} alt="plug" />
        <div className="hoverItemContentInfo">
          <span className="hoverItemContentTags">{props.title}</span>
        </div>
        <div className="hoverItemContentTitle">
          <p className="hoverItemContentTitleText">{props.descriptions}</p>
        </div>
      </div>
      <div className="hoverItemReadMore" onClick={openDetailsHandler}>
        <span>READ MORE</span>
        <span>{`>>`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
