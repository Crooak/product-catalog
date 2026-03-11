import { useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, product }) {
  // Закрытие по клавише Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Если модалка закрыта или нет товара, не рендерим
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={product.image} alt={product.title} className="modal-image" />
        <h2>{product.title}</h2>
        <p className="modal-price">{product.price} ₽</p>
        <p className="modal-description">{product.description}</p>
        <p>Категория: {product.category}</p>
        <button className="buy-button">Купить</button>
      </div>
    </div>
  );
}

export default Modal;