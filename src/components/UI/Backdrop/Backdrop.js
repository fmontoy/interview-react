import React from 'react';
import classes from './Backdrop.css';

//Permitir que el modal sea acompañado de un fondo oscuro
const backdrop = (props)=>(
    props.show ? <div className={classes.Backdrop}></div> : null
);

export default backdrop;