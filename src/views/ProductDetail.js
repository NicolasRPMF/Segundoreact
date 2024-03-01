// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const fetchProduct = async () => {
      try {
        const response = await fetch(`URL_DEL_API_O_DATOS/${id}`);
        const data = await response.json();
        
        setTimeout(() => {
          setProduct(data);
        }, 1000);
      } catch (error) {
        console.error('Error al obtener datos del producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      {/* Mostrar otros detalles del producto */}
    </div>
  );
};

export default ProductDetail;
