import './ProductCard.css';

function ProductCard({ title, price, image, id, description, category, onCardClick }) {
  // Передаём весь объект товара при клике
  const handleClick = () => {
    onCardClick({ id, title, price, image, description, category });
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price} ₽</p>
    </div>
  );
}

export default ProductCard;