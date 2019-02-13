import React,{Component} from 'react';
import classes from './Login.css';
import axios from '../../axios';
import Modal from '../../components/UI/Modal/Modal';
class Login extends Component{
    state = {
        form:{
            nombre:{
                type:'text',
                value:'',
                placeholder:'Nombre',
                validation:{
                    required:true,
                    minLength:4
                },
                valid:false
            },
            apellido:{
                type:'text',
                value:'',
                placeholder:'Apellido',
                validation:{
                    required:true,
                    minLength:4
                },
                valid:false
            },
            email:{
                type:'email',
                value:'',
                placeholder:'Email',
                validation:{
                    required:true,
                    regex:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.([A-Za-z])+.([A-Za-z])*$/
                },
                valid:false
            }
        },
        isFormValid:true,
        modal: {
            state:false,
            title:'',
            message:''
        }
    }

    //Funcion que permite actualizar el valor ingresado por el usuario en el formulario    
    inputChangedHandler = (event,key)=>{
       const updatedForm = {...this.state.form}
       const updatedElement = {...updatedForm[key]}
       updatedElement.value = event.target.value;
       updatedForm[key] = updatedElement
       const isValid = this.validateForm(updatedForm[key].value,updatedForm[key].validation)
       updatedForm[key].valid = isValid;
       let validForm = true
       for (const key in updatedForm) {
            validForm = updatedForm[key].valid && validForm
       }
       this.setState({form:updatedForm, isFormValid:!validForm});  
    }

    // Validar si las reglas para validar formulario estan siendo cumplidas 
    validateForm(value,rules){
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== '' && isValid
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid
        }
        if(rules.regex){
            isValid = rules.regex.test(value, () => {}) && isValid
        }
        return isValid;
    }

    //Enviar POST con el formulario, mostrar un Modal en caso de exito o error
    submitFormHandler = () =>{
        const finalForm = this.state.form;
        let form = {}
        for (const key in finalForm) {
            form[key] = finalForm[key].value
        }

        axios.post("/sign_in",form)
        .then((response)=>{
            const success= {...this.state.modal};
            success.state=true;
            success.title = "Logeado";
            success.message="Te has logeado exitosamente"
            this.setState({modal:success});
            })
        .catch(err=>{
            const error = {...this.state.modal};
            error.state = true;
            error.title = "ERROR";
            error.message = "Lo sentimos, hay un problema."
            this.setState({modal:error});
        });
    }

    //Funcion para cerrar el Modal con el boton 'Ok'
    onCloseHandler = () =>{
        const modal = {...this.state.modal};
        if(modal.title==="ERROR"){
            modal.state = false;
            this.setState({modal:modal});
        }else if(modal.title ==="Logeado"){
            console.log("aquí estoy");
            modal.state = false;
            this.setState({modal:modal});
            this.props.history.push({pathname:'/products'})
        }
        
    }

    render(){
        const formInputs = [];
        for(let key in this.state.form){
            formInputs.push({
                id:key,
                config:this.state.form[key]
            });
        }

        return(
   
            <div className={classes.Login}>
                <Modal 
                    show={this.state.modal.state}
                    title={this.state.modal.title}
                    msg={this.state.modal.message}>
                    <button className={classes.ModalButton} onClick={this.onCloseHandler}>Ok</button>    
                </Modal>         
                <div className={classes.Form}>
                    <h1>Inicio de Sesión</h1>
                        {formInputs.map((input,index) =>{
                            return (
                                    <input key={index}
                                    type={input.config.type} 
                                    value = {input.config.value}
                                    placeholder = {input.config.placeholder} 
                                    onChange={(event)=>this.inputChangedHandler(event,input.id)}
                                    className={[classes.Input,this.state.form[input.id].valid 
                                            ? classes.Valid
                                            : classes.Invalid].join(' ')}/>
                            );
                        })}
                        <button onClick={this.submitFormHandler} 
                                disabled={this.state.isFormValid}
                                className={classes.Button}>
                            LOGIN</button>
                </div>
            </div>
        );
    }
}

export default Login;
