import React, {Component} from 'react';
import classes from './Products.css';
import Product from '../../components/Product/Product';
import axios from '../../axios';
import Modal from '../../components/UI/Modal/Modal';

class Products extends Component{
    state={
        products:[],
        modal:{
            show:true,
            title:'Espera',
            msg:'Estamos cargando los productos'
        }
    }

    //Obtener todos los productos del servidor
    componentDidMount(){
        axios.get("/products")
              .then(response=>{
                let products = response.data.map(product=>{
                    product['category'] = 'Belleza';
                    product['dimension'] = '50cm x 20cm';
                    product['brand'] = 'Wolox';
                    product['stock'] = '10';
                    return product;
                });
                const modal = {...this.state.modal}
                modal.show = false;
                this.setState({products:products,modal:modal});
                
              })
              .catch(err=>{
                  const modal = {...this.state.modal}
                  setTimeout(()=>{
                    modal.title = 'Lo sentimos';
                    modal.msg = 'Hay un problema con el servidor';
                  },4000)
                  modal.show = false;
                  this.setState({modal:modal});
              });
    }

    render(){
        let products = this.state.products.map((product)=>{
            return <Product key={product.id} product={product}/>    
        })
        return(
            <div className={classes.Products}>
                <Modal show={this.state.modal.show} 
                       title={this.state.modal.title} 
                       msg={this.state.modal.msg}/>
                {products}
            </div>
        )
    }
}

export default Products;