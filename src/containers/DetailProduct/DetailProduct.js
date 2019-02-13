import React,{Component} from 'react';
import axios from '../../axios';
import classes from './DetailProduct.css';
import thumbnail from '../../assets/images/thumbnail.png';
import Details from '../../components/Details/Details';
import Modal from '../../components/UI/Modal/Modal';

class DetailProduct extends Component{
    state = {
        product:{},
        modal:true
    }

    //Obtener producto por id
    componentDidMount(){
        
        if(this.props.match.params.id){
            axios.get('/products/' + this.props.match.params.id)
            .then(response=>{
                const product = response.data;
                product['category'] = 'Belleza';
                product['dimension'] = '50cm x 20cm';
                product['brand'] = 'Wolox';
                product['stock'] = '10';
                product['description'] = "Excelente producto para comprar";
                this.setState({product:product,modal:false});
                console.log(this.state.product)
            })
            .catch(err=>{
                console.log(err);
            });
        }
    }

    render(){
        return(
            <div className={classes.DetailProduct}>
                <Modal show={this.state.modal} title={"Espera"} msg={"Estamos cargando el producto"}/>
                <h1>{this.state.product.name}</h1>
                <img src={thumbnail} alt=""></img>
                <b>Descripción:</b>
                <p>{this.state.product.description}</p>
                <Details product={this.state.product}/>
            </div>
        );
    }

}

export default DetailProduct;