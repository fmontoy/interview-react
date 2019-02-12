import React,{Fragment} from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import { presetToOptions } from 'webpack/lib/Stats';
const modal = (props)=>(
    <Fragment>
        <Backdrop show={props.show}/>
        <div className={classes.Modal}
            style={{
                    transform:props.show ?'translateY(0)' : 'translateY(-100vh)'
                   }}>
            <h1>{props.title}</h1>
            <hr></hr>
            <p><b>{props.msg}</b></p>
            {props.children}
        </div>
    </Fragment>
);

export default modal;