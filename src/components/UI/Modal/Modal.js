import React,{Fragment} from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props)=>(
    <Fragment>
        <Backdrop/>
        <div className={classes.Modal}>
            {props.children}
        </div>
    </Fragment>
);

export default modal;