import React, {Component} from 'react';
import classes from './Products.css';
import Product from '../../components/Product/Product';
import axios from 'axios';
import Modal from '../../components/UI/Modal/Modal';

class Products extends Component{
    state={
        products:[],
        showModal:true
    }

    componentDidMount(){
        axios.get("http://localhost:3001/products")
              .then(response=>{
                let products = response.data.map(product=>{
                    product['category'] = 'Belleza';
                    product['dimension'] = '50cm x 20cm';
                    product['brand'] = 'Wolox';
                    product['stock'] = '10';
                    return product;
                });
                this.setState({products:products,showModal:false});
                
              })
              .catch(err=>{
                  console.log(err);
              });
    }

    render(){
        let products = this.state.products.map((product)=>{
            return <Product key={product.id} product={product}/>    
        })
        return(
            <div className={classes.Products}>
                <Modal show={this.state.showModal} 
                       title={"Espera"} 
                       msg={"Estamos cargando los productos"}/>
                {products}
            </div>
        )
    }
}

export default Products;