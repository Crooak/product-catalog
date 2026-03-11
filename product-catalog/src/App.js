import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="App">
      <h1>Каталог товаров</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;