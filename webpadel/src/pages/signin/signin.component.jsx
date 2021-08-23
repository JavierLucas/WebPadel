import React from 'react';

import InputForm from '../../components/input-form/input-form.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './signin.styles.scss';



class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            passWord: ''
        }
    }

    render(){
        return(
            <div className='sign-in'>
                <h3>Iniciar sesión</h3>
                <p>Inicia sesión con tu red social:</p>
                <div className='button-line'>
                    <button>
                        Facebook                        
                    </button>
                    <button>
                        Google
                    </button>
                    <button>
                        Twitter
                    </button>
                </div>

                <p>O hazlo con tu correo y contraseña:</p>
                <form>
                    <InputForm
                        name='email'
                        type='email'
                        label='Correo electrónico'
                        value={this.state.email}
                        required
                        handleChange={null}
                    />
                
                    <InputForm
                        name='password'
                        type='password'
                        label='Contraseña'
                        value={this.state.passWord}
                        required
                        handleChange={null}
                    />

                    <CustomButton>
                        ENVIAR
                    </CustomButton>

                    <CustomButton type='button' inverse>
                        CREAR UNA NUEVA CUENTA
                    </CustomButton>


                </form>
            </div>
        )
    }
}

export default SignIn;