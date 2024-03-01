// ContainerComponent.js
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const ContainerComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('URL_DEL_API_O_DATOS');
        const data = await response.json();
       
        setTimeout(() => {
          setProducts(data);
        }, 1000);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return <ProductList products={products} />;
};

export default ContainerComponent;
