import React,{Fragment} from 'react';

//Componente para mostrat los detalles del producto
const details = (props) =>(
    <Fragment>
        <p><b>Precio:</b> ${new Intl.NumberFormat('ar-ES',
                                         { maximumSignificantDigits: 3 })
                                            .format(props.product.price)}</p>
        <p><b>Marca:</b> {props.product.brand}</p>
        <p><b>Categoría: </b>{props.product.category}</p>
        <p><b>Dimensiones:</b> {props.product.dimension}</p>
        <p><b>Stock:</b> {props.product.stock}</p>
    </Fragment>
);

export default details;