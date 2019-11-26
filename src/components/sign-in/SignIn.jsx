import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle, auth } from '../../firebase/fireBaseUtils'

import './signIn.scss';


class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);

        } catch (err) {
            console.log(err);
        }

        this.setState({ email: '', password: '' });


    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {

        const { email, password } = this.state;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='email'
                        required />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='password'
                        required />
                    <div className='buttons'>

                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            {' '}
                            Sign in with Google {' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

};


export default SignIn;