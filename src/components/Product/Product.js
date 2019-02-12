import React from 'react';
import classes from './Product.css';
import thumbnail from '../../assets/images/thumbnail.png'
const product = (props) =>(
    <div className={classes.Card}>
        <h1>{props.product.name}</h1>
        <hr></hr>
        <img src={thumbnail}></img>
        <p>Precio: {new Intl.NumberFormat('ar-ES',
                                         { maximumSignificantDigits: 3 })
                                            .format(props.product.price)}</p>
        <p>Marca: {props.product.brand}</p>
        <p>Categoria: {props.product.category}</p>
        <p>Dimensiones:{props.product.dimension}</p>
        <p>Stock:{props.product.stock}</p>
    </div>
)
export default product;