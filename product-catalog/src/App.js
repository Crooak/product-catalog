import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import Modal from './components/Modal'; // импорт модалки
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Состояния для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = () => {
      setTimeout(() => {
        const data = [
          {
            id: 1,
            title: "Смарт-часы X100",
            price: 7490,
            category: "Гаджеты",
            image: "https://via.placeholder.com/200?text=Watch",
            description: "Водонепроницаемые, GPS, 7‑дневный аккумулятор"
          },
          {
            id: 2,
            title: "Наушники SuperSound",
            price: 3500,
            category: "Аудио",
            image: "https://via.placeholder.com/200?text=Headphones",
            description: "Беспроводные, шумоподавление, 20ч работы"
          }
        ];
        setProducts(data);
        setLoading(false);
      }, 1000);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Функции для модалки
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="App">
      <h1>Каталог товаров</h1>
      <input
        type="text"
        placeholder="Поиск по названию..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', marginBottom: '16px', width: '300px' }}
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
            category={product.category}
            onCardClick={openModal}  // передаём функцию открытия
          />
        ))}
      </div>

      {/* Модальное окно */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
}

export default App;