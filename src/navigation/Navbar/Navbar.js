import React,{Component} from 'react';
import classes from './Navbar.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
class Navbar extends Component{

    render(){
        return(
            <nav className={classes.Navbar}>
            <Link className={classes.Brand} to="/products"><b>Wolox</b></Link>
            {this.props.location.pathname ==="/"?
            null:
            <div>
            <Link to="/" className={classes.Link  + ' ' + classes.Back}>
                Logout
            </Link>
            <Link to="/products" className={classes.Link}>Products</Link>
            </div>}

            </nav>
        );
    }
}

export default withRouter(Navbar);