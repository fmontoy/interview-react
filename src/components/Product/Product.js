import React from 'react';
import classes from './Product.css';
import thumbnail from '../../assets/images/thumbnail.png'
import {Link} from 'react-router-dom';
import Details from '../Details/Details';

//Un Card para mostrar cada producto
const product = (props) =>(
    <div className={classes.Card}>
        <h1>{props.product.name}</h1>
        <hr></hr>
        <img src={thumbnail} alt=""></img>
        <p>ID: {props.product.id}</p>
        <Details product={props.product}/>
        <Link to={"/product/" + props.product.id} className={classes.Link}>
            <button>Ver Detalle</button>
        </Link>    
    </div>
)
export default product;