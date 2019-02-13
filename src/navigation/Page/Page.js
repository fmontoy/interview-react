import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Login from '../../containers/Login/Login';
import Products from '../../containers/Products/Products';
import Navbar from '../../navigation/Navbar/Navbar';
import DetailProduct from '../../containers/DetailProduct/DetailProduct';
class Page extends Component{
    render(){
        return(
                <div >
                    <Navbar/>
                    <div >
                    <Route path="/" exact component = {Login}/>
                    <Route path="/products" exact component={Products}/>
                    <Route path="/product/:id" exact component={DetailProduct}/>
                    </div>
                </div>
        );
    }
}

export default Page;