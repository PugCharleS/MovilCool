import React, { useState, useEffect, useContext } from 'react'
import ItemList from "./ItemList/ItemList";
import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { FilterContext } from "../../../Context/FilterContext";
import { ProductContext } from "../../../Context/ProductContext";

//Styles
import './ItemListContainer.css';

const ItemListContainer = () => {
  const { marca } = useContext(FilterContext);
  const { getFetch } = useContext(ProductContext);
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (marca) ?
      getFetch
        .then(result => setProductos(result.filter(producto => producto.categoria === id && producto.marca === marca)))
        .catch(err => err)
      :
      getFetch
        .then(result => setProductos(result.filter(producto => producto.categoria === id)))
        .catch(err => err)
  }, [id, marca]);

  return (
    <div className='main-container' id='main-container'>
      <SideBar id={id} productos={productos}/>
      {
        (productos.length !== 0) ?
          <ItemList productos={productos} />
          :
          <h1 className='item-list'>No hay productos con esta categor&iacute;a</h1>
      }
    </div>
  )
}

export default ItemListContainer;