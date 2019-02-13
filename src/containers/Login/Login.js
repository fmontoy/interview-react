import React,{Component} from 'react';
import classes from './Login.css';
import axios from 'axios';
import Modal from '../../components/UI/Modal/Modal';
class Login extends Component{
    state = {
        form:{
            nombre:{
                type:'text',
                value:'',
                label:'Nombre',
                placeholder:'Nombre',
                validation:{
                    required:true
                },
                valid:false
            },
            apellido:{
                type:'text',
                value:'',
                label:'Apellido',
                placeholder:'Apellido',
                validation:{
                    required:true
                },
                valid:false
            },
            email:{
                type:'email',
                value:'',
                label:'Email',
                placeholder:'algo@algo.com',
                validation:{
                    required:true,
                    regex:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.([A-Za-z])+$/
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

    validateForm(value,rules){
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== '' && isValid
        }
        if(rules.regex){
            isValid = rules.regex.test(value, () => {}) && isValid
        }
        return isValid;
    }

    submitFormHandler = () =>{
        const finalForm = this.state.form;
        let form = {}
        for (const key in finalForm) {
            form[key] = finalForm[key].value
        }

        axios.post("http://localhost:3001/sign_in",form)
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
                close={this.onCloseHandler}
                title={this.state.modal.title}
                msg={this.state.modal.message}>
            <button className={classes.ModalButton} onClick={this.onCloseHandler}>Ok</button>    
            </Modal>

            <h1>Inicio de Sesión</h1>
                {formInputs.map((input,index) =>{
                    return (
                        <div className={classes.FormContainer} key={index}>
                            <label >{input.config.label}:</label><br></br>
                            <input
                            key={input.id}
                            type={input.config.type} 
                            value = {input.config.value}
                            placeholder = {input.config.placeholder} 
                            onChange={(event)=>this.inputChangedHandler(event,input.id)}
                            className={[classes.Input,this.state.form[input.id].valid 
                                      ? classes.Valid
                                      : classes.Invalid].join(' ')}/>
                        </div>
                    ) 
                })}
                <button onClick={this.submitFormHandler} 
                        disabled={this.state.isFormValid}
                        className={classes.Button}>
                        LOGIN</button>
            </div>
        );
    }
}

export default Login;
